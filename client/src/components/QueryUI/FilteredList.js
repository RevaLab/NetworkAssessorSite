import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Form,
} from 'react-bulma-components';

const { Field, Control, Label, Textarea } = Form;

const FilteredList = ({ value, onChange, genes }) =>{
  return (
    <Field>
      <Label>
        Filtered Query List
      </Label>
      <span>Filtered List: {genes.length} Genes</span>
      <Control>
        <Textarea
          placeholder="Use GO Term selectors below, or modify here"
          name="filtered_list"
          onChange={onChange}
          value={value}
        />
      </Control>
    </Field>
  )
}

export default FilteredList;