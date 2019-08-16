import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Content,
  Heading,
  Modal,
  Table,
} from 'react-bulma-components';

// context
import { GeneFilterToolConsumer } from './GeneFilterToolContext';

// css

const TableBody = ({ goTerms, selectedTerms, handleClick }) => {

  const selectedTermsSet = new Set(selectedTerms);

  const sortedGoTerms = goTerms.allIds.slice().sort((a, b) => {
    const difference = goTerms.byId[b].genes.length - goTerms.byId[a].genes.length
    if (selectedTermsSet.has(a) && selectedTermsSet.has(b)) {
      return difference;
    } else if (selectedTermsSet.has(a)) {
      return -1;
    } else if (selectedTermsSet.has(b)) {
      return 1;
    } else {
      return difference
    }
  })

  const rows = sortedGoTerms.map(id => (
    <tr key={id}>
      <td style={{textAlign: 'center', 'verticalAlign': 'middle', width: 100 }}>
        <GeneFilterToolConsumer>
          {({ removeSelectedTerm, addSelectedTerms }) => (
            selectedTermsSet.has(id) ?
            <Button remove onClick={() =>removeSelectedTerm(id)} />
            :
            <Button onClick={() => addSelectedTerms(id)}>
              Add
            </Button>
          )}
        </GeneFilterToolConsumer>
      </td>
      <td>
        {id}
      </td>
      <td>
        {goTerms.byId[id].name}
      </td>
      <td>
        <Button text onClick={() => handleClick(id)}>
          {goTerms.byId[id].genes.length}
        </Button>
      </td>
    </tr>
  ))

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

const GoTermGenesModal = ({ goTerms, onClose, selectedTerm }) => {
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
                {goTerms.byId[selectedTerm].name}
              </Heading>
              <Heading subtitle size={6} renderAs="h2">
                {selectedTerm} | {goTerms.byId[selectedTerm].genes.length} Gene{goTerms.byId[selectedTerm].genes.length > 1 ? 's' : ''}
              </Heading>
            </Modal.Card.Title>
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Content>
            <ul style={{ listStyle: 'none' }}>
              {goTerms.byId[selectedTerm].genes.map(gene => <li key={gene}>{gene}</li>)}
            </ul>
          </Content>
        </Modal.Card.Body>
        <Modal.Card.Foot></Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  )
}

export default class GeneFilterTable extends React.Component {
  state = {
    modal: null
  }

  handleClick = (id) => {
    this.setState({ modal: id })
  }

  onClose = () => this.setState({ modal: null })

  render() {
    const { goTerms } = this.props;
    const { handleClick, onClose } = this;

    return (
      <GeneFilterToolConsumer>
        {({ selectedTerms }) => (
        <Table className="GeneFilterTable">
          {
            this.state.modal &&
            <GoTermGenesModal
              goTerms={goTerms}
              selectedTerm={this.state.modal}
              onClose={onClose}
            />
          }
          <thead>
            <tr>
              <th style={{textAlign: 'center', 'verticalAlign': 'middle', width: 100 }}>
                <GeneFilterToolConsumer>
                  {({ addSelectedTerms }) => (
                    <Button onClick={() => addSelectedTerms(...goTerms.allIds)}>
                      Add all
                    </Button>
                  )}
                </GeneFilterToolConsumer>
              </th>
              <th>
                <abbr title="GOTerm ID">ID</abbr>
              </th>
              <th>
                Term
              </th>
              <th>
                <abbr titile="Gene Overlap Count">Count</abbr>
              </th>
            </tr>
          </thead>
          <TableBody
            goTerms={goTerms}
            selectedTerms={selectedTerms}
            handleClick={handleClick}
          />
        </Table>
        )}
      </GeneFilterToolConsumer>
    )
  }

}