import React from 'react'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Form,
} from 'react-bulma-components'

// context
import { QueryUIConsumer } from '../QueryUIContext/QueryUIContext'

const { Field, Control, Label, Textarea } = Form

const FilteredList = () =>{
  return (
    <QueryUIConsumer>
      {({
        ui: {
          filteredGenes,
          filteredGenesValue,
        },
        onFilteredChange,
      }) =>
      <Field>
        <Label>
          Filtered Query List
        </Label>
        <span>Filtered List: {filteredGenes.length} Unique Genes</span>
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

export default FilteredList
