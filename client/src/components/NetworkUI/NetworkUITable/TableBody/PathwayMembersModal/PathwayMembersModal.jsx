import React from 'react'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Content,
  Heading,
  Modal,
} from 'react-bulma-components'

const PathwayMembersModal = ({ membersLength, name, onClose }) => {
  return (
    <Modal
      show={true}
      onClose={onClose}
      closeOnBlur={true}
      showClose={false}
    >
      <Modal.Card>
        <Modal.Card.Head onClose={onClose}>
          <Modal.Card.Title renderAs="div">
            <Heading size={4} renderAs="h1">
              {name}
            </Heading>
            <Heading subtitle size={6} renderAs="h2">
              {membersLength} Member{membersLength > 1 ? 's' : ''}
            </Heading>
          </Modal.Card.Title>
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Content>
            <ul style={{ listStyle: 'none' }}>
              {[1, 2, 3].map(gene => <li key={gene}>{gene}</li>)}
            </ul>
          </Content>
        </Modal.Card.Body>
        <Modal.Card.Foot></Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  )
}

export default PathwayMembersModal
