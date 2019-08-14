import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Form } from 'react-bulma-components'

import Switch from 'react-bulma-switch/full';
const { Field, Control } = Form;

export default ({ gene, checked, handleToggle }) => {
  const colorHelper = !checked ? "has-text-grey-light" : '';

  return (
    <Field>
      <Control>
          <Switch thin
            checked={checked}
            id={`filter-tool-${gene}`}
            onChange={(event) => handleToggle(event, gene)}
          >
            <span className={colorHelper}>
              {gene}
            </span>
          </Switch>
      </Control>
    </Field>
  )
}