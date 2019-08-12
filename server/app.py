from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import joinedload

import networkx as nx

db = SQLAlchemy()

def create_test_app():
    test_app = Flask(__name__)
    test_app.config['TESTING'] = True
    test_app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/network_assessor_test'
    test_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    db.init_app(test_app)
    test_app.app_context().push()
    return test_app

def create_production_app():
    production_app = Flask(__name__)
    production_app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/network_assessor'
    production_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    db.init_app(production_app)
    production_app.app_context().push()
    return production_app


app = create_production_app()
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

def next_degree(center, graph, pathway_genes):
    center_neighbors = {n for gene in center for n in graph[gene]} #TODO: if graph.hasnode()?
    return pathway_genes.intersection(center_neighbors).union(center)

def nodes(genes):
    return [
        {'data':
             {'id': gene.id,
              'symbol': gene.symbol,
              'pathways': [pw.id for pw in gene.pathways]
              }
         }
        for gene in genes
    ]

def edges(graph):
    return [
       {
       'data':
           {'source': edge[0],
            'target': edge[1],
            }
       }
        for edge in graph.edges
    ]


# TODO: convert to a POST request
@app.route('/api/network/', methods = ['POST'])
def network():
    input_gene_symbols = request.get_json()['genes']
    selected_pathways = request.get_json()['selectedPathways']

    fake_edges_test = [(1, 2), (1, 3), (2, 3), (3, 4), (4,5)]
    fake_edges_test2 = [(1, 2), (2, 4)]
    # all_genes_test2 = [1, 2]

    test = nx.Graph()
    test2 = nx.Graph()
    test.add_edges_from(fake_edges_test)
    test2.add_edges_from(fake_edges_test2)

    graph = test2

    input_genes = {
        gene.id for gene in \
        Gene.query.filter(Gene.symbol.in_(input_gene_symbols)).all()
    }


    pathway_entries = db.session\
            .query(pathway_members)\
            .filter(pathway_members
                    .c
                    .pathway_id.in_(selected_pathways))\
            .all()

    k_gene_v_pathways = {
        gene_id: [0] for gene_id in input_genes
    }
    pathway_genes = set()

    for entry in pathway_entries:
        gene = entry[0]
        pathway = entry[1]

        pathway_genes.add(gene)

        if gene not in k_gene_v_pathways:
            k_gene_v_pathways[gene] = []

        k_gene_v_pathways[gene].append(pathway)

    first_degree = next_degree(center=input_genes, graph=graph, pathway_genes=pathway_genes)
    second_degree = next_degree(center=first_degree, graph=graph, pathway_genes=pathway_genes)

    first_degree_genes = Gene.query.filter(Gene.id.in_(first_degree))\
        .options(joinedload(Gene.pathways))\
        .all()
    second_degree_genes = Gene.query.filter(Gene.id.in_(second_degree)) \
        .options(joinedload(Gene.pathways)) \
        .all()

    first_degree_nodes = nodes(first_degree_genes)
    second_degree_nodes = nodes(second_degree_genes)

    first_degree_graph = graph.subgraph(first_degree)
    second_degree_graph = graph.subgraph(second_degree)

    return jsonify(
        {
            'k_gene_v_pathways': k_gene_v_pathways,
            'network': {
                '1': {
                    'nodes': first_degree_nodes,
                    'edges': edges(first_degree_graph),
                },
                '2': {
                    'nodes': second_degree_nodes,
                    'edges': edges(second_degree_graph),
                },
            }
        })


@app.route('/api/p_values/')
def get_p_values():
    sample = {'foo': 'bar'}
    return jsonify(sample)


# MODELS
pathway_members = db.Table('pathway_members',
    db.Column('gene_id', db.Integer, db.ForeignKey('gene.id'), primary_key=True),
    db.Column('pathway_id', db.Integer, db.ForeignKey('pathway.id'), primary_key=True)
)


class Gene(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.String(80), unique=True, nullable=False)
    pathways = db.relationship(
        'Pathway',
        secondary=pathway_members,
        lazy='subquery',
        backref = db.backref('genes', lazy=True)
    )
    def __repr__(self):
        return '<Gene %r>' % self.symbol

class Pathway(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    source = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Pathway %r>' % self.name

class Ppi(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32),  unique=True, nullable=False)

    def __repr__(self):
        return '<PPI db %r>' % self.name

class GeneNeighbors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    count = db.Column(db.Integer, nullable=False)
    gene_id = db.Column(db.Integer, db.ForeignKey('gene.id'), nullable=False)
    pathway_id = db.Column(db.Integer, db.ForeignKey('pathway.id'), nullable=False)
    ppi_id = db.Column(db.Integer, db.ForeignKey('ppi.id'), nullable=False)

    def __repr__(self):
        return '<Gene Neighbors {}>'.format(self.count)


if __name__ == '__main__':
    app.run()
