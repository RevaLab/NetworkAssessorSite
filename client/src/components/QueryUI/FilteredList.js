import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Form,
} from 'react-bulma-components';

// context
import { QueryUIConsumer } from './QueryUIContext';

const { Field, Control, Label, Textarea } = Form;

const FilteredList = () =>{
  return (
    <QueryUIConsumer>
      {({
        filteredGenes,
        filteredGenesValue,
        onFilteredChange,
      }) =>
      <Field>
        <Label>
          Filtered Query List
        </Label>
        <span>Filtered List: {filteredGenes.length} Genes</span>
        <Control>
          <Textarea
            placeholder="Use GO Term selectors below, or modify here"
            name="filtered_list"
            onChange={onFilteredChange}
            value={filteredGenesValue}
          />
        </Control>
      </Field>
      }
    </QueryUIConsumer>
  )
}

export default FilteredList;