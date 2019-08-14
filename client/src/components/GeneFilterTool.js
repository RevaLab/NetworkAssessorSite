import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Loader,
  Tabs,
} from 'react-bulma-components';

import './GeneFilterTool.css'

class GeneFilterTool extends React.Component {
  state = {
    activeTab: 'query_list',
    ontologies: {
      allIds: [],
    },
    goTerms: {},
  }

  handleToggle = (event, gene) => {
    const checked = event.target.checked;
    this.props.toggleFiltered(gene, checked);
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
    const ontologies = this.state.ontologies.allIds.map(id => ({
      id,
      name: this.state.ontologies.byId[id].name,
    }));

    const tabs = [{ id: 'query_list', name: 'Gene Query List'}, ...ontologies].map(({ id, name }) =>
      <Tabs.Tab key={id} active={this.state.activeTab===id}>
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
              <span>active tab is {this.state.activeTab}</span>
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