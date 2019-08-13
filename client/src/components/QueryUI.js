import React from 'react';
import { connect } from 'react-redux'
import simpleAction from '../actions/simpleAction';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Columns,
  Container,
  Section,
} from 'react-bulma-components';

import QueryList from './QueryList';
import FilteredGenes from './FilteredGenes';
import GeneFilterTool from './GeneFilterTool';

class QueryUI extends React.Component {
  state = {
    queryGenes: [],
    filteredGenes: {

    },
    filtering: false,
  }

  updateQueryGenes = (queryGenes) => {
    this.setState({
      queryGenes,
      filteredGenes: Object.fromEntries(queryGenes.map(gene => [
        gene,
        true,
      ])),
    });
  }

  updateFilteredGenes = (filteredGenes) => {
    this.setState({
      filteredGenes,
    });
  }

  toggleFiltering = () => {
    if (!this.state.queryGenes.length) return;
    this.setState({
      filtering: !this.state.filtering,
    })
  }

  toggleFiltered = (gene, value) => {
    this.setState({
      filteredGenes: {
        ...this.state.filteredGenes,
        [gene]: value,
      }
    })
  }

  render() {
    const filteredGenesList =
      Object.entries(this.state.filteredGenes).reduce((acc, [k, v]) => {
        return v ? [...acc, k] : acc;
      }, [])
    return (
      <div>
        <Section>
          <Container breakpoint="widescreen">
            <Columns>
              <Columns.Column>
                <QueryList
                  genes={this.state.queryGenes}
                  updateGenes={this.updateQueryGenes}
                  filtering={this.state.filtering}
                  toggleFiltering={this.toggleFiltering}
                />
              </Columns.Column>
              <Columns.Column>
                <FilteredGenes genes={filteredGenesList}
                />
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
        { this.state.filtering &&
          <Section>
            <GeneFilterTool
              queryGenes={this.state.queryGenes}
              filteredGenes={this.state.filteredGenes}
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