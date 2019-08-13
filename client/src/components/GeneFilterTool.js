import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Form,
} from 'react-bulma-components';
import Switch from 'react-bulma-switch/full';

const { Field, Label, Control } = Form;


class GeneFilterTool extends React.Component {
  state = {
    search: '',
  }

  handleToggle = (event, gene) => {
    const checked = event.target.checked;
    this.props.toggleFiltered(gene, checked);
  }

  render() {
    const genes = this.props.queryGenes.map(gene => {
      return (
        <Field key={gene}>
          <Control>
            <Label for={`filter-tool-${gene}`}>
            <Switch
              thin
              id={`filter-tool-${gene}`}
              checked={this.props.filteredGenes[gene]}
              onChange={(event) => this.handleToggle(event, gene)}
            >
            {gene}
            </Switch>
            </Label>
          </Control>
        </Field>
      )
    })

    return (
      <Box className="GeneFilterTool">
        {genes}
      </Box>
    );
  }
}

export default GeneFilterTool;