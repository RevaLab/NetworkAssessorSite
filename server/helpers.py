class Helper:
    @staticmethod
    def pathway_ids(genes):
        return {pathway.id for gene in genes for pathway in gene.pathways}
