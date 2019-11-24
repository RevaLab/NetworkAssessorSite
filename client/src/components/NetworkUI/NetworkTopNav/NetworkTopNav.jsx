import React, { useState } from 'react'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Button,
  Content,
  Container,
  Columns,
  Dropdown,
  Form,
  Modal,
} from 'react-bulma-components'

import { NetworkUIConsumer } from '../NetworkUIContext/NetworkUIContext'

const { Label } = Form

const NetworkTopNav = () => {
    const [modal, setModal] = useState(null)

    return (
      <Container className="network-topnav-container">
        <NetworkUIConsumer>
            {
              ({
                queryList,
                ui,
                handleDropdownSelect,
              }) =>
              <Columns>
                {ui.selectedPathwayDatabase &&
                <Columns.Column>
                  <Label>Pathway Database</Label>
                  <Dropdown
                    value={ui.selectedPathwayDatabase}
                      onChange={value => handleDropdownSelect(value, 'selectedPathwayDatabase')}>
                      {["My Cancer Genome", "KEGG", "Reactome"].map(id =>
                      <Dropdown.Item key={id} value={id}>
                        {id}
                      </Dropdown.Item>
                    )}
                  </Dropdown>
                </Columns.Column>}
              {ui.selectedPpiDatabase &&
              <Columns.Column>
                <Label>PPI Database</Label>
                <Dropdown
                  value={ui.selectedPpiDatabase}
                  onChange={value => handleDropdownSelect(value, 'selectedPpiDatabase')}
                >
                {["STRING", "BioGrid"].map(id =>
                  <Dropdown.Item key={id} value={id}>
                    {id}
                  </Dropdown.Item>
                )}
                </Dropdown>
              </Columns.Column>}
              <Columns.Column>
                <Button onClick={() => setModal(true)}>
                  Show Query List
                </Button>
                <Modal
                  show={!!modal}
                  onClose={() => setModal(null)}
                  closeOnBlur={true}
                  showClose={false}
                >
                  <Modal.Card>
                    <Modal.Card.Head onClose={() => setModal(null)}>
                      <Modal.Card.Title>
                        Query List Genes
                      </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                      <Content>
                        <ul style={{ listStyle: 'none' }}>
                          {queryList.validGenes.map(gene =>
                            <li key={gene}>
                              {gene}
                            </li>
                          )}

                        </ul>
                      </Content>
                    </Modal.Card.Body>
                    <Modal.Card.Foot />
                  </Modal.Card>
                </Modal>
              </Columns.Column>
            </Columns>
            }
          </NetworkUIConsumer>
      </Container>
    )
}

export default NetworkTopNav
