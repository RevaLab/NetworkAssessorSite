import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Form,
} from 'react-bulma-components';

// context
import { QueryUIConsumer } from './QueryUIContext';

const { Field, Control, Label, Textarea } = Form;

const QueryList = () => {
  return (
    <QueryUIConsumer>
      {({
        ui: {
          filtering,
          queryGenesValue,
          queryGenes,
        },
        onQueryChange,
      }) =>
        <Field className="QueryList">
          <Label>
            Query List
          </Label>
          <span>Unfiltered List: {queryGenes.length} Genes</span>
          <Control>
            <Textarea
              placeholder="Enter Query Gene List"
              name="query_list"
              disabled={filtering}
              onChange={onQueryChange}
              value={queryGenesValue}
            />
          </Control>
        </Field>
      }
    </QueryUIConsumer>
  )
}

export default QueryList;