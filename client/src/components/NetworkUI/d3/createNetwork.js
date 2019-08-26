import './d3.css';

const d3 = window.d3;

function createNetwork({ nodes, links }) {
  const svg = d3.select("svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const simulation = d3.forceSimulation()
    .nodes(nodes)
    .force("charge_force", d3.forceManyBody()
    )
    .force("center_force", d3.forceCenter(width / 2, height / 2))

  const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "red");

  const link_force =  d3.forceLink(links)
                        .id(function(d) { return d.name; })

  simulation.force("links", link_force)

  const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 2);

  function tickActions() {
    //update circle positions to reflect node updates on each tick of the simulation
    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)

    //update link positions
    //simply tells one end of the line to follow one node around
    //and the other end of the line to follow the other node around
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
  }

  simulation.on("tick", tickActions);
}

const cytoscape = require('./cytoscapeNetwork');
window.cytoscape = cytoscape;
console.log(cytoscape);

export default createNetwork;