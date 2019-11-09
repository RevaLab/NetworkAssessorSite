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
import { QueryUIProvider, QueryUIConsumer } from './QueryUIContext';

// local components
import QueryList from './QueryList/QueryList';
import FilteredList from './FilteredList/FilteredList';
import GeneFilterTool from './GeneFilterTool/GeneFilterTool';

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
            ui: {
              filtering,
              queryGenes,
            },
            toggleFiltering,
          }) =>
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
                          disabled={queryGenes.length===0}
                        >
                        {filtering ? 'Update unfiltered query list' : 'Filter genes'}
                        </Switch>
                      </Control>
                    </Field>
                  </Columns.Column>
                  <Columns.Column>
                    <Button
                      fullwidth
                      type="submit"
                      color="success"
                      onClick={() =>  console.log('hello')}
                    >
                      Submit
                    </Button>
                  </Columns.Column>
                </Columns>
              </Container>
            </Section>
            { filtering &&
            <Section>
              <GeneFilterTool />
            </Section>
            }
          </Container>}
        </QueryUIConsumer>
      </QueryUIProvider>
    );
  }
}

export default QueryUI;
