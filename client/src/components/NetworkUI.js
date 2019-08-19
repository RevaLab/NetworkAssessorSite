import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Columns,
  Container,
  Section,
} from 'react-bulma-components';

// local components
import NetworkUITable from './NetworkUI/NetworkUITable/NetworkUITable';
import NetworkTopNav from './NetworkUI/NetworkTopNav';

// context
import { NetworkUIProvider } from './NetworkUI/NetworkUIContext';

// css
import './NetworkUI.css';

class NetworkUi extends React.Component {
  render() {
    return (
      <NetworkUIProvider>
        <Section className="NetworkUI">
          <Columns gapless multiline={false}>
            <Columns.Column>
              <Box renderAs="nav" className="network-nav">
                <NetworkTopNav />
                <Container className="network-table-container">
                  <NetworkUITable />
                </Container>
              </Box>
            </Columns.Column>
            <Columns.Column style={{margin: '0 auto'}}>
              <Box renderAs="main" className="network-container">

              </Box>
            </Columns.Column>
          </Columns>
        </Section>
      </NetworkUIProvider>
    );
  }
}

export default NetworkUi;