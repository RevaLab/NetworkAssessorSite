import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Button,
  Columns,
  Container,
  Form,
  Section,
} from 'react-bulma-components'
import Switch from 'react-bulma-switch/full'

// context
import { useQueryUI } from './QueryUIContext/QueryUIContext'

// local components
import QueryList from './QueryList/QueryList'
import FilteredList from './FilteredList/FilteredList'
import GeneFilterTool from './GeneFilterTool/GeneFilterTool'

// css
import './QueryUI.css'

// destructure component definitions
const { Field, Control } = Form

const QueryUI = () => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.push('/network')
  }, [history])

  const {
    ui: {
      filtering,
      queryGenes,
      filteredGenes
    },
    toggleFiltering,
  } = useQueryUI()

  const disabled = filtering ? filteredGenes.length === 0 : queryGenes.length === 0
  const disabledText = `Add genes to ${filtering ? 'filtered' : ''} query list`
  const submitText = `Submit ${filtering ? 'Filtered Query List' : 'Unfiltered Query List'}`

  return (
    <Container className="QueryUI">
      <Section>
        <Container>
          <Columns>
            <Columns.Column>
              <QueryList />
            </Columns.Column>
            {
              filtering &&
              <Columns.Column>
                <FilteredList />
              </Columns.Column>
            }
          </Columns>
          <Columns>
            <Columns.Column>
              <Field>
                <Control>
                  <Switch
                    id="filter-genes-toggle"
                    checked={filtering}
                    onChange={toggleFiltering}
                    disabled={queryGenes.length === 0}
                  >
                    {filtering ? 'Update unfiltered query list' : 'Filter genes'}
                  </Switch>
                </Control>
              </Field>
            </Columns.Column>
            <Columns.Column>
              <Button
                disabled={disabled}
                fullwidth
                type="submit"
                color="success"
                onClick={handleClick}
              >
                {disabled ? disabledText : submitText}
              </Button>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
      {filtering &&
        <Section>
          <GeneFilterTool />
        </Section>
      }
    </Container>
  )
}

export default QueryUI
