import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Box,
  Form,
  Tabs,
} from 'react-bulma-components';

// local components
import GeneFilterTable from './GeneFilterTable';

const { Field, Control, Input } = Form;

class GeneFilterContainer extends React.Component {
  state = {
    activeTab: this.props.ontologies.allIds[0],
    search: '',
  }

  handleTabClick = (id) => {
    this.setState({
      activeTab: id,
      search: '',
    });
  }

  handleSearchChange = e => {
    this.setState({
      search: e.target.value,
    })
  }

  render() {
    const ontologies = this.props.ontologies.allIds.map(id => ({
      id,
      name: this.props.ontologies.byId[id].name,
    }))

    const filteredTerms =
    this.props.ontologies.byId[this.state.activeTab].goTerms
      .filter((term) => {
        const searches = this.state.search.toLowerCase().split(' ');

        return searches.every(search => this.props.goTerms.byId[term].name.toLowerCase().includes(search))
      })

    const tabs = ontologies.map(({ id, name }) =>
      <Tabs.Tab
        key={id}
        active={id===this.state.activeTab}
        onClick={this.handleTabClick.bind(null, id)}
      >
        {name}
      </Tabs.Tab>
    )

    return (
      <Box className="GeneFilterContainer">
        <Tabs>{tabs}</Tabs>
          <Field>
            <Control>
              <Input
                onChange={this.handleSearchChange}
                value={this.state.search}
              ></Input>
            </Control>
          </Field>
          <div style={{ height: 500, overflow: 'auto' }}>
            <GeneFilterTable
              goTermIds={filteredTerms}
              goTermsById={this.props.goTerms.byId}
            />
          </div>
      </Box>
    )
  }
}

export default GeneFilterContainer;