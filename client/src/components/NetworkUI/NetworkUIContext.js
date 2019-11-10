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


  handleDropdownSelect = (type, val, callback) => {
    this.setState(state => merge(
      {},
      state,
      {
        ui: {
          [type]: val,
          loadState: callback ? 'LOADING' : state.ui.loadState,
        }
      }
    ), callback ? () => callback(val) : () => {})
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
    const { data: pathwayDbsData } = await axios.get('http://localhost:5000/api/pathways')

    const databases = {
      pathwayDatabases: ["My Cancer Genome", "KEGG", "Reactome"],
      ppiDatabases: ["STRING", "BioGrid"]
    }
    
    const selectedPathwayDatabase = databases.pathwayDatabases[0];
    const selectedPpiDatabase = databases.ppiDatabases[0];

    this.setState(state => merge(
      {},
      state,
      pathwayDbsData,
      {
        ui: {
          selectedPpiDatabase,
          selectedPathwayDatabase,
        }
      }
    ));

    const { data: { tableData } } = await axios.post('http://localhost:5000/api/table', {})

    this.setState(state => ({
      ...state,
      ui: {
        ...state.ui,
        loadState: 'LOADED'
      },
      tables: {
        ...state.tables,
        "STRING": {
          "My Cancer Genome": tableData
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
        updatePathwayColor: this.updatePathwayColor
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
