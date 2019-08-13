import React from 'react';

import './FilteredGenes.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Form,
  Box,
} from 'react-bulma-components';

class FilteredGenes extends React.Component {
  render() {
    const genes = this.props.genes.map((gene, idx) => (
      <li key={idx}>
        {gene}
      </li>
    ));

    return (
      <Form.Field className="FilteredGenes">
        <Form.Label>
          Filtered Genes
        </Form.Label>
        <span>Filtered List: {this.props.genes.length} Genes</span>
        <Box>
          {
            this.props.genes.length ?
            <ul className="has-text-left">
              {genes}
            </ul>
            :
            <span className="has-text-grey-light">
              Genes for submission will appear here
            </span>
          }
        </Box>
      </Form.Field>
    );
  }
}

export default FilteredGenes;