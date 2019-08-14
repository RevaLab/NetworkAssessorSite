import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Container,
  Section,
  Form,
  Columns,
  Button,
} from 'react-bulma-components';
import { Collapse } from 'react-collapse';
import Switch from 'react-bulma-switch/full';

// local components
import QueryListSelector from './QueryUI/QueryListSelector';
import QueryList from './QueryUI/QueryList';
import GeneFilterTool from './GeneFilterTool';

// css
import './QueryUI.css';

// destructure component definitions
const { Field, Control } = Form;

class QueryUI extends React.Component {
  state = {
    value: '',
    queryGenes: [],
    filteredGenes: {},
    filtering: false,
  }

  onChange = evt => {
    this.setState({
        queryGenes: evt.target.value.split('\n').filter(el => el),
        value: evt.target.value,
      }
    );
  };

  updateFilteredGenes = (filteredGenes) => {
    this.setState({
      filteredGenes,
    });
  }

  toggleFiltering = () => {
    this.setState({
      filteredGenes: this.state.queryGenes.reduce((acc, gene) => ({...acc, [gene]: false }), {}),
      filtering: !this.state.filtering,
    });
  }

  toggleFiltered = (event, gene) => {
    this.setState({
      filteredGenes: {
        ...this.state.filteredGenes,
        [gene]: event.target.checked,
      }
    })
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
      value: exampleGenes.join('\n'),
      queryGenes: exampleGenes,
      filtering: true,
      filteredGenes: exampleGenes.reduce((acc, gene) => ({...acc, [gene]: false }), {}),
    })
  }

  render() {
    const { filtering, queryGenes, value, filteredGenes } = this.state;
    const switchText = filtering ? 'Update unfiltered query list' : 'Filter genes';

    return (
      <Container className="QueryUI">
        <Section>
            <Container breakpoint="widescreen">
              <Field>
                <Collapse isOpened={!filtering}>
                  <QueryList
                    filtering={filtering}
                    value={value}
                    onChange={this.onChange}
                    genes={queryGenes}
                  />
                </Collapse>
              </Field>
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
            </Container>
        </Section>
        { filtering &&
          <Container>
            <Section>
              <QueryListSelector
                queryGenes={this.state.queryGenes}
                filteredGenes={this.state.filteredGenes}
                handleToggle={this.toggleFiltered}
              />
            </Section>
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