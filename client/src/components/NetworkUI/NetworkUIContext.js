import React, { useContext } from 'react';

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
        "BioGrid": {
          "KEGG": [],
          "My Cancer Genome": [],
          "Reactome": []
        }
      },
      colors: {
        0: 'black',
        324: "#fe5d18",
        3379: "#fe5d18",
        3380: "#923b3e",
        4903: "#82fd0f",
        5290: "#4c7fb8",
        6131: "#521f74",
        6145: "#ec8600",
        6194: "#2b2e2c",
        6380: "#9561e2",
        6492: "#273b25",
        7388: "#9dfc27"
      }
    }

    handleDropdownSelect = async (newSelectedDatabase, dbKey) => {
      this.setState(state => ({
        ...state,
        ui: {
          ...state.ui,
          [dbKey]: newSelectedDatabase
        }
      }))

      if (dbKey === 'selectedPpiDatabase') {
        if (this.state.tables[newSelectedDatabase][this.state.ui.selectedPathwayDatabase].length > 0) {
          return
        }
      } else {
        if (this.state.tables[this.state.ui.selectedPpiDatabase][newSelectedDatabase].length > 0) {
          return
        }
      }

      this.setState(state => ({
        ui: {
          ...state.ui,
          loadState: 'LOADING',
        }
      }))

      const { data } = await axios.post('http://localhost:5000/api/table', {
        selectedPpiDatabase: this.state.ui.selectedPpiDatabase,
        selectedPathwayDatabase: this.state.ui.selectedPathwayDatabase,
        [dbKey]: newSelectedDatabase,
      })

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
    this.setState(state => ({
      ...state,
      colors: {
        ...state.colors,
        [id]: color
      }
    }))
  }

  async componentDidMount() {   
    const { data } = await axios.post('http://localhost:5000/api/table', {
      selectedPathwayDatabase: this.state.ui.selectedPathwayDatabase,
      selectedPpiDatabase: this.state.ui.selectedPpiDatabase
    })

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
    const { selectedPpiDatabase, selectedPathwayDatabase } = this.state.ui

    return (
      <Provider value={{
        ...this.state,
        selectedTable: this.state.tables[selectedPpiDatabase][selectedPathwayDatabase],
        handleDropdownSelect: this.handleDropdownSelect,
        updateSelectedPathways: this.updateSelectedPathways,
        updatePathwayColor: this.updatePathwayColor
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

const useNetwork = () => useContext(NetworkUIContext)

export {
  NetworkUIProvider,
  Consumer as NetworkUIConsumer,
  useNetwork
};

export default NetworkUIContext;
