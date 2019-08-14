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
import GeneFilterTool from './GeneFilterTool';

// css
import './QueryUI.css';

// destructure component definitions
const { Field, Control, Label, Textarea } = Form;

class QueryUI extends React.Component {
  componentDidMount() {
    this.handleExample();
  }

  state = {
    queryGenesValue: '',
    filteredGenesValue: '',
    queryGenes: [],
    filteredGenes: [],
    filtering: false,
  }

  onQueryChange = evt => {
    this.setState({
        queryGenes: evt.target.value.split('\n').filter(el => el),
        queryGenesValue: evt.target.value,
      }
    );
  };

  onFilteredChange = evt => {
    this.setState({
      filteredGenes: evt.target.value.split('\n').filter(el => el),
      filteredGenesValue: evt.target.value,
    });
  }

  toggleFiltering = () => {
    this.setState({
      filteredGenes: this.state.queryGenes,
      filteredGenesValue: this.state.queryGenesValue.split('\n').filter(el => el).join('\n'),
      filtering: !this.state.filtering,
    });
  }

  handleExample = () => {
    const exampleGenes = [
      "FLT3",
      "SMO",
      "GLA",
      "SGCB",
      "OAT",
      "CAPN3",
      "ASS1",
      "AGXT",
      "AKT1",
      "PTPN1",
      "PIAS1",
      "CDKN1B",
      "THEM4",
      "CCNE1",
      "MAP2K4",
      "ATG7",
      "ATG12",
      "BAD",
      "BCL2L1",
    ];

    this.setState({
      queryGenesValue: exampleGenes.join('\n'),
      filteredGenesValue: exampleGenes.join('\n'),
      queryGenes: exampleGenes,
      filteredGenes: exampleGenes,
      filtering: true,
    })
  }

  render() {
    const { filtering, queryGenes, filteredGenes, queryGenesValue, filteredGenesValue } = this.state;
    const switchText = filtering ? 'Update unfiltered query list' : 'Filter genes';

    return (
      <Container className="QueryUI">
        <Section>
            <Columns>
              <Columns.Column>
                <Field>
                  <QueryList
                    filtering={filtering}
                    value={queryGenesValue}
                    onChange={this.onQueryChange}
                    genes={queryGenes}
                  />
                </Field>
              </Columns.Column>
              {
                filtering &&
                <Columns.Column>
                  <Field>
                    <Label>
                      Filtered Query List
                    </Label>
                    <span>Filtered List: {filteredGenes.length} Genes</span>
                    <Control>
                      <Textarea
                        placeholder="Enter Query Gene List"
                        name="filtered_list"
                        onChange={this.onFilteredChange}
                        value={filteredGenesValue}
                      />
                    </Control>
                  </Field>
                </Columns.Column>
              }
            </Columns>
              <Field>
                <Control>
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
                </Control>
              </Field>
        </Section>
        { filtering &&
          <Container>
            <Section>
              <GeneFilterTool
                queryGenes={queryGenes}
                filteredGenes={filteredGenes}
              />
            </Section>
          </Container>
        }
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   queryUI: state.queryUIReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(QueryUI);
export default QueryUI;