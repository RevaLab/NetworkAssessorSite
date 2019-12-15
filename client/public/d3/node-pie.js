var DEFAULT_OPTIONS = {
  radius: 20,
  outerStrokeWidth: 10,
  parentNodeColor: 'blue',
  showPieChartBorder: true,
  pieChartBorderColor: 'white',
  pieChartBorderWidth: '2',
  showLabelText: false,
  labelText: 'text',
  labelColor: 'blue'
};

function getOptionOrDefault(key, options, defaultOptions) {
  defaultOptions = defaultOptions || DEFAULT_OPTIONS;
  if (options && key in options) {
    return options[key];
  }
  return defaultOptions[key];
}

function checkParentNodeExists(nodeElement) {
  return nodeElement.select('#parent-pie').size() > 0
}

function drawParentCircle(nodeElement, options) {
  var outerStrokeWidth = getOptionOrDefault('outerStrokeWidth', options);
  var radius = getOptionOrDefault('radius', options);
  var parentNodeColor = getOptionOrDefault('parentNodeColor', options);

  nodeElement.insert("circle")
    .attr("id", "parent-pie")
    .attr("r", radius)
    .attr("fill", function (d) {
      return parentNodeColor;
    })
    .attr("stroke", function (d) {
      return parentNodeColor;
    })
    .attr("stroke-width", outerStrokeWidth);
}

function drawPieChartBorder(nodeElement, options) {
  var radius = getOptionOrDefault('radius', options);
  var pieChartBorderColor = getOptionOrDefault('pieChartBorderColor', options);
  var pieChartBorderWidth = getOptionOrDefault('pieChartBorderWidth', options);

  nodeElement.insert("circle")
    .attr("r", radius)
    .attr("fill", 'transparent')
    .attr("stroke", pieChartBorderColor)
    .attr("stroke-width", pieChartBorderWidth);
}

function drawPieChart(nodeElement, percentages, options) {
  var radius = getOptionOrDefault('radius', options);
  var halfRadius = radius / 2;
  var halfCircumference = 2 * Math.PI * halfRadius;

  if (nodeElement.select('[id^=pie-fill-]').size() <= 0) {
    percentages.forEach((p, idx) => {
      nodeElement
        .insert('circle', '#parent-pie + *')
        .attr('id', `pie-fill-${idx}`)
    })
  }

  let percentToDraw = 0;
  percentages.forEach((p, idx) => {
    percentToDraw += p.percent;

    nodeElement
      .select(`#pie-fill-${idx}`)
      .attr("r", halfRadius) 
      .attr("fill", 'transparent')
      .style('stroke', color(p.color))
      .style('stroke-width', radius)
      .style('stroke-dasharray',
        halfCircumference * percentToDraw / 100 +
        ' ' +
        halfCircumference);
  })
}

function drawTitleText(nodeElement, options) {
  var radius = getOptionOrDefault('radius', options);
  var text = getOptionOrDefault('labelText', options);
  var color = getOptionOrDefault('labelColor', options);

  nodeElement.append("text")
    .text(String(text))
    .attr("fill", color)
    .attr("dy", radius * 2);
}

var NodePieBuilder = {
  drawNodePie: function (nodeElement, percentages, options) {
    const parentNodeExists = checkParentNodeExists(nodeElement)

    if (!parentNodeExists) {
      drawParentCircle(nodeElement, options);

      var showPieChartBorder = getOptionOrDefault('showPieChartBorder', options);
      if (showPieChartBorder) {
        drawPieChartBorder(nodeElement, options);
      }
  
      var showLabelText = getOptionOrDefault('showLabelText', options);
      if (showLabelText) {
        drawTitleText(nodeElement, options);
      }
    }


    if (!percentages) return;
    drawPieChart(nodeElement, percentages, options);
  }
};
