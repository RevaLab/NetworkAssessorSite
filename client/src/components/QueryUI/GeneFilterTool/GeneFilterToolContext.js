import React from 'react';

// import other contexts
import { QueryUIConsumer } from '../QueryUIContext';

const {
  Provider,
  Consumer
} = React.createContext();


class GeneFilterToolProvider extends React.Component {
  state = {
    loadState: 'UNLOADED',
    ontologies: {
      byId: {},
      allIds: [],
    },
    goTerms: {
      byId: {},
      allIds: [],
    },
    selectedTerms: [],
  }

  async componentDidMount() {
    this.setState({
      loadState: 'LOADING',
    })

    const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
    const [ontologies, goTerms] = await Promise.all([
      delay(2000, require('./goData').ontologies),
      delay(2000, require('./goData').goTerms),
    ]);

    const allGoTerms = Object.values(ontologies.byId).reduce((acc, {
      goTerms
    }) => [...acc, ...goTerms], [])

    this.setState({
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
      loadState: 'LOADED'
    });
  }

  addSelectedTermsThenUpdateFilteredGenes = updateFilteredFromGoTerms => (...newTerms) => {
    this.setState({
      selectedTerms: [...this.state.selectedTerms, ...newTerms],
    }, () => updateFilteredFromGoTerms({ goTerms: this.state.goTerms, selectedTerms: this.state.selectedTerms }));
  }

  removeSelectedTermThenUpdateFilteredGenes = updateFilteredFromGoTerms => deleteTerm => {
    this.setState({
      selectedTerms: this.state.selectedTerms.filter(term => term !== deleteTerm),
    }, () => updateFilteredFromGoTerms({ goTerms: this.state.goTerms, selectedTerms: this.state.selectedTerms }))
  }

  render() {
    return (
      <QueryUIConsumer>
        {({ updateFilteredFromGoTerms }) => (
          <Provider value = {{
            ...this.state,
            addSelectedTerms: this.addSelectedTermsThenUpdateFilteredGenes(updateFilteredFromGoTerms),
            removeSelectedTerm: this.removeSelectedTermThenUpdateFilteredGenes(updateFilteredFromGoTerms),
          }}>
            {this.props.children}
          </Provider>
        )}
      </QueryUIConsumer>
    )
  }
}

export {
  GeneFilterToolProvider,
  Consumer as GeneFilterToolConsumer
};