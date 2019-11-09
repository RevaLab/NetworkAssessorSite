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
