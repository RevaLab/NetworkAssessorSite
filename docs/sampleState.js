const state = {
  queryUI: {
    queryList: [
      "gene_1",
      "gene_2",
      "gene_5",
    ],
    filteredQueryList: [
      "gene_2",
    ],
    selectedGoIds: [
      "go_id_1",
    ],
    ontologies: {
      byId: {
        ontology1: [
          "go_id_1",
          "go_id_2",
        ],
      }
    },
    goTerms: {
      byId: {
        go_id_1: {
          name: "cytosol",
          genes: [
            "gene2",
          ],
        }
      },
      allIds: ['go_id_1'],
    },
  },
  networkUI: {
    selected_degree: 'first_degree',
    networks_by_source: {
      kegg: {
        first_degree: {
          //cytoscape network object
        },
        second_degree: {
          //cytoscape network object
        },
      },
    },
    query_list_details: {
      not_in_ppi_db: [
        "gene_5",
      ],
      with_interactions: [
        "gene_1",
        "gene_2",
      ],
      isolates: [],
    },
    sources: ['kegg', 'reactome', 'my_cancer_genome'],
    selected_source: 'kegg',
    p_values_by_source: {
      kegg: { 'pathway_a': 0.01 }
    },
    edges_by_source: {
      'kegg': { 'pathway_a': 2 }
    },
    ql_overlap_lengths_by_source: {
      'kegg': { 'pathway_a': 1 }
    },
    pw_list_modal: ["gene_1", "gene_4", "gene_27"], //local state?
      ql_overlap_list_modal: ["gene_1"], //local state?
        pw_lengths_by_source: {
      'kegg': { 'pathway_a': 3 }
    },
    selected_pathways_by_source: {
      'kegg': [],
        'reactome': [],
          'user_pathways': []
    }, // backend call
    colors_by_source: {
      'kegg': {
        'pathway_a': '#pink'
      },
      'reactome': { }
    },
    query_list_color: '#turquoise',
      user_pathways: {
      'user_pathway_1': {
        name: 'custom pathway elliott',
          genes: ["gene_a"],
      },
    },
  },
};