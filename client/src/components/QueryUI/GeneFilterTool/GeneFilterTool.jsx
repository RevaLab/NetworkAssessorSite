import React from 'react'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Container,
  Loader,
} from 'react-bulma-components'

// local components
import GeneFilterContainer from './GeneFilterContainer/GeneFilterContainer'

// context
import { QueryUIConsumer } from '../QueryUIContext/QueryUIContext'

// css
import './GeneFilterTool.css'

const GeneFilterTool = () => {

    return (
      <QueryUIConsumer>
        {({
          ui: {
            loadState,
            selectedTerms,
          },
          ontologies,
          goTerms,
          addSelectedTerms,
          removeSelectedTerm,
        }) =>
          <Container className="GeneFilterTool">
            {
              loadState === 'LOADED' ?
              <GeneFilterContainer
                ontologies={ontologies}
                goTerms={goTerms}
                addSelectedTerms={addSelectedTerms}
                removeSelectedTerm={removeSelectedTerm}
                selectedTerms={selectedTerms}
              />
              :
              <Loader style={{
                width: 100,
                height: 100,
                border: '4px solid #209cee',
                borderTopColor: 'transparent',
                borderRightColor: 'transparent',
                margin: '0 auto',
              }}/>
            }
          </Container>
        }
      </QueryUIConsumer>
    )
}

export default GeneFilterTool
