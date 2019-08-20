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
          {
            ({
              ui,
              pathwayDatabases,
              ppiDatabases,
              handleDropdownSelect,
              updatePpiDatabases,
              updatePathwayDatabases,
            }) =>
            <div>
              {ui.selectedPathwayDatabase &&
              <Dropdown
                value={ui.selectedPathwayDatabase}
                onChange={(value) => handleDropdownSelect(
                  'selectedPathwayDatabase',
                  value,
                  pathwayDatabases.byId[value].pathways ?
                  undefined
                  : () => updatePathwayDatabases(value, []) // send gene list
                )} >
                {pathwayDatabases.allIds.map(id =>
                  <Dropdown.Item key={id} value={id}>
                    {pathwayDatabases.byId[id].name}
                  </Dropdown.Item>
                )}
              </Dropdown>}
             {ui.selectedPpiDatabase &&
              <Dropdown
                value={ui.selectedPpiDatabase}
                onChange = {
                  (value) => handleDropdownSelect(
                    'selectedPpiDatabase',
                    value,
                    ppiDatabases.byId[value].edgesLengths ?
                    undefined
                    : () => updatePpiDatabases(value, [])
                  )
                }
              >
                {ppiDatabases.allIds.map(id =>
                  <Dropdown.Item key={id} value={id}>
                    {ppiDatabases.byId[id].name}
                  </Dropdown.Item>
                )}
              </Dropdown>}
            </div>
          }
        </NetworkUIConsumer>
      </Container>
    )
  }
}

export default NetworkTopNav;