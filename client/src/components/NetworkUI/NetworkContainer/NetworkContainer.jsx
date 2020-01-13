import React, { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'
import createNetwork, { adjustSVG, colorNetwork } from '../d3/create-network'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Box } from 'react-bulma-components'
import { useNetwork } from '../NetworkUIContext/NetworkUIContext'

const NetworkGraph = () => {
  const { colors, tableLoadState, fetchNetwork, network } = useNetwork()
  const [node, setNode] = useState(null)

  useEffect(() => {
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
