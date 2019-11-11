import React, { useState, useEffect } from 'react'
import createNetwork, { adjustSVG } from '../d3/createNetwork'
import debounce from 'lodash/debounce'
import axios from 'axios'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Box } from 'react-bulma-components'
import { useNetwork } from '../NetworkUIContext/NetworkUIContext'

const NetworkGraph = () => {
  const { ui: { loadState }, colors } = useNetwork()
  const [graph, setGraph] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.post('http://localhost:5000/api/network', {})
      setGraph(data)
    }
  
    getData()
  }, [])

  useEffect(() => {
    if (loadState !== 'LOADED') return

    const parent = document.querySelector('#network')
    if (!graph) {
      return
    }
    const { svg } = createNetwork(graph, parent, colors)

    const resize = debounce(function () {
          adjustSVG(svg, parent)
    }, 500)

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      Array.from(svg.node().children).forEach(child => child.remove())
    }
  })

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
