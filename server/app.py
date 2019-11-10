import json

from flask import Flask, request, jsonify
from flask_cors import CORS

import go as go

app = Flask(__name__)
CORS(app)

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

@app.route('/api/table', methods=['POST'])
def table():
    selectedPathwayDatabase = request.json['selectedPathwayDatabase']
    selectedPpiDatabase = request.json['selectedPpiDatabase']
    res = {
        "selectedPpiDatabase": selectedPpiDatabase,
        "selectedPathwayDatabase": selectedPathwayDatabase,
        "tableData": [
            {
                "id": "3379",
                "name": "WNT ext path",
                "membersLength": 12,
                "overlapLength": 5,
                "edgesLength": 5,
                "pVal": 0.0003250272196074229
            },
            {
                "id": "3380",
                "name": "CALC PKC ext path",
                "membersLength": 5,
                "overlapLength": 8,
                "edgesLength": 8,
                "pVal": 0.0013787906109511874
            },
            {
                "id": "4903",
                "name": "Jack Stat ext path",
                "membersLength": 14,
                "overlapLength": 3,
                "edgesLength": 3,
                "pVal": 0.0006057200026052585
            },
            {
                "id": "5290",
                "name": "Mitogen Activated Protein-MAP Kinase Signaling path",
                "membersLength": 17,
                "overlapLength": 5,
                "edgesLength": 5,
                "pVal": 0.0008449145721473537
            },
            {
                "id": "6131",
                "name": "Receptor Tyrosine KinaseORGrowth Factor Signaling path",
                "membersLength": 14,
                "overlapLength": 7,
                "edgesLength": 7,
                "pVal": 0.000026876482060089303
            },
            {
                "id": "6145",
                "name": "Protein Degradation Ubiquitination path",
                "membersLength": 7,
                "overlapLength": 3,
                "edgesLength": 3,
                "pVal": 0.0009249305959767607
            },
            {
                "id": "6194",
                "name": "Kinase Fusions path",
                "membersLength": 9,
                "overlapLength": 1,
                "edgesLength": 1,
                "pVal": 0.000954274430117962
            },
            {
                "id": "6380",
                "name": "AKT ext path",
                "membersLength": 26,
                "overlapLength": 9,
                "edgesLength": 9,
                "pVal": 0.00185390326478682
            },
            {
                "id": "6492",
                "name": "G-Protein Signaling path",
                "membersLength": 1,
                "overlapLength": 6,
                "edgesLength": 6,
                "pVal": 0.000795553195050128
            },
            {
                "id": "7388",
                "name": "Hormone Signaling path",
                "membersLength": 5,
                "overlapLength": 3,
                "edgesLength": 3,
                "pVal": 0.0004654716728720567
            }
        ]
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
