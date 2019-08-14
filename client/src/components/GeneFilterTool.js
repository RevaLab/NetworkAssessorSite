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
    ontologies: {
      byId: {},
      allIds: [],
    },
    goTerms: {
      byId: {},
      allIds: [],
    },
    selectedTerms: ['GO:0042803', 'GO:0043065'],
  }

  async componentDidMount() {
    const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
    const [ontologies, goTerms] = await Promise.all([
      delay(2000, require('./goData').ontologies),
      delay(2000, require('./goData').goTerms),
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
    }, this.updateFilteredFromTerms)
  }

  updateFilteredFromTerms = () => {
    const geneSet = new Set(this.state.selectedTerms.flatMap(term => this.state.goTerms.byId[term].genes));
    this.props.updateFiltered(Array.from(geneSet));
  }

  render() {
    const filteredGoTerms = {
      byId: this.state.goTerms.byId,
      allIds: this.state.selectedTerms,
    }

    const ontologies = this.state.ontologies;

    return (
      <Container className="GeneFilterTool">
        {
          !!ontologies.allIds.length &&
          !!this.state.selectedTerms.length &&
          <GeneFilterContainer
            ontologies={ontologies}
            goTerms={filteredGoTerms}
          />
        }
        {
          ontologies.allIds.length ?
          <GeneFilterContainer
            ontologies={ontologies}
            goTerms={this.state.goTerms}
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