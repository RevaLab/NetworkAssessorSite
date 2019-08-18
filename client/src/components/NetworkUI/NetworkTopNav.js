import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Container,
  Dropdown,
} from 'react-bulma-components';


class NetworkTopNav extends React.Component {
  state = {
    pathwayDatabase: {
      selected: 1,
      byId: {
        1: {
          name: 'KEGG',
        },
        2: {
          name: 'My Cancer Genome',
        },
        3: {
          name: 'Reactome',
        }
      },
      allIds: [1, 2, 3],
    },
    ppiDatabase: {
      selected: 1,
      byId: {
        1: {
          name: 'STRING'
        },
        2: {
          name: 'BioGrid',
        },
      },
      allIds: [1, 2],
    }
  }

  handleDropdownSelect = (type, val) => {
    this.setState(state => ({
      [type]: {
        ...state[type],
        selected: val,
      }
    }))
  }

  render() {
    return (
      <Container className="network-topnav-container">
        <Dropdown
          value={this.state.pathwayDatabase.selected}
          onChange={(value) => this.handleDropdownSelect('pathwayDatabase', value)}
        >
          {this.state.pathwayDatabase.allIds.map(id =>
            <Dropdown.Item key={+id} value={id}>
              {this.state.pathwayDatabase.byId[id].name}
            </Dropdown.Item>
          )}
        </Dropdown>
        <Dropdown
          value={this.state.ppiDatabase.selected}
          onChange={(value) => this.handleDropdownSelect('ppiDatabase', value)}
        >
          {this.state.ppiDatabase.allIds.map(id =>
            <Dropdown.Item key={id} value={id}>
              {this.state.ppiDatabase.byId[id].name}
            </Dropdown.Item>
          )}
        </Dropdown>
      </Container>
    )
  }
}

export default NetworkTopNav;