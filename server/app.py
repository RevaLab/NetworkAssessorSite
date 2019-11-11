import json

from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

import go as go

app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="password",
    database="network_assessor",
)

print("hello world")
print(mydb)

mycursor = mydb.cursor()


@app.route('/sql-test', methods=['GET'])
def run_sql_test():
    print(mycursor)
    mycursor.execute("SELECT * FROM network_assessor.gene")
    print(mycursor)
    res = {
        row[0]: row[1]
        for row in mycursor
    }
    return jsonify(res)


@app.route('/api/go-terms', methods=['GET','POST'])
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

@app.route('/api/pathways', methods=['GET'])
def pathways():
    res = {
        "pathwayDatabases": {
            "byId": {
                "1": {
                    "name": 'KEGG',
                },
                "2": {
                    "name": 'My Cancer Genome',
                },
                "3": {
                    "name": 'Reactome',
                }
            },
            "allIds": [2, 1, 3],
        },
        "ppiDatabases": {
            "byId": {
                "1": {
                    "name": 'STRING',
                },
                "2": {
                    "name": 'BioGrid',
                },
            },
            "allIds": [1, 2],
        }
    }
    return jsonify(res)


@app.route('/api/table', methods=['POST', 'GET'])
def table():
    selectedPathwayDatabase = 'My Cancer Genome'
    selectedPpiDatabase = 'BioGrid'
    # input: selectedPathwayDatabase
    # output: array of objects with id and names
    pathway_sources = {
        'My Cancer Genome': 2,
    }

    # genes => gene ids
    genes = ['FLT3', 'SMO', 'GLA', 'SGCB', 'OAT', 'CAPN3', 'ASS1', 'AGXT', 'AKT1', 'PTPN1', 'PIAS1', 'CDKN1B', 'THEM4', 'CCNE1', 'MAP2K4', 'ATG7', 'ATG12', 'BAD', 'BCL2L1']
    genes_for_sql_query = ['"{}"'.format(gene) for gene in genes]
    mycursor.execute(
        "SELECT id FROM network_assessor.gene WHERE symbol IN ({});".format(", ".join(genes_for_sql_query))
    )
    gene_ids = {g[0] for g in mycursor.fetchall()}
    genes_ids_for_sql_query = ['"{}"'.format(gene) for gene in gene_ids]

    # pathway source => pathway members
    pathway_member_query = """
        SELECT pw_id, gene_id, name 
        FROM pathway_member 
        JOIN pathway ON pathway.id = pw_id 
        WHERE source={};
    """.format(pathway_sources[selectedPathwayDatabase])

    mycursor.execute(pathway_member_query)
    pathway_members = mycursor.fetchall()

    pw_members_dict = {}

    for pw_id, gene, name in pathway_members:
        if pw_id not in pw_members_dict:
            pw_members_dict[pw_id] = {
                'genes': set(),
                'name': name,
            }
        pw_members_dict[pw_id]['genes'].add(gene)

    # gene ids => edge lengths
    edge_length_query = """
        SELECT pw_id, SUM(neighbor_count)
        FROM neighbor_count_biogrid_my_cancer_genome
        WHERE gene_id in ({}) GROUP BY pw_id;
    """.format(",".join(genes_ids_for_sql_query))

    mycursor.execute(edge_length_query)
    edge_lengths = dict(mycursor.fetchall())

    len_gs = len(genes)

    # edge lengths => p_val
    k_pw_v_pval = {}
    for pw, edge_length in edge_lengths.items():
        query = """
            SELECT pw_id, p_val FROM network_assessor.p_val_biogrid_my_cancer_genome
            WHERE len_gs = {}
            AND edge_count = {}
            AND pw_id = {};
        """.format(len_gs, str(edge_length), pw)
        mycursor.execute(query)
        res = mycursor.fetchall()
        if len(res):
            pw_id, p_val = res[0]
            k_pw_v_pval[pw_id] = p_val
        else:
            k_pw_v_pval[pw] = -10000

    tableData = [{
            "id": pw_id,
            "name": pw_data['name'],
            "membersLength": len(pw_data['genes']),
            "overlapLength": len(pw_data['genes'].intersection(gene_ids)),
            "edgesLength": int(edge_lengths[pw_id]),
            "pVal": k_pw_v_pval[pw_id]
        }
        for pw_id, pw_data in pw_members_dict.items()
    ]

    res = {
        "selectedPpiDatabase": selectedPpiDatabase,
        "selectedPathwayDatabase": selectedPathwayDatabase,
        "tableData": tableData,
    }

    # res = {
    #     "selectedPpiDatabase": selectedPpiDatabase,
    #     "selectedPathwayDatabase": selectedPathwayDatabase,
    #     "tableData": [
    #         {
    #             "id": "3379",
    #             "name": "WNT ext path",
    #             "membersLength": 12,
    #             "overlapLength": 5,
    #             "edgesLength": 5,
    #             "pVal": 0.0003250272196074229
    #         },
    #     ]
    # }
    return jsonify(res)


@app.route('/api/network', methods=['POST'])
def network():
    res = {
        "nodes": [
            {
            "id": "AKT1",
            "pieChart": [
                { "color": 0, "percent": 50 },
                { "color": 6380, "percent": 50 }
            ]
            },
            {
            "id": "BAD",
            "pieChart": [
                { "color": 3369, "percent": 33.33 },
                { "color": 3116, "percent": 33.34 },
                { "color": 2942, "percent": 33.33 }
            ]
            },
            {
            "id": "BCL2L1",
            "pieChart": [
                { "color": 1210, "percent": 25 },
                { "color": 1911, "percent": 25 },
                { "color": 1097, "percent": 25 },
                { "color": 2725, "percent": 25 }
            ]
            }
        ],
        "links": [
            { "source": "AKT1", "target": "BAD" },
            { "source": "BAD", "target": "BCL2L1" },
            { "source": "BCL2L1", "target": "AKT1" },
        ]
    }

    return jsonify(res)
