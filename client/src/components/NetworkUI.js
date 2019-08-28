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
import NetworkContainer from './NetworkUI/NetworkContainer'

// context
import { NetworkUIProvider, NetworkUIConsumer } from './NetworkUI/NetworkUIContext';

// css
import './NetworkUI.css';

class NetworkUi extends React.Component {
  state = {
    isOpen: true,
  }

  toggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  render() {
    return (
      <NetworkUIProvider>
        <Section className="NetworkUI">
          <button onClick={this.toggleOpen}>toggle</button>
          <Columns gapless multiline={false}>
            <Columns.Column style={{ display: this.state.isOpen ? 'inherit' : 'none'  }}>
                <Box
                  renderAs="nav"
                  className="network-nav"
                >
                  <NetworkTopNav />
                  <Container className="network-table-container">
                    <NetworkUITable />
                  </Container>
                </Box>
            </Columns.Column>
            <Columns.Column style={{margin: '0 auto'}}>
              <NetworkUIConsumer>
                {({ pathways, ui: { loadState } }) =>
                  <NetworkContainer
                    pathways={pathways}
                    loadState={loadState}
                  />
                }
              </NetworkUIConsumer>
            </Columns.Column>
          </Columns>
        </Section>
      </NetworkUIProvider>
    );
  }
}

export default NetworkUi;