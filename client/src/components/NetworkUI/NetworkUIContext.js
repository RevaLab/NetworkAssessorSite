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
    },
    tableData: [
      {
        id: "3379",
        name: "WNT ext path",
        color: "#fe5d18",
        membersLength: 12,
        overlapLength: 5,
        edgesLength: 5,
        pVal: 0.0003250272196074229
      },
      {
        id: "3380",
        name: "CALC PKC ext path",
        color: "#923b3e",
        membersLength: 5,
        overlapLength: 8,
        edgesLength: 8,
        pVal: 0.0013787906109511874
      },
      {
        id: "4903",
        name: "Jack Stat ext path",
        color: "#82fd0f",
        membersLength: 14,
        overlapLength: 3,
        edgesLength: 3,
        pVal: 0.0006057200026052585
      },
      {
        id: "5290",
        name: "Mitogen Activated Protein-MAP Kinase Signaling path",
        color: "#4c7fb8",
        membersLength: 17,
        overlapLength: 5,
        edgesLength: 5,
        pVal: 0.0008449145721473537
      },
      {
        id: "6131",
        name: "Receptor Tyrosine KinaseORGrowth Factor Signaling path",
        color: "#521f74",
        membersLength: 14,
        overlapLength: 7,
        edgesLength: 7,
        pVal: 0.000026876482060089303
      },
      {
        id: "6145",
        name: "Protein Degradation Ubiquitination path",
        color: "#ec8600",
        membersLength: 7,
        overlapLength: 3,
        edgesLength: 3,
        pVal: 0.0009249305959767607
      },
      {
        id: "6194",
        name: "Kinase Fusions path",
        color: "#2b2e2c",
        membersLength: 9,
        overlapLength: 1,
        edgesLength: 1,
        pVal: 0.000954274430117962
      },
      {
        id: "6380",
        name: "AKT ext path",
        color: "#9561e2",
        membersLength: 26,
        overlapLength: 9,
        edgesLength: 9,
        pVal: 0.00185390326478682
      },
      {
        id: "6492",
        name: "G-Protein Signaling path",
        color: "#273b25",
        membersLength: 1,
        overlapLength: 6,
        edgesLength: 6,
        pVal: 0.000795553195050128
      },
      {
        id: "7388",
        name: "Hormone Signaling path",
        color: "#9dfc27",
        membersLength: 5,
        overlapLength: 3,
        edgesLength: 3,
        pVal: 0.0004654716728720567
      }
    ]
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

    const ppiEdgesData = await require('../networkData').ppiEdgesPromise({})
    console.log(ppiEdgesData)

    this.setState(state => merge(
      {},
      state,
      {
        ui: {
          loadState: 'LOADED'
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
