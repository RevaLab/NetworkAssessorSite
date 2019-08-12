<template>
  <div class="graph" id="cy">
  </div>
</template>

<script>

import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
// import graph from '@/testCytoscapeData';
import options from '@/cytoscapeOptions';

cytoscape.use(coseBilkent);
let cy;
window.cy = cy;

export default {
  name: 'graph',
  computed: {
    k_gene_v_pathways() {
      return this.$store.state.k_gene_v_pathways;
    },
    k_pathway_v_color() {
      return this.$store.state.k_pathway_v_color;
    },
    selectedPathways() {
      return this.$store.state.selectedPathways;
    },
    selectedNetwork() {
      return this.$store.state.selectedNetwork;
    },
    elements() {
      console.log('ELEMENTS:', this.$store.state.k_graph_v_elements[this.selectedNetwork]);
      return this.$store.state.k_graph_v_elements[this.selectedNetwork];
    },
  },
  watch: {
    k_pathway_v_color: {
      handler(newColors) {
        options.styleNodes(cy, this.k_gene_v_pathways, newColors, this.selectedPathways);
      },
      deep: true,
    },
    elements: {
      handler() {
        cy.destroy();
        this.runCytoscape();
      },
    },
    selectedPathways: {
      handler() {
        options.styleNodes(cy, this.k_gene_v_pathways, this.k_pathway_v_color, this.selectedPathways);
      },
    },
  },
  mounted() {
    this.runCytoscape();
  },
  methods: {
    runCytoscape() {
      // instantiate cytoscape
      cy = cytoscape({
        container: document.getElementById('cy'),
        elements: this.elements,
        layout: {
          name: 'cose-bilkent',
          ...options.coseOptions,
          condense: true,
        },
        style: [
          {
            selector: 'node',
            style: {
              shape: 'ellipse',
              'background-color': '#ACFFFF',
              label: 'data(symbol)',
            },
          },
        ],
      });

      // style network
      options.styleNodes(cy, this.k_gene_v_pathways, this.k_pathway_v_color, this.selectedPathways);
    },
  },
};

</script>


<style scoped>
  .graph {
    border: solid 5px black;
    margin: auto auto;
    min-height: 200px;
    box-sizing: border-box;
    height: calc(100vh - 100px);
    width: calc(100vw - 350px);
  }
</style>
