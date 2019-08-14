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

// css

export default class GeneFilterTable extends React.Component {
  state = {
    modal: null
  }

  handleClick = (id) => {
    this.setState({ modal: id })
  }

  onClose = () => this.setState({ modal: null })

  render() {
    const { handleClick, onClose } = this;
    const { goTermIds, goTermsById, selectedTerms } = this.props;

    const selectedTermsSet = new Set(selectedTerms);

    goTermIds.sort((a, b) => {
        const difference = goTermsById[b].genes.length - goTermsById[a].genes.length
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

    const rows = goTermIds.map(id => (
      <tr key={id}>
        <td style={{textAlign: 'center', 'verticalAlign': 'middle', width: 100 }}>
        {
          selectedTermsSet.has(id) ?
          <Button remove onClick={() =>this.props.removeSelectedTerm(id)} />
          :
          <Button onClick={() => this.props.addSelectedTerms(id)}>
            Add
          </Button>
        }
        </td>
        <td>
          {id}
        </td>
        <td>
          {goTermsById[id].name}
        </td>
        <td>
          <Button text onClick={() => handleClick(id)}>
            {goTermsById[id].genes.length}
          </Button>
        </td>
      </tr>
    ))

    const modalGenes = this.state.modal && goTermsById[this.state.modal].genes;

    return (
        <Table className="GeneFilterTable">
          {
            this.state.modal &&
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
                        {goTermsById[this.state.modal].name}
                      </Heading>
                      <Heading subtitle size={6} renderAs="h2">
                        {this.state.modal} | {modalGenes.length} Gene{modalGenes.length > 1 ? 's' : ''}
                      </Heading>
                    </Modal.Card.Title>
                </Modal.Card.Head>
                <Modal.Card.Body>
                  <Content>
                    <ul style={{ listStyle: 'none' }}>
                      {modalGenes.map(gene => <li key={gene}>{gene}</li>)}
                    </ul>
                  </Content>
                </Modal.Card.Body>
                <Modal.Card.Foot></Modal.Card.Foot>
              </Modal.Card>
            </Modal>
          }
          <thead>
            <tr>
              <th style={{textAlign: 'center', 'verticalAlign': 'middle', width: 100 }}>
                <Button onClick={() => this.props.addSelectedTerms(...goTermIds)}>
                  Add all
                </Button>
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
          <tbody>
            {rows}
          </tbody>
        </Table>
    )
  }

}