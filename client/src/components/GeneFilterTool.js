import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Form,
} from 'react-bulma-components';



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
        <Form.Field key={gene}>
          <Form.Label>
            {gene}
          </Form.Label>
          <Form.Control>
            <Form.Checkbox
              checked={this.props.filteredGenes[gene]}
              onChange={(event) => this.handleToggle(event, gene)}
            >
            </Form.Checkbox>
          </Form.Control>
        </Form.Field>
      )
    })

    return (
      <div>
        {genes}
      </div>
    );
  }
}

export default GeneFilterTool;