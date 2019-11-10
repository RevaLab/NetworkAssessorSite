import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Button,
  Columns,
  Container,
  Section,
} from 'react-bulma-components';

// local components
import NetworkUITable from './NetworkUI/NetworkUITable/NetworkUITable';
import NetworkTopNav from './NetworkUI/NetworkTopNav';
import NetworkContainer from './NetworkUI/NetworkContainer'
import { QueryListInfo } from './NetworkUI/QueryListInfo/QueryListInfo';

// context
import { NetworkUIProvider } from './NetworkUI/NetworkUIContext';

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
                  <Container style={{ width: '100%' }}>
                    <QueryListInfo />
                  </Container>
                  <Button>
                    Draw Network
                  </Button>
                  <Container className="network-table-container">
                    <NetworkUITable />
                  </Container>
                </Box>
            </Columns.Column>
            <Columns.Column style={{margin: '0 auto'}}>
              <NetworkContainer />
            </Columns.Column>
          </Columns>
        </Section>
      </NetworkUIProvider>
    );
  }
}

export default NetworkUi;
