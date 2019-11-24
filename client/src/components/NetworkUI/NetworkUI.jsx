import React, { useState, useCallback } from 'react'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Box,
  Button,
  Columns,
  Container,
  Section,
} from 'react-bulma-components'

// local components
import { QueryUIConsumer } from '../QueryUI/QueryUIContext/QueryUIContext'
import NetworkUITable from './NetworkUITable/NetworkUITable'
import NetworkTopNav from './NetworkTopNav/NetworkTopNav'
import NetworkContainer from './NetworkContainer/NetworkContainer'
import { QueryListInfo } from './QueryListInfo/QueryListInfo'

// context
import { NetworkUIProvider } from './NetworkUIContext/NetworkUIContext'

// css
import './NetworkUI.css'

const NetworkUI = () => {
  const [isOpen, setOpen] = useState(true)
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])

  return (
    <QueryUIConsumer>
      {({ ui: { filteredGenes, queryGenes } }) => (
        <NetworkUIProvider genes={filteredGenes.length ? filteredGenes : queryGenes}>
          <Section className="NetworkUI">
            <button onClick={toggleOpen}>toggle</button>
            <Columns gapless multiline={false}>
              <Columns.Column style={{ display: isOpen ? 'inherit' : 'none'  }}>
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
      )}
    </QueryUIConsumer>
  )
}

export default NetworkUI
