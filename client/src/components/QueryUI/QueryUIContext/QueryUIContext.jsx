import React, { useReducer, useState, useContext, useCallback, useEffect, useMemo } from 'react'
import axios from 'axios'

const QueryUIContext = React.createContext()
const { Provider, Consumer } = QueryUIContext

const genesFromSelectedGoTerms = (selectedTerms, goTerms) => {
  const geneSet = new Set(selectedTerms.flatMap(term => goTerms.byId[term].genes))
  return Array.from(geneSet)
}

const geneTextToArray = (str) => {
  return Array.from(
    new Set(
      str.split('\n').map(str => str.trim()).filter(el => el)
    )
  )
}

const QueryUIProvider = ({ children }) => {
  const [ui, setUi] = useReducer(
  (state, newState) => {
    const nextState = {
      ...state,
      ...newState,
      queryGenes: newState.queryGenesValue !== undefined ? geneTextToArray(newState.queryGenesValue) : state.queryGenes,
      filteredGenes: newState.filteredGenesValue !== undefined ? geneTextToArray(newState.filteredGenesValue) : state.filteredGenes,
    }

    return nextState
  }, 
  {
    queryGenesValue: '',
    filteredGenesValue: '',
    queryGenes: [],
    filteredGenes: [],
    selectedTerms: [],
    filtering: false,
    loadState: 'LOADING',
  })

  const [ontologies, setOntologies] = useState({
    byId: {},
    allIds: []
  })

  const [goTerms, setGoTerms] = useState({
    byId: {},
    allIds: []
  })

  const onQueryChange = useCallback(evt => {
    const value = evt.target.value
    setUi({ queryGenesValue: value })
  }, [])

  const onFilteredChange = useCallback(evt => {
    const value = evt.target.value
    setUi({ filteredGenesValue: value })
  }, [])

  const toggleFiltering = useCallback(evt => {
    const checked = evt.target.checked
    setUi({
      filtering: checked,
      filteredGenesValue: '',
      selectedTerms: []
    })
  }, [])

  const handleExample = useCallback(() => {
    const exampleGenes = ["FLT3", "SMO", "GLA", "SGCB", "OAT", "CAPN3", "ASS1", "AGXT", "AKT1", "PTPN1", "PIAS1", "CDKN1B", "THEM4", "CCNE1", "MAP2K4", "ATG7", "ATG12", "BAD", "BCL2L1"]
    
    setUi({
      queryGenesValue: exampleGenes.join('\n')
    })
  }, [])

  const fetchOntologies = useCallback(() => {
    const fetchOntologies = async () => {
      const { data: { ontologies, goTerms } } = await axios.post('http://localhost:5000/api/go-terms', { genes: ui.queryGenes })
      const allGoTerms = Object.values(ontologies.byId).reduce((acc, { goTerms }) => [...acc, ...goTerms], [])

      setOntologies({
        byId: {
          ...ontologies.byId,
          all: {
            name: 'All',
            goTerms: allGoTerms
          }
        },
        allIds: ['all', ...ontologies.allIds]
      })

      setGoTerms(goTerms)

      setUi({ loadState: 'LOADED' })
    }

    fetchOntologies()
  }, [ui.queryGenes])

  useEffect(() => {
    if (ui.filtering) {
      fetchOntologies()
    }
  }, [fetchOntologies, ui.filtering])

  const addSelectedTerms = useCallback((...newTerms) => {
    const selectedTerms = [...ui.selectedTerms, ...newTerms]
    const filteredGenes = genesFromSelectedGoTerms(selectedTerms, goTerms)

    setUi({
      selectedTerms,
      filteredGenesValue: filteredGenes.join('\n'),
    })
  }, [goTerms, ui.selectedTerms])

  const removeSelectedTerm = useCallback(deleteTerm => {
    const selectedTerms = ui.selectedTerms.filter(term => term !== deleteTerm)
    const filteredGenes = genesFromSelectedGoTerms(selectedTerms, goTerms)

    setUi({
      selectedTerms,
      filteredGenesValue: filteredGenes.join('\n'),
    })
  }, [goTerms, ui.selectedTerms])

  const contextValues = useMemo(() => ({
    ui,
    ontologies,
    goTerms,
    onQueryChange,
    onFilteredChange,
    toggleFiltering,
    handleExample,
    addSelectedTerms,
    removeSelectedTerm,
  }), [
    ui,
    ontologies,
    goTerms,
    onQueryChange,
    onFilteredChange,
    toggleFiltering,
    handleExample,
    addSelectedTerms,
    removeSelectedTerm,
  ])

  return (
    <Provider value={contextValues}>
      {children}
    </Provider>
  )
}

const useQueryUI = () => useContext(QueryUIContext)

export {
  useQueryUI,
  QueryUIContext,
  QueryUIProvider,
  Consumer as QueryUIConsumer
}
