import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import throttle from 'lodash/throttle'
import createNetwork, { adjustSVG, colorNetwork } from '../d3/createNetwork'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Box } from 'react-bulma-components'
import { useNetwork } from '../NetworkUIContext/NetworkUIContext'

const NetworkGraph = () => {
  const { colors, tableLoadState, queryList: { genes } } = useNetwork()
  const [network, setNetwork] = useState(null)
  const [node, setNode] = useState(null)

  const fetchNetwork = useCallback(async () => {
    const { data } = await axios.post('http://localhost:5000/api/network', {
      genes: genes,
      db: 'biogrid'
    })
    setNetwork(data)
  }, [genes])

  useEffect(function fetchNetworkOnMount() {
    fetchNetwork()
  }, [fetchNetwork])

  useEffect(function createNetworkFromData() {  
    if (!network || tableLoadState !== 'LOADED') return
    const parent = document.querySelector('#network')
    const { svg, node } = createNetwork(network, parent)
    setNode(node)

    const resize = throttle(() => {
      adjustSVG(svg, parent)
    }, 100)

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      Array.from(svg.node().children).forEach(child => child.remove())
    }
  }, [network, tableLoadState])

  useEffect(function setNetworkColors() {
    if (!node) return
    colorNetwork(node, colors)
  }, [colors, node])

  return (
    <Box renderAs="main"
      className="network-container" id="network"
      style={{padding: '0'}}
    >
      <svg></svg>
    </Box>
  )
}

export default NetworkGraph
