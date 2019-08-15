import React from 'react';

const { Provider, Consumer } = React.createContext();


class QueryUIProvider extends React.Component {
  state = {
    queryGenesValue: '',
    filteredGenesValue: '',
    queryGenes: [],
    filteredGenes: [],
    filtering: false,
  }

  geneTextToArray = str => str.split('\n').map(str => str.trim()).filter(el => el);

  onQueryChange = evt => {
    this.setState({
      queryGenes: this.geneTextToArray(evt.target.value),
      queryGenesValue: evt.target.value,
    });
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
    const exampleGenes = ["FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1", ];

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
    return (
      <Provider value={{
        ...this.state,
        onQueryChange: this.onQueryChange,
        onFilteredChange: this.onFilteredChange,
        toggleFiltering: this.toggleFiltering,
        handleExample: this.handleExample,
        updateFiltered: this.updateFiltered,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  QueryUIProvider,
  Consumer as QueryUIConsumer
};