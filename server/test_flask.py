import unittest

import networkx as nx

from app import create_test_app, db
from app import Gene, Pathway, pathway_members, next_degree, nodes, edges


class MyTest(unittest.TestCase):
    query_genes = ['A', 'B', 'C']
    genes = ['A', 'B', 'C', 'D', 'E', 'F']
    pathway = [{'name': 'pw_name', 'source': 'test_pw_db'}]
    pathway_members = [
        {'pw_id': 1, 'gene_id': 4},
        {'pw_id': 1, 'gene_id': 5},
    ]

    # test graph
    fake_edges = [(1, 2), (2, 3), (2, 4), (4, 5)]
    G = nx.Graph()
    G.add_edges_from(fake_edges)

    def setUp(self):
        self.app = create_test_app()
        db.create_all()

        # add genes and pathways
        for i, gene in enumerate(self.genes):
            new_gene = Gene(id=i+1, symbol=gene)
            db.session.add(new_gene)
        for i, pw in enumerate(self.pathway):
            new_pathway = Pathway(id=i+1, source=pw['source'], name=pw['name'])
            db.session.add(new_pathway)
        db.session.commit()

        # link genes to pathways
        for pw_member in self.pathway_members:
            statement = pathway_members.insert().values(gene_id=pw_member['gene_id'], pathway_id=pw_member['pw_id'])
            db.session.execute(statement)
        db.session.commit()

        # test graph
        fake_edges = [(1, 2), (1, 3), (2, 3), (3, 4)]
        G = nx.Graph()
        G.add_edges_from(fake_edges)

    def test_hello_world_is_str(self):
        self.assertIsInstance("hello world", str)

    def test_input_genes_returns_expected_ids(self):
        expected_ids = {1, 2, 3}
        input_gene_symbols = ['A', 'B', 'C']
        input_genes = {
            gene.id for gene in \
            Gene.query.filter(Gene.symbol.in_(input_gene_symbols)).all()
        }
        self.assertEqual(input_genes, expected_ids)

    def test_pathway_returns_expected_name(self):
        expected_pw_name = 'pw_name'
        pw = db.session.query(Pathway).first()
        self.assertEqual(pw.name, expected_pw_name)

    def test_pathway_returns_expected_source(self):
        expected = 'test_pw_db'
        pw = db.session.query(Pathway).first()
        self.assertEqual(pw.source, expected)

    def test_pathway_members_returns_expected_genes_when_given_pathway(self):
        pathway = [1]
        expected_gene_ids = {4, 5}
        pathway_genes = {
            pw_entry[0] for pw_entry in
                db\
                .session\
                .query(pathway_members)\
                .filter(pathway_members
                        .c
                        .pathway_id.in_(pathway))\
                .all()
        }
        self.assertEqual(pathway_genes, expected_gene_ids)

    def test_pathway_members_return_expected_pathways_when_given_genes(self):
        sample_genes = {4, 5}
        expected_pathway_ids = {1}
        genes = db.session.query(Gene).filter(Gene.id.in_(sample_genes))
        pathway_ids = {pathway.id for gene in genes for pathway in gene.pathways}

        self.assertEqual(pathway_ids, expected_pathway_ids)

    def test_first_degree_returns_expected_genes(self):
        genes = {1, 2, 3}
        pathways = [1]
        expected_first = {1, 2, 3, 4}
        pathway_genes = {
            pw_entry[0] for pw_entry in
                db\
                .session\
                .query(pathway_members)\
                .filter(pathway_members
                        .c
                        .pathway_id.in_(pathways))\
                .all()
        }
        first = next_degree(center=genes, graph=self.G, pathway_genes=pathway_genes)
        self.assertEqual(first, expected_first)

    def test_second_degree_returns_expected_genes(self):
        genes = {1, 2, 3}
        pathways = [1]
        expected_second = {1, 2, 3, 4, 5}
        pathway_genes = {
            pw_entry[0] for pw_entry in
                db\
                .session\
                .query(pathway_members)\
                .filter(pathway_members
                        .c
                        .pathway_id.in_(pathways))\
                .all()
        }
        first = next_degree(center=genes, graph=self.G, pathway_genes=pathway_genes)
        second = next_degree(center=first, graph=self.G, pathway_genes=pathway_genes)
        self.assertEqual(second, expected_second)

    def test_nodes_returns_expected_shape(self):
        expected = {'data': {'id': 4, 'symbol': 'D', 'pathways': [1]}}
        gene = 4
        genes = Gene.query.filter_by(id = gene).all()
        res = nodes(genes)[0]
        self.assertDictEqual(res, expected)

    def test_edges_returns_expected_shape(self):
        expected = {'data': {'source': 1, 'target': 2}}
        res = edges(self.G)
        self.assertDictEqual(res[0], expected)

    def tearDown(self):
        db.session.remove()
        db.drop_all()


if __name__ == '__main__':
    unittest.main()
