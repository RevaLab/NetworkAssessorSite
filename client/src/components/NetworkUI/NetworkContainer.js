import React, { useEffect } from 'react';
import createNetwork, { adjustSVG } from './d3/createNetwork'
import debounce from 'lodash/debounce';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box } from 'react-bulma-components';

const NetworkGraph = () => {

  const graph = {
    "nodes": [
      {
        "id": "a", "group": 1,
        "pieChart" : [
          { "color": 1, "percent": 40 },
          { "color": 2, "percent": 20 },
          { "color": 3, "percent": 20 },
          { "color": 4, "percent": 20 }
        ]
      },
      {
        "id": "b", "group": 2,
        "pieChart" : [
          { "color": 1, "percent": 33.33 },
          { "color": 2, "percent": 33.34 },
          { "color": 3, "percent": 33.33 }
        ]
      },
      {
        "id": "c", "group": 3,
        "pieChart" : [
          { "color": 1, "percent": 25 },
          { "color": 2, "percent": 25 },
          { "color": 3, "percent": 25 },
          { "color": 4, "percent": 25 }
        ]
      },
      {
        "id": "d", "group": 4,
        "pieChart" : [
          { "color": 1, "percent": 33.33 },
          { "color": 3, "percent": 33.33 },
          { "color": 4, "percent": 33.34 }
        ]
      },
      {
        "id": "e", "group": 1,
        "pieChart" : [
          { "color": 1, "percent": 100 }
        ]
      },
      {
        "id": "f", "group": 1,
        "pieChart" : [
          { "color": 1, "percent": 100 }
        ]
      },
      {
        "id": "g", "group": 2,
        "pieChart" : [
          { "color": 2, "percent": 50 },
          { "color": 3, "percent": 50 }
        ]
      },
      {
        "id": "h", "group": 3,
        "pieChart" : [
          { "color": 2, "percent": 50 },
          { "color": 3, "percent": 50 }
        ]
      },
      {
        "id": "i", "group": 4,
        "pieChart" : [
          { "color": 4, "percent": 100 }
        ]
      }
    ],
    "links": [
      {"source": "a", "target": "b", "value": 5},
      {"source": "a", "target": "c", "value": 5},
      {"source": "a", "target": "d", "value": 5},
      {"source": "a", "target": "e", "value": 5},
      {"source": "a", "target": "f", "value": 5},
      {"source": "b", "target": "c", "value": 5},
      {"source": "b", "target": "g", "value": 5},
      {"source": "c", "target": "d", "value": 5},
      {"source": "c", "target": "h", "value": 5},
      {"source": "d", "target": "i", "value": 5},
      {"source": "e", "target": "f", "value": 5},
      {"source": "h", "target": "g", "value": 5}
    ]
  }

  useEffect(() => {
    const parent = document.querySelector('#network');
    const { svg } = createNetwork(graph, parent);

    window.addEventListener('resize', debounce(function() {
      console.log('adjust')
      adjustSVG(svg, parent);
    }, 500))

    return () => {
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
  );
}

export default NetworkGraph;