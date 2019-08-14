import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Form,
} from 'react-bulma-components';
import Switch from 'react-bulma-switch/full';

// css
import './QueryListSelector.css';

// component library assignments
const { Field, Control, Input } = Form;

export default class QueryListSelector extends React.Component {
  state = {
    search: '',
    queryGenes: this.props.queryGenes.sort(),
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

  render() {
    const genes = this.state.queryGenes.map((gene, idx) => {
      const checked = this.props.filteredGenes[gene];
      const colorHelper = !checked ? "has-text-grey-light" : '';

      return (
        <Field key={gene+idx}>
          <Control>
            <Switch
              thin
              checked={checked}
              id={`filter-tool-${gene}`}
              onChange={e => this.props.handleToggle(e, gene)}
            >
            <span className={colorHelper}>{gene}</span>
            </Switch>
          </Control>
        </Field>
      )
    })

    return (
      <Box className="QueryListSelector">
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
      </Box>
    )
  }
}