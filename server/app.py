import os
import json

from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

import go as go

app = Flask(__name__)
CORS(app)


def get_db():
    return  mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="password",
    database="network_assessor",
)


def check_key(d, k):
    if k in d:
        return str(d[k])
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


@app.route('/api/table', methods=['POST', 'GET'])
def table():
    selected_pathway_db = request.json['selectedPathwayDatabase']
    selected_ppi_db = request.json['selectedPpiDatabase']
    genes = request.json['genes']

    mydb = get_db()
    mycursor = mydb.cursor(buffered=True)

    pathway_sources = {
        'KEGG': 1,
        'My Cancer Genome': 2,
        'Reactome': 3
    }

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
    """.format(pathway_sources[selected_pathway_db])

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
        'KEGG': 'kegg',
        'Reactome': 'reactome'
    }

    neighbor_count_table = 'neighbor_count_{}_{}'.format(
        ppi_name_map[selected_ppi_db],
        pathway_name_map[selected_pathway_db]
    )

    p_val_table = 'p_val_{}_{}'.format(
        ppi_name_map[selected_ppi_db],
        pathway_name_map[selected_pathway_db]
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

    table_data = [{
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
        "selectedPpiDatabase": selected_ppi_db,
        "selectedPathwayDatabase": selected_pathway_db,
        "tableData": table_data,
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
                { "color": 324, "percent": 50 }
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
