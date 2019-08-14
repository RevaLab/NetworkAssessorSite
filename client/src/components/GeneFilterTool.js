import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Loader,
  Tabs,
} from 'react-bulma-components';

// local components
import GeneFilterTable from './GeneFilterTool/GeneFilterTable';

// css
import './GeneFilterTool.css'

class GeneFilterTool extends React.Component {
  state = {
    activeTab: null,
    ontologies: {
      byId: {},
      allIds: [],
    },
    goTerms: {
      byId: {}
    },
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
      activeTab: ontologies.allIds[0],
    })
  }

  handleClick = (id) => {
    this.setState({
      activeTab: id,
    });
  }

  render() {
    const ontologies = this.state.ontologies.allIds.map(id => ({
      id,
      name: this.state.ontologies.byId[id].name,
    }));

    const tabs = ontologies.map(({ id, name }) =>
      <Tabs.Tab
        key={id}
        active={id===this.state.activeTab}
        onClick={this.handleClick.bind(null, id)}
      >
        {name}
      </Tabs.Tab>
    )

    return (
      <Box className="GeneFilterTool">
        {
          tabs.length > 1 ?
          <div>
            <Tabs>
              {tabs}
            </Tabs>
            {
              this.state.activeTab &&
              <GeneFilterTable
                goTermIds={this.state.ontologies.byId[this.state.activeTab].goTerms}
                goTermsById={this.state.goTerms.byId}
              />
            }
          </div>
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
      </Box>
    );
  }
}

export default GeneFilterTool;