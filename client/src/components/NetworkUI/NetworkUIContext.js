import React from 'react';

import merge from 'lodash/merge';

let NetworkUIContext
const {
  Provider,
  Consumer
} = NetworkUIContext = React.createContext();


class NetworkUIProvider extends React.Component {
  state = {
    ui: {
      selectedPpiDatabase: null,
      selectedPathwayDatabase: null,
      loadState: 'LOADING',
      selectedPathways: {},
    },
    pathways: {
      byId: {
        // name
        // color
        // edgesLength
        // membersLength
        // overlapLength
        // pVal
      },
      allIds: [1],
    },
    sources: {
      byId: {
        // name
        // pathways
      },
      allIds: [],
    },
    pathwayDatabases: {
      byId: {
        // name
        // pathways
      },
      // allIds: [1, 2, 3],
    },
    ppiDatabases: {
      byId: {
        // name
      },
      allIds: [1, 2],
    }
  }

  updatePpiDatabases = async (ppiDatabaseId, geneList) => {
    const data = await require('../networkData').ppiDatabaseBioGrid();

    this.setState(state => merge(
      {},
      state,
      data,
      {
        ui: {
          loadState: 'LOADED',
        }
      }
    ))
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
    const data = await require('../networkData').pathwayData();

    this.setState(state => merge(
      {},
      state,
      data,
      {
        ui: {
          selectedPpiDatabase: data.ppiDatabases.allIds[0],
          selectedPathwayDatabase: data.pathwayDatabases.allIds[0],
          loadState: 'LOADED',
        }
      }
    ))
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleDropdownSelect: this.handleDropdownSelect,
        updateSelectedPathways: this.updateSelectedPathways,
        updatePathwayColor: this.updatePathwayColor,
        updatePpiDatabases: this.updatePpiDatabases,
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