import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Container,
  Dropdown,
} from 'react-bulma-components';

import { NetworkUIConsumer } from './NetworkUIContext';


class NetworkTopNav extends React.Component {
  render() {
    return (
      <Container className="network-topnav-container">
        <NetworkUIConsumer>
          {({ ui, pathwayDatabases, ppiDatabases, handleDropdownSelect }) =>
            ui.selectedPathwayDatabase ?
            <div>
              <Dropdown
                value={ui.selectedPathwayDatabase}
                onChange={(value) => handleDropdownSelect('selectedPathwayDatabase', value)} >
                {pathwayDatabases.allIds.map(id =>
                  <Dropdown.Item key={id} value={id}>
                    {pathwayDatabases.byId[id].name}
                  </Dropdown.Item>
                )}
              </Dropdown>
              <Dropdown
                value={ui.selectedPpiDatabase}
                onChange={(value) => handleDropdownSelect('selectedPpiDatabase', value)}
              >
                {ppiDatabases.allIds.map(id =>
                  <Dropdown.Item key={id} value={id}>
                    {ppiDatabases.byId[id].name}
                  </Dropdown.Item>
                )}
              </Dropdown>
            </div>
            : null
          }
        </NetworkUIConsumer>
      </Container>
    )
  }
}

export default NetworkTopNav;