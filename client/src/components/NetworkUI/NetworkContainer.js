import React, { useEffect } from 'react';
import createNetwork from './d3/createNetwork'
import graph from './graph';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box } from 'react-bulma-components';

// css
import './network.css';

const NetworkGraph = () => {

  const nodes_data =  [
    {"name": "Travis", "sex": "M"},
    {"name": "Rake", "sex": "M"},
    {"name": "Diana", "sex": "F"},
    {"name": "Rachel", "sex": "F"},
    {"name": "Shawn", "sex": "M"},
    {"name": "Emerald", "sex": "F"}
  ];

  const links_data = [
    {"source": "Travis", "target": "Rake"},
    {"source": "Diana", "target": "Rake"},
    {"source": "Diana", "target": "Rachel"},
    {"source": "Rachel", "target": "Rake"},
    {"source": "Rachel", "target": "Shawn"},
    {"source": "Emerald", "target": "Rachel"}
  ]

  const graph = {
    nodes: nodes_data,
    links: links_data,
  };

  useEffect(() => {
    createNetwork(graph);
  })

  return (
    // <Box renderAs="main"
    //   className="network-container" id="network"
    //   style={{padding: '0'}}
    // >
      <svg width="960" height="600"></svg>
    // </Box>
  );
}

export default NetworkGraph;