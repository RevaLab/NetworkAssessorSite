import React from 'react'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Box,
  Form,
  Tabs,
} from 'react-bulma-components'

// local components
import GeneFilterTable from '../GeneFilterTable/GeneFilterTable'

const { Field, Control, Input } = Form

const OntologyTabs = ({ ontologies, activeTab, handleTabClick }) => (
  <Tabs>
    {ontologies.allIds.map((id) => (
      <Tabs.Tab
        key={id}
        active={id===activeTab}
        onClick={() => handleTabClick(id)}
      >
        {ontologies.byId[id].name}
      </Tabs.Tab>
    ))}
  </Tabs>
)

class GeneFilterContainer extends React.Component {
  state = {
    activeTab: this.props.ontologies.allIds[0],
    search: '',
  }

  handleTabClick = (id) => {
    this.setState({
      activeTab: id,
      search: '',
    })
  }

  handleSearchChange = e => {
    this.setState({
      search: e.target.value,
    })
  }

  filterTerms() {
    const { allIds: goTermsIds, byId: goTermsById } = this.props.goTerms
    const { byId: ontologiesById } = this.props.ontologies

    const activeGoTermsSet = new Set(ontologiesById[this.state.activeTab].goTerms)

    const filteredTerms = goTermsIds
      .filter((term) => {
        const searches = this.state.search.toLowerCase().split(' ')

        // filter if matches both search and is preset in the correct ontology list
        return activeGoTermsSet.has(term) &&
          searches.every(search => goTermsById[term].name.toLowerCase().includes(search))
      })

      return filteredTerms
  }

  render() {
    return (
      <Box className="GeneFilterContainer">
        <OntologyTabs
          ontologies={this.props.ontologies}
          activeTab={this.state.activeTab}
          handleTabClick={this.handleTabClick}
        />
        <Field>
          <Control>
            <Input
              onChange={this.handleSearchChange}
              value={this.state.search}
              placeholder="search"
            ></Input>
          </Control>
        </Field>
        <div style={{ height: 500, overflow: 'auto' }}>
            <GeneFilterTable
              goTerms={{
                byId: this.props.goTerms.byId,
                allIds: this.filterTerms(),
              }}
            />
        </div>
      </Box>
    )
  }
}

export default GeneFilterContainer
