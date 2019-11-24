import React, { useContext } from 'react'
import axios from 'axios'
import merge from 'lodash/merge'

import { Redirect } from "react-router-dom"

let NetworkUIContext
const {
  Provider,
  Consumer
} = NetworkUIContext = React.createContext()


class NetworkUIProvider extends React.Component {
  state = {
    queryList: {
      validGenes: [],
      invalidGenes: [],
    },
    callTracker: {
      // pathwaydb
      Reactome: {
        BioGrid: false,
        STRING: false,
      },
      KEGG: {
        BioGrid: false,
        STRING: false,
      },
      "My Cancer Genome": {
        BioGrid: false,
        STRING: false,
      },
    },
    ui: {
      selectedPpiDatabase: "BioGrid",
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
        0: 'turquoise',
    }

    getColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)

    handleFetchTable = async (newQuery = {}, setLoading = true) => {
      const selectedPathwayDatabase = newQuery.selectedPathwayDatabase || this.state.ui.selectedPathwayDatabase
      const selectedPpiDatabase = newQuery.selectedPpiDatabase || this.state.ui.selectedPpiDatabase

      if (this.state.callTracker[selectedPathwayDatabase][selectedPpiDatabase]) {
        return
      }

      if (setLoading) {
        this.setState(state => ({
          ui: {
            ...state.ui,
            loadState: 'LOADING',
          }
        }))
      }

      this.setState(state => ({
        callTracker: merge({}, state.callTracker, {
          [selectedPathwayDatabase]: {
             [selectedPpiDatabase]: true
          }
        })
      }))

      const { data } = await axios.post('http://localhost:5000/api/table', {
        genes: this.props.genes,
        selectedPpiDatabase: this.state.ui.selectedPpiDatabase,
        selectedPathwayDatabase: this.state.ui.selectedPathwayDatabase,
        ...newQuery,
      })

      const { tableData } = data

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
        },
        colors: {
          ...Object.fromEntries(tableData.map(({ id }) => [id, this.getColor()])),
          ...state.colors
        }
      }))
    }

    handleDropdownSelect = async (newSelectedDatabase, dbKey) => {
      this.setState(state => ({
        ...state,
        ui: {
          ...state.ui,
          [dbKey]: newSelectedDatabase
        }
      }))

      const setLoadingUI = () => {
        this.setState(state => ({
          ui: {
            ...state.ui,
            loadState: 'LOADING',
          }
        }))
      }

      if (dbKey === 'selectedPpiDatabase') {
        if (this.state.tables[newSelectedDatabase][this.state.ui.selectedPathwayDatabase].length > 0) {
          return
        } else {
          setLoadingUI()
        }
      } else {
        if (this.state.tables[this.state.ui.selectedPpiDatabase][newSelectedDatabase].length > 0) {
          return
        } else {
          setLoadingUI()
        }
      }

      this.handleFetchTable({ [dbKey]: newSelectedDatabase })
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
    await this.handleFetchTable()

    await Promise.all([
      this.handleFetchTable({ selectedPathwayDatabase: 'Reactome' }, false),
      this.handleFetchTable({ selectedPathwayDatabase: 'KEGG' }, false)
    ])
  }

  render() {
    const { selectedPpiDatabase, selectedPathwayDatabase } = this.state.ui

    return (
      this.props.genes.length > 0 ? (
        <Provider value={{
          ...this.state,
          selectedTable: this.state.tables[selectedPpiDatabase][selectedPathwayDatabase],
          handleDropdownSelect: this.handleDropdownSelect,
          updateSelectedPathways: this.updateSelectedPathways,
          updatePathwayColor: this.updatePathwayColor
        }}>
          {this.props.children}
        </Provider>
      ) : (
        <Redirect to="/"/>
      )
    )
  }
}

const useNetwork = () => useContext(NetworkUIContext)

export {
  NetworkUIProvider,
  Consumer as NetworkUIConsumer,
  useNetwork
}

export default NetworkUIContext
