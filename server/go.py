import pickle

go = pickle.load(open('/Users/anna/Documents/sandbox_ramp_up/network_assessor_backend/GO.pkl', 'rb'))
ontology_names = {
    'biologicalProcess': 'Biological Process',
    'cellularLocation': 'Cellular Location',
    'molecularFunction': 'Molecular Function'
}


def ontologies_by_id():
    result = {}
    for ontology, go_terms in go.items():
        result[ontology] = {
            'goTerms': list(go_terms.keys()),
            'name': ontology_names[ontology]
        }
    return result


# for all go_terms, returns name and overlapping gene set
def go_terms_by_id(query_genes):
    query_genes = set(query_genes)
    go_terms_by_id_dict = {}
    for o, go_terms in go.items():
        for go_term, data in go_terms.items():
            overlap = list(query_genes.intersection(data['genes']))
            if len(overlap):
                go_terms_by_id_dict[go_term] = {
                    'name': data['name'],
                    'genes': overlap
                }
    return go_terms_by_id_dict


def all_ids():
    return [v.keys() for k, v in go.items()]


if __name__ == '__main__':
    print(all_ids())

