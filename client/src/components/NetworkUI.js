import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Columns,
  Container,
  Icon,
  Section,
  Table,
} from 'react-bulma-components';

// local components

// css
import './NetworkUI.css';

class NetworkUi extends React.Component {

  state = {
    k_pathwayId_v_color: {},
    k_pathwayId_v_edgesLength: {},
    k_pathwayId_v_membersLength: {},
    k_pathwayId_v_name: {},
    k_pathwayId_v_overlapLength: {},
    k_pathwayId_v_pVal: {},
    k_sourceId_v_name: {},
    k_sourceId_v_pathwayIds: {},
    sourceIds: [],
    pathways: [],
  }

  async componentDidMount() {
    const delay = (t, v) => new Promise((res) => setTimeout(res.bind(null, v), t));
    const data = await delay(2000, require('./networkData').pathwayData)

    this.setState({
      ...data,
    })
  }

  render() {
    const rows = this.state.pathways.map(id => (
      <tr key={id}>
        <td className="col-name">
          {this.state.k_pathwayId_v_name[id]}
        </td>
        <td>
          <Icon style={{ borderRadius: '50%', backgroundColor: this.state.k_pathwayId_v_color[id],
            width: '1em',
            height: '1em',
          }}>

          </Icon>
        </td>
        <td className="col-pwaymembers">
          {this.state.k_pathwayId_v_membersLength[id]}
        </td>
        <td className="col-edges">
          {this.state.k_pathwayId_v_edgesLength[id]}
        </td>
        <td className="col-overlap">
          {this.state.k_pathwayId_v_overlapLength[id]}
        </td>
        <td className="col-sig">
          {this.state.k_pathwayId_v_pVal[id].toExponential(2)}
        </td>
      </tr>
    ))

    return (
      <Section className="NetworkUI">
        <Columns gapless multiline={false}>
          <Columns.Column className="network-nav">
            <Box renderAs="nav" className="network-nav">
              <Container className="network-nav-container">

              </Container>
              <Container className="network-table-container">
                <Table>
                  <thead>
                    <tr>
                      <th className="col-name">
                        Name
                      </th>
                      <th className="col-color">
                      </th>
                      <th className="col-pwaymembers">
                        <abbr title="Pathway members">
                          L
                        </abbr>
                      </th>
                      <th className="col-edges">
                        <abbr title="Edges between pathway and query list">
                          E
                        </abbr>
                      </th>
                      <th className="col-overlap">
                        <abbr title="Overlap between pathway and query list">
                          O
                        </abbr>
                      </th>
                      <th className="col-sig">
                        <abbr title="Significance">Sig.</abbr>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows}
                  </tbody>
                </Table>
              </Container>
            </Box>
          </Columns.Column>
          <Columns.Column style={{margin: '0 auto'}}>
            <Box renderAs="main" className="network-container">

            </Box>
          </Columns.Column>
        </Columns>
      </Section>
    );
  }
}

export default NetworkUi;