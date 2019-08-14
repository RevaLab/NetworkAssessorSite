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

// local components
import QueryList from './QueryUI/QueryList';
import FilteredList from './QueryUI/FilteredList';
import GeneFilterTool from './QueryUI/GeneFilterTool';

// css
import './QueryUI.css';

// destructure component definitions
const { Field, Control } = Form;

class QueryUI extends React.Component {
  state = {
    queryGenesValue: '',
    filteredGenesValue: '',
    queryGenes: [],
    filteredGenes: [],
    filtering: false,
  }

  geneTextCleanup = str => str.split('\n').map(str => str.trim()).join('\n')
  geneTextToArray = str => str.split('\n').map(str => str.trim()).filter(el => el);

  onQueryChange = evt => {
    this.setState({
        queryGenes: this.geneTextToArray(evt.target.value),
        queryGenesValue: evt.target.value,
      }
    );
  };

  onFilteredChange = evt => {
    this.setState({
      filteredGenes: this.geneTextToArray(evt.target.value),
      filteredGenesValue: evt.target.value,
    });
  }

  toggleFiltering = () => {
    this.setState({
      filtering: !this.state.filtering,
    });
  }

  handleExample = () => {
    const exampleGenes = ["FLT3","SMO","GLA","SGCB","OAT","CAPN3","ASS1","AGXT","AKT1","PTPN1","PIAS1","CDKN1B","THEM4","CCNE1","MAP2K4","ATG7","ATG12","BAD","BCL2L1",];

    this.setState({
      queryGenesValue: exampleGenes.join('\n'),
      queryGenes: exampleGenes,
      filtering: true,
    })
  }

  updateFiltered = genes => {
    this.setState({
      filteredGenesValue: genes.join('\n'),
      filteredGenes: genes,
    })
  }

  render() {
    const { filtering, queryGenes, filteredGenes, queryGenesValue, filteredGenesValue } = this.state;
    const switchText = filtering ? 'Update unfiltered query list' : 'Filter genes';

    return (
      <Container className="QueryUI">
        <Section>
          <Container>
            <Columns>
              <Columns.Column>
                <Field>
                  <QueryList
                    filtering={filtering}
                    value={queryGenesValue}
                    genes={queryGenes}
                    onChange={this.onQueryChange}
                  />
                </Field>
              </Columns.Column>
              {
              filtering &&
              <Columns.Column>
                <FilteredList
                  value={filteredGenesValue}
                  genes={filteredGenes}
                  onChange={this.onFilteredChange}
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
                      onChange={this.toggleFiltering}
                      disabled={!queryGenes.length}
                    >
                    {switchText}
                    </Switch>
                  </Control>
                </Field>
              </Columns.Column>
              <Columns.Column size="half">
                {
                  queryGenes.length || filtering ? null :
                  <Button color="info" fullwidth
                    onClick={this.handleExample}
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
            updateFiltered={this.updateFiltered}
          />
        </Section>
        }
      </Container>
    );
  }
}

export default QueryUI;