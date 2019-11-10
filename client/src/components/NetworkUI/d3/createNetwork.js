import './d3.css';

const d3 = window.d3;
const NodePieBuilder = window.NodePieBuilder;

function adjustSVG(svg, parent) {
  const { height, width } = d3.select(parent).node().getBoundingClientRect()

  svg.attr("width", width);
  svg.attr("height", height);

  return { width, height };
}

function createNetwork({ nodes, links }, parent, pathways) {
  const svg = d3.select("svg");
  const { width, height } = adjustSVG(svg, parent);

  const link_force = d3.forceLink(links)
    .id(function(d) { return d.id; })
    .distance(40)

  const simulation = d3.forceSimulation()
    .nodes(nodes)
    .force(
      "charge_force",
      d3.forceManyBody()
        .strength(-400)
    )
    .force(
      "center_force",
      d3.forceCenter(width / 2, height / 2)
    )
    .force("links", link_force)

  // group all necessary for zoom handling
  const g = svg.append('g')
              .attr('class', 'everything')

  const link = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 2);

  const node = g.append("g")
    .attr("class", "nodes")
    .selectAll("g.node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on('start', dragStart)
      .on('drag', dragDrag)
      .on('end', dragEnd)
    );

  const color = (pathwayId) => {
    // const pathway = pathways.byId[pathwayId.toString()];
    // return pathway ?  pathway.color : 'black';
    return 'black'
  }
  window.color = color;
  /* Draw the respective pie chart for each node */
  node.each(function (d) {
    NodePieBuilder.drawNodePie(d3.select(this), d.pieChart, {
      parentNodeColor: null,
      outerStrokeWidth: 12,
      showLabelText: true,
      labelText: d.id,
      labelColor: 'black',
    });
  });

  function tickActions() {
    //update link positions
    //simply tells one end of the line to follow one node around
    //and the other end of the line to follow the other node around
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    //update circle positions to reflect node updates on each tick of the simulation
    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .on("click", function (d) {
        d3.select(this).classed("fixed", function (d) {
          d.fx = null;
          d.fy = null;
          return d.fixed = false
        });
      })

    d3.selectAll("circle").attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });

    d3.selectAll("text").attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y;
      });
  }

  simulation.on("tick", tickActions);

  const sticky = true;
  function dragStart(d) {
    d3.select(this).classed("fixed", d.fixed = true);
    // Honestly I’m not sure why we check the if statement regarding d3.event.active. It seems to work without it as well, if we took away the if statement and just had simulation.alphaTarget. Let’s ignore it. Moving on now.
    if (!d3.event.active) {
      simulation.alphaTarget(0.3).restart();
    }

    d.fx = d.x;
    d.fy = d.y;
  }

  function dragDrag(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragEnd(d) {
    if (!d3.event.active) {
      simulation.alphaTarget(0);
    }

    if (sticky) {
      d.fx = d.x;
      d.fy = d.y;
    } else {
      d.fx = null;
      d.fy = null;
    }
  }

  // ZOOM HANDLING
  const zoomHandler = d3.zoom()
    .on("zoom", zoomActions);

  zoomHandler(svg);

  function zoomActions() {
    g.attr("transform", d3.event.transform)
  }

  return { svg };
}

// const cytoscape = require('./cytoscapeNetwork');
// window.cytoscape = cytoscape;
// console.log(cytoscape);

export default createNetwork;

export {
  adjustSVG,
}
