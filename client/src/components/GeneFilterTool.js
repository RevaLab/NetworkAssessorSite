import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Form,
  Loader,
  Tabs,
} from 'react-bulma-components';

import './GeneFilterTool.css'

import GoTermRow from './GoTermRow';

const { Field, Control, Input } = Form;


class GeneFilterTool extends React.Component {
  state = {
    search: '',
    queryGenes: this.props.queryGenes.sort(),
    activeTab: 'all',
    ontologies: {
      allIds: [],
    },
    goTerms: {},
  }

  handleToggle = (event, gene) => {
    const checked = event.target.checked;
    this.props.toggleFiltered(gene, checked);
  }

  handleChange = e => {
    const queryGenes = (e.target.value ? this.props.queryGenes.filter(gene => {
      return gene.toLowerCase().includes(e.target.value.toLowerCase())
    }) : this.props.queryGenes).sort()

    this.setState({
      search: e.target.value,
      queryGenes,
    });
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
    const genes = this.state.queryGenes.map((gene, idx) => {
      const checked = this.props.filteredGenes[gene];
      return (
        <GoTermRow key={gene+idx}
          gene={gene}
          checked={checked}
          handleToggle={this.handleToggle}
        />
      )
    })

    const ontologies = this.state.ontologies.allIds.map(id => ({
      id,
      name: this.state.ontologies.byId[id].name,
    }));

    const tabs = [{ id: 'all', name: 'All'}, ...ontologies].map(({ id, name }) =>
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
            <span>{Object.values(this.props.filteredGenes).filter(v => v).length} genes will be included in the query</span>
            <Field>
              <Control>
                <Input placeholder="search" aria-label="search"
                  value={this.state.search}
                  onChange={this.handleChange}
                />
              </Control>
            </Field>
            <Box className="search-all-genes">
              {genes.length ? genes : <span>No items found</span>}
            </Box>
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