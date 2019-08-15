import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Form,
} from 'react-bulma-components';

const { Field, Control, Label, Textarea } = Form;

const QueryList = ({ value, onChange, genes, filtering }) => {
  return (
    <Field className="QueryList">
      <Label>
        Query List
      </Label>
      <span>Unfiltered List: {genes.length} Genes</span>
      <Control>
        <Textarea
          placeholder="Enter Query Gene List"
          name="query_list"
          disabled={filtering}
          onChange={onChange}
          value={value}
        />
      </Control>
    </Field>
  )
}

export default QueryList;