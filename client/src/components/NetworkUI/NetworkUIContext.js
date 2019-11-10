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
      selectedPpiDatabase: null,
      selectedPathwayDatabase: null,
      loadState: 'LOADING',
      selectedPathways: {},
    },
    tableData: []
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
    
    const selectedPathwayDatabase = pathwayDbsData.pathwayDatabases.allIds[0];
    const selectedPpiDatabase = pathwayDbsData.ppiDatabases.allIds[0];

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
      tableData
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
