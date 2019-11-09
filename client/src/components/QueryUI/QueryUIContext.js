import React from 'react';
import merge from 'lodash/merge';
import axios from 'axios'

const { Provider, Consumer } = React.createContext();


class QueryUIProvider extends React.Component {
  state = {
    ui: {
      queryGenesValue: '',
      filteredGenesValue: '',
      queryGenes: [],
      filteredGenes: [],
      filtering: false,
      loadState: 'LOADING',
      selectedTerms: [],
    },
    ontologies: {
      byId: {},
      allIds: [],
    },
    goTerms: {
      byId: {},
      allIds: [],
    }
  }

  geneTextToArray = str => str.split('\n').map(str => str.trim()).filter(el => el);

  onQueryChange = evt => {
    const value = evt.target.value
    this.setState(state => ({
      ui: {
        ...state.ui,
        queryGenesValue: value,
        queryGenes: this.geneTextToArray(value),
      }
    }));
  };

  onFilteredChange = evt => {
    const value = evt.target.value
    this.setState(state => ({
      ui: {
        ...state.ui,
        filteredGenes: this.geneTextToArray(value),
        filteredGenesValue: value,
      }
    }));
  }

  toggleFiltering = (e) => {
    // checked must be 'cached' outside of the setState function 
    // because the event will not persist asynchronously
    const checked = e.target.checked;
    this.setState(state => ({
      ui: {
        ...state.ui,
        filtering: checked,
        filteredGenesValue: '',
        filteredGenes: [],
        selectedTerms: []
      }
    }))
  }

  handleExample = () => {
    const exampleGenes = ["FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1", ];

    this.setState(state => ({
      ui: merge({}, state.ui, {
        ...state.ui,
        loadState: 'LOADING',
        queryGenesValue: exampleGenes.join('\n'),
        queryGenes: exampleGenes,
      }),
    }), this.fetchOntologies)
  }

  fetchOntologies = async () => {
    const { data: { ontologies, goTerms }} = await axios.post('http://localhost:5000/api/go-terms', { genes: this.state.ui.queryGenes })

    const allGoTerms = Object.values(ontologies.byId).reduce((acc, { goTerms }) => [...acc, ...goTerms], [])

    const createNewState = state => merge({}, state, {
      ontologies: {
        byId: merge(ontologies.byId, {
          all: {
            name: 'All',
            goTerms: allGoTerms,
          },
        }),
        allIds: ['all', ...ontologies.allIds],
      },
      goTerms,
      ui: {
        loadState: 'LOADED',
      }
    });

    this.setState(createNewState);
  }

  genesFromSelectedGoTerms = (selectedTerms, goTerms) => {
    const geneSet = new Set(selectedTerms.flatMap(term => goTerms.byId[term].genes));
    return Array.from(geneSet);
  }

  addSelectedTerms = (...newTerms) => {
    const selectedTerms = [...this.state.ui.selectedTerms, ...newTerms];
    const filteredGenes = this.genesFromSelectedGoTerms(selectedTerms, this.state.goTerms);

    this.setState(state => ({
      ui: merge({}, state.ui, {
        selectedTerms,
        filteredGenes,
        filteredGenesValue: filteredGenes.join('\n'),
      })
    }))
  }

  removeSelectedTerm = deleteTerm => {
    const selectedTerms = this.state.ui.selectedTerms.filter(term => term !== deleteTerm);
    const filteredGenes = this.genesFromSelectedGoTerms(selectedTerms, this.state.goTerms);

    this.setState(state => ({
      ui: {
        ...state.ui,
        selectedTerms,
        filteredGenes,
        filteredGenesValue: filteredGenes.join('\n'),
      }
    }))
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        onQueryChange: this.onQueryChange,
        onFilteredChange: this.onFilteredChange,
        toggleFiltering: this.toggleFiltering,
        handleExample: this.handleExample,
        addSelectedTerms: this.addSelectedTerms,
        removeSelectedTerm: this.removeSelectedTerm,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  QueryUIProvider,
  Consumer as QueryUIConsumer
};
