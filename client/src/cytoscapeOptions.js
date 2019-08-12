export default {
  styleNodes(cy, k_gene_v_pathways, k_pathway_v_color, selectedPathways) {

    cy.nodes().forEach(
      (node) => {
        const gene = node.data('id');
        const pathways = k_gene_v_pathways[gene];
        let selectedGenePathways = pathways
          .filter(pw => selectedPathways.includes(pw) || pw === 0);

        if (selectedGenePathways.includes(0) && selectedGenePathways.length === 1) { // query list only
          node.style('shape', 'rectangle');
          node.style('width', '70px');
          node.style('height', '30px');
          node.style('border-width', '0');
          node.style('background-color', k_pathway_v_color[0]);
        } else { // multiple pathways
          node.style('shape', 'ellipse');

          if (selectedGenePathways.includes(0)) { // query list and multiple pathways
            node.style('border-width', '2px');
            node.style('border-style', 'solid');
            node.style('border-color', 'red');
            node.style('border-opacity', '.8');
            node.style('width', '55px');
            node.style('height', '55px');
          }
        }

        // color nodes
        const pathwayLength = selectedGenePathways.length || 1;
        const percentPathway = (100 / pathwayLength).toString();
        selectedGenePathways.forEach((pathway, i) => { // colors according to multiple pathways
            const pie_index = i + 1;
            node.style(`pie-${pie_index}-background-color`, k_pathway_v_color[pathway]);
            node.style(`pie-${pie_index}-background-size`, `${percentPathway}%`);
          });
      });
  },
  coseOptions: {
      // Called on `layoutready`
      ready() {

      },
      // Called on `layoutstop`
      stop() {
      },
      // Whether to include labels in node dimensions. Useful for avoiding label overlap
      nodeDimensionsIncludeLabels: true,
        // spacingFactor: 0,
      // number of ticks per frame; higher is faster but more jerky
      refresh: 30,
      // Whether to fit the network view after when done
      fit: true,
      // Padding on fit
      padding: 45,
      // Whether to enable incremental mode
      randomize: true,
      // Node repulsion (non overlapping) multiplier
      nodeRepulsion: 8000,
      // Ideal (intra-graph) edge length
      idealEdgeLength: 100,
      // Divisor to compute edge forces
      edgeElasticity: 0.45,
      // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
      nestingFactor: 0.1,
      // Gravity force (constant)
      gravity: 0.65,
      // Maximum number of iterations to perform
      numIter: 2500,
      // Whether to tile disconnected nodes
      tile: true,
      // Type of layout animation. The option set is {'during', 'end', false}
      animate: false,
      // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
      tilingPaddingVertical: 0,
      // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
      tilingPaddingHorizontal: 0,
      // Gravity range (constant) for compounds
      gravityRangeCompound: 1.5,
      // Gravity force (constant) for compounds
      gravityCompound: 1.0,
      // Gravity range (constant)
      gravityRange: 1.5,
      // Initial cooling factor for incremental layout
      initialEnergyOnIncremental: 0.5
    },
};
