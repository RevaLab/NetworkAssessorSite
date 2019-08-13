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
    filteredGenes: [],
    filtering: false,
  }

  updateQueryGenes = (queryGenes) => {
    this.setState({
      queryGenes,
      filteredGenes: queryGenes,
    });
  }

  updateFilteredGenes = (filteredGenes) => {
    this.setState({
      filteredGenes,
    });
  }

  toggleFiltering = () => {
    this.setState({
      filtering: !this.state.filtering,
    })
  }

  removeGeneFromFiltered = (targetGene) => {
    const filteredGenes = this.state.filteredGenes.filter(gene => gene !== targetGene);
    this.setState({
      filteredGenes,
    })
  }

  addGeneToFiltered = (newGene) => {
    this.setState({
      filteredGenes: [
        ...this.state.filteredGenes,
        newGene,
      ]
    })
  }

  render() {
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
                <FilteredGenes genes={this.state.filteredGenes} />
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
        { this.state.filtering &&
          <Section>
            <GeneFilterTool
              queryGenes={this.state.queryGenes}
              filteredGenes={this.state.filteredGenes}
              removeGeneFromFiltered={this.removeGeneFromFiltered}
              addGeneToFiltered={this.addGeneToFiltered}
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