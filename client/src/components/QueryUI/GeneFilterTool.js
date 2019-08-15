import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Container,
  Loader,
} from 'react-bulma-components';

// local components
import GeneFilterContainer from './GeneFilterTool/GeneFilterContainer';

// css
import './GeneFilterTool.css'

class GeneFilterTool extends React.Component {
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
      delay(2000, require('../goData').ontologies),
      delay(2000, require('../goData').goTerms),
    ]);

    const allGoTerms = Object.values(ontologies.byId).reduce((acc, { goTerms }) => [...acc, ...goTerms], [])

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

  updateFilteredFromTerms = () => {
    const geneSet = new Set(this.state.selectedTerms.flatMap(term => this.state.goTerms.byId[term].genes));
    this.props.updateFiltered(Array.from(geneSet));
  }

  addSelectedTerms = (...newTerms) => {
    this.setState({
      selectedTerms: [...this.state.selectedTerms, ...newTerms],
    }, this.updateFilteredFromTerms);
  }

  removeSelectedTerm = deleteTerm => {
    this.setState({
      selectedTerms: this.state.selectedTerms.filter(term => term !== deleteTerm),
    }, this.updateFilteredFromTerms)
  }

  render() {
    const ontologies = this.state.ontologies;

    return (
      <Container className="GeneFilterTool">
        {
          this.state.loadState === 'LOADED' ?
          <GeneFilterContainer
            ontologies={ontologies}
            goTerms={this.state.goTerms}
            addSelectedTerms={this.addSelectedTerms}
            removeSelectedTerm={this.removeSelectedTerm}
            selectedTerms={this.state.selectedTerms}
          />
          :
          <Loader style={{
            width: 100,
            height: 100,
            border: '4px solid #209cee',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            margin: '0 auto',
          }}/>
        }
      </Container>
    );
  }
}

export default GeneFilterTool;