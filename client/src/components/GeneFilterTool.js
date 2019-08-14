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
    selectedTerms: [],
  }

  async componentDidMount() {
    const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
    const [ontologies, goTerms] = await Promise.all([
      delay(2000, require('./goData').ontologies),
      delay(2000, require('./goData').goTerms),
    ]);

    this.setState({
      ontologies,
      goTerms,
    })
  }

  render() {

    return (
      <Container className="GeneFilterTool">
        {
          this.state.ontologies.allIds.length ?
          <GeneFilterContainer
            ontologies={this.state.ontologies}
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