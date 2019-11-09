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
    const data = await require('../networkData').ppiDatabases(ppiDatabaseId);

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

  updatePathwayDatabases = async (pathwayDbId, geneList) => {
    const data = await require('../networkData').pathwayDatabasePathways(pathwayDbId);

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
    ), () => console.log(this.state.ui.selectedPathways))
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
    // const pathwayDbsData = await require('../networkData').pathways();
    const { data: pathwayDbsData } = await axios.get('http://localhost:5000/api/pathways')
    console.log(pathwayDbsData)

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

    const [
      ppiDatabaseData,
      pathwaysData,
    ] = await Promise.all([
      require('../networkData').ppiDatabases(selectedPpiDatabase),
      require('../networkData').pathwayDatabasePathways(selectedPathwayDatabase)
    ]);

    this.setState(state => merge(
      {},
      state,
      ppiDatabaseData,
      pathwaysData,
      {
        ui: {
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
        updatePathwayDatabases: this.updatePathwayDatabases,
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
