import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import network from '@/testCytoscapeData';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    k_geneSymbol_v_id: {
      A: 1,
      B: 2,
      C: 3,
    },
    k_gene_v_pathways: {
      1: [0],
      2: [0],
      3: [0],
      4: [],
      5: [],
    },
    k_graph_v_elements: {
      1: network[1],
      2: network[2],
    },
    k_networkDatabases_v_details: {
      1: { name: 'test', networks: [1, 2, 3] },
      2: { name: 'BioGrid', networks: [4, 5, 6] },
    },
    k_pathway_v_details: {
      0: { name: 'Query List', source: 'query' },
      1: { name: 'pw_1', source: 'test' },
      2: { name: 'pw_2', source: 'test' },
    },
    k_pathway_v_genes: {
      1: [4, 5],
    },
    k_pathway_v_color: {
      0: '#AAFFFF',
      1: 'pink',
      2: 'black',
    },
    k_pathwayDatabases_v_id: {
      1: 'test',
      2: 'kegg',
      3: 'reactome',
    },
    k_pathwayDatabaseID_v_pathways: {
      1: [0, 1, 2],
      2: [],
      3: [],
    },
    allPathways: [1, 2],
    queryGenes: ['A', 'B', 'C'],
    selectedDegree: 'first_degree',
    selectedPathways: [],
    selectedPathwaysPending: [],
    selectedPathwayDatabase: 1,
    selectedNetworkDatabase: 'test',
    networkID: {
      test: {
        first_degree: 1,
        second_degree: 2,
        third_degree: 3,
      },
      test2: {
        first_degree: 4,
        second_degree: 5,
        third_degree: 6,
      },
    },
    selectedNetwork: 1,
  },
  mutations: {
    LOAD_NETWORK(state, network) {
      state.k_graph_v_elements = network;
    },
    UPDATE_COLOR(state, { pathway, color }) {
      state.k_pathway_v_color[pathway] = color;
    },
    UPDATE_K_GENE_V_PATHWAYS(state, k_gene_v_pathways) {
      state.k_gene_v_pathways = k_gene_v_pathways;
    },
    UPDATE_SELECTED_DEGREE(state, selectedDegree) {
      state.selectedDegree = selectedDegree;
    },
    UPDATE_SELECTED_PATHWAY_DB(state, pwDb) {
      state.selectedPathwayDb = pwDb;
    },
    UPDATE_SELECTED_PATHWAYS(state, newPathways) {
      state.selectedPathways = newPathways;
    },
    UPDATE_SELECTED_PATHWAYS_PENDING(state, newPathways) {
      state.selectedPathwaysPending = newPathways;
    },
    UPDATE_SELECTED_NETWORK_DB(state, networkDb) {
      state.selectedNetworkDb = networkDb;
      state.selectedNetwork = state.networkID[state.selectedNetworkDatabase][state.selectedDegree];
    },
    UPDATE_SELECTED_NETWORK(state, { change, newVal }) {
      if (change === 'degree') {
        state.selectedNetwork = state.networkID[state.selectedNetworkDatabase][newVal];
      }
    },
  },
  actions: {
    updateColor(store, pathwayColor) {
      store.commit('UPDATE_COLOR', pathwayColor);
    },
    updateSelectedDegree(store, selectedDegree) {
      store.commit('UPDATE_SELECTED_DEGREE', selectedDegree);
      store.commit('UPDATE_SELECTED_NETWORK', { change: 'degree', newVal: selectedDegree });
    },
    updateSelectedNetworkDb(store, networkDb) {
      store.commit('UPDATE_SELECTED_NETWORK_DB', networkDb);
    },
    updateSelectedNetwork(store) {
      store.commit('UPDATE_SELECTED_NETWORK');
    },
    updateSelectedPathwayDb(store, pwDb) {
      store.commit('UPDATE_SELECTED_PATHWAY_DB', pwDb);
    },
    updateSelectedPathways(store, newPathways) {
      store.commit('UPDATE_SELECTED_PATHWAYS', newPathways);
    },
    updateSelectedPathwaysPending(store, newPathways) {
      store.commit('UPDATE_SELECTED_PATHWAYS_PENDING', newPathways);
    },
    async loadNetwork(store, { genes, selectedPathways }) {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/network/',
          {
            genes,
            selectedPathways,
            'genes': ['A', 'B', 'C'],
            selectedPathways: [1],
          },
        );
        store.commit('LOAD_NETWORK', response.data.network);
        store.commit('UPDATE_K_GENE_V_PATHWAYS', response.data.k_gene_v_pathways);
      } catch (error) {
        console.log(error);
        // TODO: 404 page
      }
    },
  },
});
