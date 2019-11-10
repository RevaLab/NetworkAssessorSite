import React from 'react';

import axios from 'axios';
import merge from 'lodash/merge';

let NetworkUIContext
const {
  Provider,
  Consumer
} = NetworkUIContext = React.createContext();


class NetworkUIProvider extends React.Component {
  state = {
    queryList: {
      validGenes: [],
      invalidGenes: [],
    },
    ui: {
      selectedPpiDatabase: "STRING",
      selectedPathwayDatabase: "My Cancer Genome",
      loadState: 'LOADING',
      selectedPathways: {},
    },
    tables: {
        "STRING": {
          "KEGG": [],
          "My Cancer Genome": [],
          "Reactome": []
        },
        "BIOGRID": {
          "KEGG": [],
          "My Cancer Genome": [],
          "Reactome": []
        }
      }
    }

    handleDropdownSelect = (value) => {
      this.setState(state => ({
        ...state,
        ui: {
          ...state.ui,
          selectedPathwayDatabase: value
        }
      }))
    }

  updateSelectedPathways = (id, val) => {
    this.setState(state => merge(
      {},
      state,
      {
        ui: {
          selectedPathways: {
            [id]: val,
          }
        }
      }
    ))
  }

  updatePathwayColor = (id, color) => {
    this.setState(state => merge(
      {},
      state,
      {
        pathways: {
          byId: {
            [id]: {
              color,
            }
          }
        }
      }
    ))
  }

  async componentDidMount() {   
    const { data } = await axios.post('http://localhost:5000/api/table', {})

    const {
      selectedPpiDatabase,
      selectedPathwayDatabase,
      tableData
    } = data

    this.setState(state => ({
      ...state,
      ui: {
        ...state.ui,
        loadState: 'LOADED'
      },
      tables: {
        ...state.tables,
        [selectedPpiDatabase]: {
          ...state.tables[selectedPpiDatabase],
          [selectedPathwayDatabase]: tableData
        }
      }
    }))
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleDropdownSelect: this.handleDropdownSelect,
        updateSelectedPathways: this.updateSelectedPathways,
        updatePathwayColor: this.updatePathwayColor,
        ppiDatabases: ["STRING", "BioGrid"]
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  NetworkUIProvider,
  Consumer as NetworkUIConsumer,
};

export default NetworkUIContext;
