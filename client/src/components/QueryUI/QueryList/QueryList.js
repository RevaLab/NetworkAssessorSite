import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Form,
} from 'react-bulma-components';

// context
import { QueryUIConsumer } from '../QueryUIContext';

import './QueryList.css'

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
        handleExample
      }) =>
        <Field className="QueryList">
            <div className="query-list-header">
              {queryGenes.length || filtering ? null : (
                <Button 
                  color="info"
                  onClick={handleExample}
                >
                  Try Example
                </Button>
              )}  
            </div>
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
