import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Container,
  Content,
  Heading,
  Modal,
  Table,
} from 'react-bulma-components';

// css

export default class GeneFilterTable extends React.Component {
  state = {
    modalGenes: null
  }

  handleClick = (id) => {
    this.setState({ modal: id })
  }

  onClose = () => this.setState({ modal: null })

  render() {
    const { handleClick, onClose } = this;
    const { goTermIds, goTermsById } = this.props;

    goTermIds.sort((a, b) => goTermsById[b].genes.length - goTermsById[a].genes.length)

    // console.log(goTermIds, goTermsById);
    const rows = goTermIds.map(id => (
      <tr key={id}>
        <td>
          {id}
        </td>
        <td>
          {goTermsById[id].name}
        </td>
        <td>
          <Button text onClick={handleClick.bind(null, id)}>
            {goTermsById[id].genes.slice(0, 1)}{goTermsById[id].genes.length > 1 && ' ...'}
          </Button>
        </td>
        <td>
          {goTermsById[id].genes.length}
        </td>
      </tr>
    ))

    return (
      <Container style={{ height: 500, overflow: 'auto'}}>
        <Table>
          <Modal
            show={this.state.modal}
            onClose={onClose}
            closeOnBlur={true}
            showClose={false}
          >
            {
              this.state.modal &&
              <Modal.Card>
                <Modal.Card.Head onClose={onClose}>
                    <Modal.Card.Title>
                      <Heading size={4}>
                        {goTermsById[this.state.modal].name}
                      </Heading>
                      <Heading subtitle size={6} renderAs="h2">
                        {this.state.modal} | {goTermsById[this.state.modal].genes.length} Genes
                      </Heading>
                    </Modal.Card.Title>
                </Modal.Card.Head>
                <Modal.Card.Body>
                  <Content>
                    <ul style={{ listStyle: 'none' }}>
                      {goTermsById[this.state.modal].genes.map(gene => <li>{gene}</li>)}
                    </ul>
                  </Content>
                </Modal.Card.Body>
                <Modal.Card.Foot></Modal.Card.Foot>
              </Modal.Card>
            }
          </Modal>
          <thead>
            <tr>
              <th>
                <abbr title="GOTerm ID">ID</abbr>
              </th>
              <th>
                Biological Process
              </th>
              <th>
                Genes
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
      </Container>
    )
  }

}