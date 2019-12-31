import mysql.connector


def test(hi):
    print(hi)


def get_db():
    return mysql.connector.connect(
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


def table(request, min_max):
    selected_pathway_db = request.json['selectedPathwayDatabase']
    selected_ppi_db = request.json['selectedPpiDatabase']
    genes = request.json['genes']
    if not len(genes):
        return

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

    ppi_name = ppi_name_map[selected_ppi_db]
    pw_db_name = pathway_name_map[selected_pathway_db]
    neighbor_count_table = 'neighbor_count_{}_{}'.format(
        ppi_name,
        pw_db_name
    )

    p_val_table = 'p_val_{}_{}'.format(
        ppi_name,
        pw_db_name
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
        pw_name = pw_members_dict[pw]['name']
        if pw in k_pw_v_pval:
            continue
        if min_max[ppi_name][pw_db_name][len_gs][pw_name]['max'] <= edge_lengths[pw]:
            k_pw_v_pval[pw] = '.000001'
            continue
        elif min_max[ppi_name][pw_db_name][len_gs][pw_name]['min'] >= edge_lengths[pw]:
            k_pw_v_pval[pw] = '1'
            continue

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

    return {
        "selectedPpiDatabase": selected_ppi_db,
        "selectedPathwayDatabase": selected_pathway_db,
        "tableData": table_data,
    }


if __name__ == '__main__':
    print('table')
