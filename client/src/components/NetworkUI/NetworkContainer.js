import React, { useEffect } from 'react';
import debounce from 'lodash/debounce';
import * as d3 from "d3";
import graph from './graph';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box } from 'react-bulma-components';

// css
import './network.css';

function createNetwork (selector, props) {
  const width = document.querySelector(selector).offsetWidth;
  const height = document.querySelector(selector).offsetHeight;

  const force = d3.layout.force()
    .size([width, height])
    .charge(-400)
    .linkDistance(40)
    .on("tick", tick);

  const drag = force.drag()
    .on("dragstart", dragstart);


  if (!props.svg) {
    props.svg = d3.select(selector).append("svg")
      .attr("width", width)
      .attr("height", height);
  }

  const svg = props.svg

  svg
    .attr("width", width)
    .attr("height", height);

  let link = svg.selectAll(".link");
  let node = svg.selectAll(".node");

  svg.data(graph)

  force
    .nodes(graph.nodes)
    .links(graph.links)
    .start();

  link = link.data(graph.links)
    .enter().append("line")
    .attr("class", "link");

  node = node.data(graph.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 12)
    .on("dblclick", dblclick)
    .call(drag);

  function tick() {
    link.attr("x1", function (d) {
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    node.attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });
  }

  function dblclick(d) {
    d3.select(this).classed("fixed", d.fixed = false);
  }

  function dragstart(d) {
    d3.select(this).classed("fixed", d.fixed = true);
  }
}

const NetworkGraph = () => {
  useEffect(() => {
    const props = {};
    const redraw = () => createNetwork('#network', props);
    redraw();
    window.addEventListener('resize', debounce(() => redraw(), 500));

    return () => {
      console.log('removed', props.svg)
      props.svg.remove();
    }
  })

  return (
    <Box renderAs="main"
      className="network-container" id="network"
      style={{padding: '0'}}
    >
    </Box>
  );
}

export default NetworkGraph;