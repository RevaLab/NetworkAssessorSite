import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Columns,
  Container,
  Form,
  Section,
} from 'react-bulma-components';
import Switch from 'react-bulma-switch/full';

// context
import { QueryUIProvider, QueryUIConsumer } from './QueryUI/QueryUIContext';

// local components
import QueryList from './QueryUI/QueryList/QueryList';
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
