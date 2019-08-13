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

    if (checked) {
      this.props.addGeneToFiltered(gene)
    } else {
      this.props.removeGeneFromFiltered(gene)
    }
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
              checked={this.props.filteredGenes.indexOf(gene) > -1}
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