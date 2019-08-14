import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Container,
  Form
} from 'react-bulma-components';

import GoTermRow from './GoTermRow';

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
      return (
        <GoTermRow key={gene+idx}
          gene={gene}
          checked={checked}
          handleToggle={this.props.handleToggle}
        />
      )
    })

    return (
      <Container>
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
      </Container>
    )
  }
}