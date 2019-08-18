import React from 'react';

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
    this.setState(state => ({
      ui: {
        ...state.ui,
        queryGenes: this.geneTextToArray(evt.target.value),
        queryGenesValue: evt.target.value,
      },
    }));
  };

  onFilteredChange = evt => {
    this.setState(state => ({
      ui: {
        ...state.ui,
        filteredGenes: this.geneTextToArray(evt.target.value),
        filteredGenesValue: evt.target.value,
      },
    }));
  }

  toggleFiltering = (e) => {
    this.setState(state => ({
      ui: {
        ...state.ui,
        filtering: e.target.checked,
        filteredGenesValue: '',
        filteredGenes: [],
      },
    }));
  }

  handleExample = () => {
    const exampleGenes = ["FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1", ];

    this.setState(state => ({
      ui: {
        ...state.ui,
        loadState: 'LOADING',
        queryGenesValue: exampleGenes.join('\n'),
        queryGenes: exampleGenes,
        filtering: true,
      },
    }), this.fetchOntologies)
  }

  fetchOntologies = async () => {
    const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
    const [ontologies, goTerms] = await Promise.all([
      delay(2000, require('./goData').ontologies),
      delay(2000, require('./goData').goTerms),
    ]);

    const allGoTerms = Object.values(ontologies.byId).reduce((acc, { goTerms }) => [...acc, ...goTerms], [])

    const newState = state => ({
      // includes 'all', which merges the data among all ontologies together on the frontend
      ontologies: {
        byId: {
          all: {
            name: 'All',
            goTerms: allGoTerms,
          },
          ...ontologies.byId
        },
        allIds: ['all', ...ontologies.allIds],
      },
      goTerms,
      ui: {
        ...state.ui,
        loadState: 'LOADED',
      }
    });

    this.setState(newState);
  }

  genesFromSelectedGoTerms = (selectedTerms, goTerms) => {
    const geneSet = new Set(selectedTerms.flatMap(term => goTerms.byId[term].genes));
    return Array.from(geneSet);
  }

  addSelectedTerms = (...newTerms) => {
    const selectedTerms = [...this.state.ui.selectedTerms, ...newTerms];
    const filteredGenes = this.genesFromSelectedGoTerms(selectedTerms, this.state.goTerms);

    this.setState(state => ({
      ui: {
        ...state.ui,
        filteredGenes,
        filteredGenesValue: filteredGenes.join('\n'),
        selectedTerms,
      },
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