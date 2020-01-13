import os
import json
import pickle

from flask import Flask, request, jsonify
from flask_cors import CORS

import go as go
import table as tbl

# for mocks
from time import sleep

app = Flask(__name__)
CORS(app)


current_dir = os.path.dirname(os.path.realpath(__file__))

graphs = {
    'biogrid': pickle.load(open(os.path.join(current_dir, 'biogrid.pkl'), 'rb'))
}

min_max = {
    'biogrid': pickle.load(open(os.path.join(current_dir, 'min_max_biogrid.pkl'), 'rb')),
}


@app.route('/api/go-terms', methods=['GET', 'POST'])
def go_terms():
    if request.method != 'POST':
        return 405

    query_genes = request.json['genes']

    ontologies_by_id = go.ontologies_by_id()
    go_terms_by_id = go.go_terms_by_id(query_genes)

    res = {
        'ontologies': {
            'byId': ontologies_by_id,
            'allIds': list(ontologies_by_id.keys()),
        },
        'goTerms': {
            'byId': go_terms_by_id,
            'allIds': list(go_terms_by_id.keys())
        }
    }

    return jsonify(res)


@app.route('/api/table', methods=['POST'])
def table():
    # if os.environ.get('USE_MOCKS'):
    #     return mock_table(request)

    return jsonify(tbl.table(request, min_max))


@app.route('/api/network', methods=['POST'])
def network():
    """
    {
        "selectedPathwayDatabase": "my_cancer_genome",
        "db": "biogrid",
        "genes": ["BRAF"],
        "selectedPathways": [333, 353, 2]
    }
    """
    query_list = request.json['genes']
    ppi_db = graphs[request.json['db']]
    selected_pw_db = request.json['selectedPathwayDatabase']
    selected_pathways = set(int(n) for n in request.json['selectedPathways'])
    genes = tbl.network_genes(query_list, selected_pathways, ppi_db, selected_pw_db)
    res = {
        "nodes": nodes(genes, ppi_db, selected_pw_db, selected_pathways, query_list),
        "links": links(genes, ppi_db)
    }
    return jsonify(res)


def nodes(gene_list, ppi_db, selected_pathway_db, selected_pathways, query_list):
    res = []
    for gene in gene_list:
        pathways_with_gene = ppi_db.nodes[gene][selected_pathway_db].intersection(selected_pathways)
        if gene in query_list:
            pathways_with_gene.add(0)
        node = {
            "id": gene,
            "pieChart": [
                {
                    "color": pw, "percent": 100/len(pathways_with_gene)
                }
                for pw in pathways_with_gene
            ]
        }
        res.append(node)
    return res


def links(gene_list, g):
    gene_list = set(gene_list).intersection(g.nodes)
    return [{
        "source": gene,
        "target": neighbor
    } for gene in gene_list for neighbor in set(g.neighbors(gene)).intersection(gene_list)]


# def mock_table(request):
#     selected_pathway_db = request.json['selectedPathwayDatabase']
#
#     pathway_sources_delays = {
#         'KEGG': 15,
#         'My Cancer Genome': 3,
#         'Reactome': 25
#     }
#
#     sleep(pathway_sources_delays[selected_pathway_db])
#     return jsonify({
#         "tableData": [
#             {
#                 "id": "3379",
#                 "name": "WNT ext path",
#                 "color": "#fe5d18",
#                 "membersLength": 12,
#                 "overlapLength": 5,
#                 "edgesLength": 5,
#                 "pVal": 0.0003250272196074229
#             },
#             {
#                 "id": "3380",
#                 "name": "CALC PKC ext path",
#                 "color": "#923b3e",
#                 "membersLength": 5,
#                 "overlapLength": 8,
#                 "edgesLength": 8,
#                 "pVal": 0.0013787906109511874
#             },
#             {
#                 "id": "4903",
#                 "name": "Jack Stat ext path",
#                 "color": "#82fd0f",
#                 "membersLength": 14,
#                 "overlapLength": 3,
#                 "edgesLength": 3,
#                 "pVal": 0.0006057200026052585
#             },
#             {
#                 "id": "5290",
#                 "name": "Mitogen Activated Protein-MAP Kinase Signaling path",
#                 "color": "#4c7fb8",
#                 "membersLength": 17,
#                 "overlapLength": 5,
#                 "edgesLength": 5,
#                 "pVal": 0.0008449145721473537
#             },
#             {
#                 "id": "6131",
#                 "name": "Receptor Tyrosine KinaseORGrowth Factor Signaling path",
#                 "color": "#521f74",
#                 "membersLength": 14,
#                 "overlapLength": 7,
#                 "edgesLength": 7,
#                 "pVal": 0.000026876482060089303
#             },
#             {
#                 "id": "6145",
#                 "name": "Protein Degradation Ubiquitination path",
#                 "color": "#ec8600",
#                 "membersLength": 7,
#                 "overlapLength": 3,
#                 "edgesLength": 3,
#                 "pVal": 0.0009249305959767607
#             },
#             {
#                 "id": "6194",
#                 "name": "Kinase Fusions path",
#                 "color": "#2b2e2c",
#                 "membersLength": 9,
#                 "overlapLength": 1,
#                 "edgesLength": 1,
#                 "pVal": 0.000954274430117962
#             },
#             {
#                 "id": "6380",
#                 "name": "AKT ext path",
#                 "color": "#9561e2",
#                 "membersLength": 26,
#                 "overlapLength": 9,
#                 "edgesLength": 9,
#                 "pVal": 0.00185390326478682
#             },
#             {
#                 "id": "6492",
#                 "name": "G-Protein Signaling path",
#                 "color": "#273b25",
#                 "membersLength": 1,
#                 "overlapLength": 6,
#                 "edgesLength": 6,
#                 "pVal": 0.000795553195050128
#             },
#             {
#                 "id": "7388",
#                 "name": "Hormone Signaling path",
#                 "color": "#9dfc27",
#                 "membersLength": 5,
#                 "overlapLength": 3,
#                 "edgesLength": 3,
#                 "pVal": 0.0004654716728720567
#             }
#         ]
#     })
