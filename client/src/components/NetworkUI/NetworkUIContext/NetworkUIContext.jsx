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
      genes: this.props.genes,
      validGenes: [],
      invalidGenes: [],
    },
    ui: {
      pValSortingOrder: 'ASC',
      selectedPpiDatabase: "BioGrid",
      selectedPathwayDatabase: "My Cancer Genome",
      loadStatesByPathwayDB: {
        // null: never loaded
        // 'LOADING': request made, but not resolved
        // 'LOADED': request made and resolved
        Reactome: {
          BioGrid: null,
          STRING: null,
        },
        KEGG: {
          BioGrid: null,
          STRING: null,
        },
        "My Cancer Genome": {
          BioGrid: null,
          STRING: null,
        },
      },
      selectedPathways: {},
    },
    tables: {
      Reactome: {
        BioGrid: [],
        STRING: [],
      },
      KEGG: {
        BioGrid: [],
        STRING: [],
      },
      "My Cancer Genome": {
        BioGrid: [],
        STRING: [],
      },
    },
    colors: {
      0: 'turquoise'
    },
    network: null,
  }

  getColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)

  setLoadingUI = (selectedPathwayDatabase, selectedPpiDatabase, newState) => {
    this.setState(state => ({
      ui: {
        ...state.ui,
        loadStatesByPathwayDB: {
          ...state.ui.loadStatesByPathwayDB,
          [selectedPathwayDatabase]: {
            ...state.ui.loadStatesByPathwayDB[selectedPathwayDatabase],
            [selectedPpiDatabase]: newState
          }
        }
      }
    }))
  }

  handleFetchTable = async (newQuery = {}) => {
    const selectedPathwayDatabase = newQuery.selectedPathwayDatabase || this.state.ui.selectedPathwayDatabase
    const selectedPpiDatabase = newQuery.selectedPpiDatabase || this.state.ui.selectedPpiDatabase

    if (this.state.ui.loadStatesByPathwayDB[selectedPathwayDatabase][selectedPpiDatabase]) {
      return
    }

    this.setLoadingUI(selectedPathwayDatabase, selectedPpiDatabase, 'LOADING')

    const { data } = await axios.post('http://localhost:5000/api/table', {
      genes: this.props.genes,
      selectedPpiDatabase: this.state.ui.selectedPpiDatabase,
      selectedPathwayDatabase: this.state.ui.selectedPathwayDatabase,
      ...newQuery,
    })

    const { tableData } = data

    this.setLoadingUI(selectedPathwayDatabase, selectedPpiDatabase, 'LOADED')

    this.setState(state => ({
      tables: merge({}, state.tables, {
        [selectedPathwayDatabase]: {
          [selectedPpiDatabase]: tableData
        }
      }),
      colors: {
        ...Object.fromEntries(tableData.map(({ id }) => [id, this.getColor()])),
        ...state.colors
      }
    }))
  }

  handleDropdownSelect = (newQuery) => {
    const selectedPathwayDatabase = newQuery.selectedPathwayDatabase || this.state.ui.selectedPathwayDatabase
    const selectedPpiDatabase = newQuery.selectedPpiDatabase || this.state.ui.selectedPpiDatabase

    this.setState(state => ({
      ui: {
        ...state.ui,
        selectedPpiDatabase,
        selectedPathwayDatabase
      },
    }))

    this.handleFetchTable({ selectedPathwayDatabase, selectedPpiDatabase })
  }

  updateSelectedPathways = (id, val) => {
    this.setState(state => ({
      ...state,
      ui: {
        ...state.ui,
        selectedPathways: {
          ...state.ui.selectedPathways,
          [id]: val,
        }
      }
    }))
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

  fetchNetwork = async () => {
    const { data } = await axios.post('http://localhost:5000/api/network', {
      genes: this.state.queryList.genes,
      selectedPathwayDatabase: 'my_cancer_genome',
      db: 'biogrid',
      selectedPathways: Object.entries(this.state.ui.selectedPathways).reduce((acc, [k, v]) => v ? [...acc, k] : acc, [])
    })

    this.setState({
      network: data
    })
  }

  async componentDidMount() {
    await this.handleFetchTable()

    await Promise.all([
      this.handleFetchTable({ selectedPathwayDatabase: 'Reactome' }),
      this.handleFetchTable({ selectedPathwayDatabase: 'KEGG' })
    ])
  }

  togglePValSortingOrder = () => {
    this.setState(state => ({
      ui: {
        ...state.ui,
        pValSortingOrder: state.ui.pValSortingOrder === 'ASC' ? 'DESC' : 'ASC'
      }
    }))
  }

  render() {
    const { selectedPpiDatabase, selectedPathwayDatabase } = this.state.ui

    return (
      this.props.genes.length > 0 ? (
        <Provider value={{
          ...this.state,
          selectedTable: this.state.tables[selectedPathwayDatabase][selectedPpiDatabase],
          selectedTableLoadState: this.state.ui.loadStatesByPathwayDB[selectedPathwayDatabase][selectedPpiDatabase],
          handleDropdownSelect: this.handleDropdownSelect,
          updateSelectedPathways: this.updateSelectedPathways,
          updatePathwayColor: this.updatePathwayColor,
          fetchNetwork: this.fetchNetwork,
          tableLoadState: this.state.ui.loadStatesByPathwayDB[selectedPathwayDatabase][selectedPpiDatabase],
          togglePValSortingOrder: this.togglePValSortingOrder
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
