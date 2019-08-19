import React from 'react';

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

  handleDropdownSelect = (type, val) => {
    this.setState(state => ({
      ui: {
        ...state.ui,
        [type]: val,
      },
    }))
  }

  updateSelectedPathways = (id, val) => {
    this.setState(state => ({
      ui: {
        ...state.ui,
        selectedPathways: {
          ...state.ui.selectedPathways,
          [id]: val,
        }
      }
    }));
  }

  async componentDidMount() {
    const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
    const data = await delay(2000, require('../networkData').pathwayData)

    this.setState(state => ({
      ...state,
      ...data,
      ui: {
        ...state.ui,
        selectedPpiDatabase: data.ppiDatabases.allIds[0],
        selectedPathwayDatabase: data.pathwayDatabases.allIds[0],
        loadState: 'LOADED',
      },
      updateSelectedPathways: this.updateSelectedPathways,
    }))
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleDropdownSelect: this.handleDropdownSelect,
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