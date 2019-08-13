import React from 'react';
import { connect } from 'react-redux'
import simpleAction from '../actions/simpleAction';

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

import QueryList from './QueryList';
import GeneFilterTool from './GeneFilterTool';


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
      filteredGenes: this.state.queryGenes.reduce((acc, gene) => ({...acc, [gene]: true }), {}),
      filtering: !this.state.filtering,
    });
  }

  toggleFiltered = (gene, value) => {
    this.setState({
      filteredGenes: {
        ...this.state.filteredGenes,
        [gene]: value,
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
      filteredGenes: exampleGenes.reduce((acc, gene) => ({...acc, [gene]: true }), {}),
    })
  }

  render() {
    const { filtering, queryGenes, value, filteredGenes } = this.state;
    const switchText = filtering ? 'Update Query List' : 'Filter genes';

    return (
      <div>
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
          <Section>
            <GeneFilterTool
              queryGenes={queryGenes}
              filteredGenes={filteredGenes}
              toggleFiltered={this.toggleFiltered}
            />
          </Section>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  queryUI: state.queryUIReducer,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryUI);