import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Columns,
  Container,
  Form,
  Section,
} from 'react-bulma-components';
import Switch from 'react-bulma-switch/full';

// context
import { QueryUIProvider, QueryUIConsumer } from './QueryUI/QueryUIContext';

// local components
import QueryList from './QueryUI/QueryList';
import FilteredList from './QueryUI/FilteredList';
import GeneFilterTool from './QueryUI/GeneFilterTool';

// css
import './QueryUI.css';

// destructure component definitions
const { Field, Control } = Form;

class QueryUI extends React.Component {

  render() {
    return (
      <QueryUIProvider>
        <QueryUIConsumer>
          {({
            filtering,
            queryGenes,
            toggleFiltering,
            handleExample,
            updateFiltered,
          }) =>
          <Container className="QueryUI">
            <Section>
              <Container>
                <Columns>
                  <Columns.Column>
                    <Field>
                      <QueryList />
                    </Field>
                  </Columns.Column>
                  {
                  filtering &&
                  <Columns.Column>
                    <FilteredList
                    />
                  </Columns.Column>
                  }
                </Columns>
                <Columns>
                  <Columns.Column size="half">
                    <Field>
                      <Control>
                        <Switch
                          id="filter-genes-toggle"
                          checked={filtering}
                          onChange={toggleFiltering}
                          disabled={!queryGenes.length}
                        >
                        {filtering ? 'Update unfiltered query list' : 'Filter genes'}
                        </Switch>
                      </Control>
                    </Field>
                  </Columns.Column>
                  <Columns.Column size="half">
                    {
                      queryGenes.length || filtering ? null :
                      <Button color="info" fullwidth
                        onClick={handleExample}
                      >
                        Try Example
                      </Button>
                    }
                  </Columns.Column>
                </Columns>
              </Container>
            </Section>
            { filtering &&
            <Section>
              <GeneFilterTool
                updateFiltered={updateFiltered}
              />
            </Section>
            }
          </Container>}
        </QueryUIConsumer>
      </QueryUIProvider>
    );
  }
}

export default QueryUI;