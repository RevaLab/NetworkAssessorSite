import React, { useEffect } from 'react';
import createNetwork, { adjustSVG } from './d3/createNetwork'
import debounce from 'lodash/debounce';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box } from 'react-bulma-components';
import { useNetwork } from './NetworkUIContext';

const NetworkGraph = () => {
  const { ui: { loadState }, colors } = useNetwork()

  const graph = {
    "nodes": [
      {
        "id": "AKT1",
        "pieChart" : [
          { "color": 0, "percent": 100 }
          // { "color": 547, "percent": 40 },
          // { "color": 838, "percent": 20 },
          // { "color": 1097, "percent": 20 },
          // { "color": 1210, "percent": 20 }
        ]
      },
      {
        "id": "BAD",
        "pieChart" : [
          { "color": 3369, "percent": 33.33 },
          { "color": 3116, "percent": 33.34 },
          { "color": 2942, "percent": 33.33 }
        ]
      },
      {
        "id": "BCL2L1",
        "pieChart" : [
          { "color": 1210, "percent": 25 },
          { "color": 1911, "percent": 25 },
          { "color": 1097, "percent": 25 },
          { "color": 2725, "percent": 25 }
        ]
      }
    ],
    "links": [
      {"source": "AKT1", "target": "BAD"},
      {"source": "BAD", "target": "BCL2L1"},
      {"source": "BCL2L1", "target": "AKT1"},
    ]
  }

  useEffect(() => {
    if (loadState !== 'LOADED') return;

    const parent = document.querySelector('#network');
    const { svg } = createNetwork(graph, parent, colors);

    const resize = debounce(function () {
          console.log('adjust')
          adjustSVG(svg, parent);
    }, 500);

    window.addEventListener('resize', resize);

    return () => {
      console.log('unmount')
      window.removeEventListener('resize', resize);
      Array.from(svg.node().children).forEach(child => child.remove());
    }
  })

  return (
    <Box renderAs="main"
      className="network-container" id="network"
      style={{padding: '0'}}
    >
      <svg></svg>
    </Box>
  );
}

export default NetworkGraph;
