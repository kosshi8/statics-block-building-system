const Visualize =async(idcode,areacode,TimeFrom,TimeTo,way) => {
    const dataT=await getData(idcode,areacode,TimeFrom,TimeTo,"@time");
    const data1=await getData(idcode,areacode,TimeFrom,TimeTo,"$");
    let dataName=await getMeta(idcode,areacode,TimeFrom,TimeTo,"@name");
    if(way=="LineChart"){
      const dataset=await shapeData(dataT["array"],data1["array"]);
      DrawLineChart(dataset,dataName);
    }
    else if(way=="PieChart"){
      const dataset=shapeData2(dataT["array"],data1["array"]);
      DrawPieChart(dataset);
    }
    else if(way=="BarChart"){
      const dataset=shapeData2(dataT["array"],data1["array"]);
      DrawBarChart(dataset);
    }
    else if(way=="ScatterChart"){
      const dataset=shapeData(dataT["array"],data1["array"]);
      DrawScatterChart(dataset);
    }
    else if(way=="StaTable"){
      const dataA=await getData(idcode,areacode,TimeFrom,TimeTo,"$");
      DrawStaTable(data1,dataA,dataT,stats);
    }
    else{alert("Not appropriate for VISUALIZE");}
  }

const DrawLineChart=(dataset,dataName)=>{
    let width = 400; // グラフの幅
    let height = 300; // グラフの高さ
    let margin = { "top": 30, "bottom": 60, "right": 30, "left": 60 };
    // 2. SVG領域の設定
    let svg = d3.select("#consolearea"+hum).append("svg").attr("width", width).attr("height", height);
    // 3. 軸スケールの設定
    let xScale = d3.scaleLinear()
        .domain([d3.min(dataset, function(d) { return d[0]; }), d3.max(dataset, function(d) { return d[0]; })])
        .range([margin.left, width - margin.right]);

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function(d) { return d[1]; })])
        .range([height - margin.bottom, margin.top]);

    // 4. 軸の表示
    let axisx = d3.axisBottom(xScale).ticks(5);
    let axisy = d3.axisLeft(yScale).ticks(5);

    svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - margin.bottom) + ")")
    .call(axisx)
    .append("text")
    .attr("fill", "black")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "10pt")
    .attr("font-weight", "bold")
    .text("Year");

    svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + 0 + ")")
    .call(axisy)
    .append("text")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
    .attr("y", -35)
    .attr("transform", "rotate(-90)")
    .attr("font-weight", "bold")
    .attr("font-size", "10pt")
    .text(dataName);
            
    // 5. ラインの表示
    svg.append("path")
    .datum(dataset)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return xScale(d[0]); })
      .y(function(d) { return yScale(d[1]); }));
    }

const drawSomething = ()=>{
    d3.select("body").append("p").text("Hello!");
}

const DrawPieChart=(dataset)=>{
    var width = 400; // グラフの幅
    var height = 300; // グラフの高さ
    var radius = Math.min(width, height) / 2 - 10;

    // 2. SVG領域の設定
    var svg = d3.select("#consolearea"+hum).append("svg").attr("width", width).attr("height", height);

    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // 3. カラーの設定
    var color = d3.scaleOrdinal()
    .range(["#DC3912", "#3366CC", "#109618", "#FF9900", "#990099"]);

    // 4. pieチャートデータセット用関数の設定
    var pie = d3.pie()
    .value(function(d) { return d.value; })
    .sort(null);

    // 5. pieチャートSVG要素の設定
    var pieGroup = g.selectAll(".pie")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("class", "pie");

    arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

    pieGroup.append("path")
    .attr("d", arc)
    .attr("fill", function(d) { return color(d.index) })
    .attr("opacity", 0.75)
    .attr("stroke", "white");

    // 6. pieチャートテキストSVG要素の設定
    var text = d3.arc()
    .outerRadius(radius - 30)
    .innerRadius(radius - 30);

    pieGroup.append("text")
    .attr("fill", "black")
    .attr("transform", function(d) { return "translate(" + text.centroid(d) + ")"; })
    .attr("dy", "5px")
    .attr("font", "10px")
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.name; });
}

const DrawBarChart=(dataset)=>{
  var width = 400; // グラフの幅
  var height = 300; // グラフの高さ
  var padding = 30; // スケール表示用マージン
  
  // 2. SVG領域の設定
  var svg = d3.select("#consolearea"+hum).append("svg").attr("width", width).attr("height", height);
 
  // 3. 軸スケールの設定
  var xScale = d3.scaleBand()
    .rangeRound([padding, width - padding])
    .padding(0.1)
    .domain(dataset.map(function(d) { return d.name; }));
 
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d.value; })])
    .range([height - padding, padding]);
 
  // 4. 軸の表示
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(d3.axisBottom(xScale));
 
  svg.append("g")
    .attr("transform", "translate(" + padding + "," + 0 + ")")
    .call(d3.axisLeft(yScale));
 
  // 5. バーの表示
  svg.append("g")
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d) { return xScale(d.name); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - padding - yScale(d.value); })
    .attr("fill", "steelblue");
}

const DrawScatterChart=(dataset)=>{
  var width = 400; // グラフの幅
  var height = 300; // グラフの高さ
  var margin = { "top": 30, "bottom": 60, "right": 30, "left": 60 };
 
  // 2. SVG領域の設定
  var svg = d3.select("#consolearea"+hum).append("svg").attr("width", width).attr("height", height);
 
  // 3. 軸スケールの設定
  var xScale = d3.scaleLinear()
    .domain([d3.min(dataset, function(d) { return d[0]; }), d3.max(dataset, function(d) { return d[0]; })])
    .range([margin.left, width - margin.right]);
 
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
    .range([height - margin.bottom, margin.top]);
 
  // 4. 軸の表示
  var axisx = d3.axisBottom(xScale).ticks(5);
  var axisy = d3.axisLeft(yScale).ticks(5);
 
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - margin.bottom) + ")")
    .call(axisx)
    .append("text")
    .attr("fill", "black")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "10pt")
    .attr("font-weight", "bold")
    .text("X Label");
 
  svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + 0 + ")")
    .call(axisy)
    .append("text")
    .attr("fill", "black")
    .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
    .attr("y", -35)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "10pt")
    .text("Y Label");
 
  // 5. プロットの表示
  svg.append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale(d[0]); })
    .attr("cy", function(d) { return yScale(d[1]); })
    .attr("fill", "steelblue")
    .attr("r", 4);
}

const DrawStaTable = (data1,dataA,dataT,stats) => {
  var dataset = [
    dataT,
    dataA
  ];
 
  d3.select("#consolearea"+hum)
    .append("table")
    .attr("border", "1") // 枠線表示
    .append("tbody")
    .selectAll("tr")
    .data(dataset)
    .enter()
    .append("tr")
    .selectAll("td")
    .data(function(row) { return row; })
    .enter()
    .append("td")
    .text(function(d) { return d; });
  d3.select("#consolearea"+hum)
    .append("p")
    .text(stats+":"+data1);
}
