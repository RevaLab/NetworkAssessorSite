import os
import json

from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

import go as go

app = Flask(__name__)
CORS(app)


# if (os.environ.get('DISABLE_SQL') !='true'):
def get_db():
    return  mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="password",
    database="network_assessor",
)

def check_key(d, k):
    if k in d:
        return float(d[k])
    else:
        return -1000


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
    selectedPathwayDatabase = request.json['selectedPathwayDatabase']
    selectedPpiDatabase = request.json['selectedPpiDatabase']
    # selectedPpiDatabase = 'BioGrid'
    # selectedPathwayDatabase = 'KEGG'

    mydb = get_db()
    mycursor = mydb.cursor(buffered=True)

    pathway_sources = {
        'KEGG': 1,
        'My Cancer Genome': 2,
    }

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
    ppi_name_map = {
        'BioGrid': 'biogrid',
        'STRING': 'string',
    }
    pathway_name_map = {
        'My Cancer Genome': 'my_cancer_genome',
        'KEGG': 'kegg'
    }

    neighbor_count_table = 'neighbor_count_{}_{}'.format(
        ppi_name_map[selectedPpiDatabase],
        pathway_name_map[selectedPathwayDatabase]
    )

    p_val_table = 'p_val_{}_{}'.format(
        ppi_name_map[selectedPpiDatabase],
        pathway_name_map[selectedPathwayDatabase]
    )

    # gene ids => edge lengths
    edge_length_query = """
        SELECT pw_id, SUM(neighbor_count)
        FROM {}
        WHERE gene_id in ({}) GROUP BY pw_id;
    """.format(neighbor_count_table, ",".join(genes_ids_for_sql_query))

    mycursor.execute(edge_length_query)
    edge_lengths = dict(mycursor.fetchall())

    len_gs = len(genes)

    subtable_query = """
            SELECT pw_id, p_val, edge_count FROM network_assessor.{}
            WHERE len_gs = {}""".format(p_val_table, len_gs)
    mycursor.execute(subtable_query)
    subtable = mycursor.fetchall()

    k_pw_v_pval = {}
    for pw, p_val, edge_length in subtable:
        if edge_lengths[pw] == edge_length:  # check every time if pathway value edges is in my dict 1: 5
            k_pw_v_pval[pw] = str(p_val)  # if equal, assign to p_val

    ##TODO: FIX TO DICTIONARY
    # k_pw_v_pval = {}
    # for pw, edge_length in edge_lengths.items():
    #     query = """
    #         SELECT pw_id, p_val FROM network_assessor.{}
    #         WHERE len_gs = {}
    #         AND edge_count = {}
    #         AND pw_id = {};
    #     """.format(p_val_table, len_gs, str(edge_length), pw)
    #     mycursor.execute(query)
    #     res = mycursor.fetchall()
    #     if len(res):
    #         pw_id, p_val = res[0]
    #         k_pw_v_pval[pw_id] = p_val
    #     else:
    #         k_pw_v_pval[pw] = -10000

    tableData = [{
            "id": pw_id,
            "name": pw_data['name'],
            "membersLength": len(pw_data['genes']),
            "overlapLength": len(pw_data['genes'].intersection(gene_ids)),
            "edgesLength": check_key(edge_lengths, pw_id),
            "pVal": check_key(k_pw_v_pval, pw_id),
        }
        for pw_id, pw_data in pw_members_dict.items()
    ]

    res = {
        "selectedPpiDatabase": selectedPpiDatabase,
        "selectedPathwayDatabase": selectedPathwayDatabase,
        "tableData": tableData,
    }

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
