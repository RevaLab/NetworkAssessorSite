import React, { useState, useEffect, useRef } from 'react'
import createNetwork, { adjustSVG, colorNetwork } from '../d3/createNetwork'
import debounce from 'lodash/debounce'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Box } from 'react-bulma-components'
import { useNetwork } from '../NetworkUIContext/NetworkUIContext'

const NetworkGraph = () => {
  const { ui: { networkLoadState }, colors, fetchNetwork } = useNetwork()
  const [graph, setGraph] = useState(null)
  const nodeRef = useRef(null)

  useEffect(() => {
    const getData = async () => {
      const data = await fetchNetwork()
      setGraph(data)
    }
  
    getData()
  }, [fetchNetwork])

  useEffect(() => {
    if (networkLoadState !== 'LOADED') return
    
    const parent = document.querySelector('#network')
    if (!graph) {
      return
    }
    const { svg, node } = createNetwork(graph, parent)
    nodeRef.current = node

    const resize = debounce(function () {
      adjustSVG(svg, parent)
    }, 500)

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      Array.from(svg.node().children).forEach(child => child.remove())
    }
  }, [graph, networkLoadState])

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    console.log(colors)
    colorNetwork(node, colors)
  }, [colors])

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
