import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Form,
} from 'react-bulma-components';
import Switch from 'react-bulma-switch/full';

const { Field, Control, Input } = Form;


class GeneFilterTool extends React.Component {
  state = {
    search: '',
    sortedGenes: this.props.queryGenes.sort(),
    visibleGenes: this.props.queryGenes,
  }

  handleToggle = (event, gene) => {
    const checked = event.target.checked;
    this.props.toggleFiltered(gene, checked);
  }

  handleChange = e => {
    const visibleGenes = this.props.queryGenes.filter(gene => {
      return gene.toLowerCase().includes(e.target.value.toLowerCase())
    });

    const sortedGenes = this.props.queryGenes.sort(gene => {
      return gene.toLowerCase().includes(e.target.value.toLowerCase()) ? -1 : 1;
    });

    this.setState({
      search: e.target.value,
      sortedGenes,
      visibleGenes,
    });
  }

  render() {
    const genes = this.state.sortedGenes.map(gene => {
      const checked = this.props.filteredGenes[gene];
      const visible = this.state.visibleGenes.includes(gene);
      const colorHelper = !checked || !visible ? "has-text-grey-light" : '';

      return (
        <Field key={gene}>
          <Control>
              <Switch
                thin
                id={`filter-tool-${gene}`}
                checked={checked}
                onChange={(event) => this.handleToggle(event, gene)}
              >
                <span className={colorHelper}>
                  {gene}
                </span>
              </Switch>
          </Control>
        </Field>
      )
    })

    return (
      <Box className="GeneFilterTool">
        <Input placeholder="search" aria-label="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        {genes}
      </Box>
    );
  }
}

export default GeneFilterTool;