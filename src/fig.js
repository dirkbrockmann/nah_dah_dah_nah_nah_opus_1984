import * as d3 from "d3"
import * as widgets from "d3-widgets"
import {square_simple} from "lattices"

export default (container,config)=>{
	
	
	var ascale = 20;
	var p = d3.path();
	p.moveTo(ascale * (-1), ascale * 0);
	p.lineTo(ascale * (1), ascale * 0);
	p.moveTo(ascale * (0.5), ascale * ( - 0.5 / Math.sqrt(3)));
	p.lineTo(ascale * (1), ascale * 0);
	p.moveTo(ascale * (0.5), ascale * (  0.5 / Math.sqrt(3)));
	p.lineTo(ascale * (1), ascale * 0);
	
	var G1 = square_simple(3);
	var G2 = square_simple(3);
	var G3 = square_simple(3);
	var G4 = square_simple(3);
	var G5 = square_simple(3);
	var G6 = square_simple(3);
	var G7 = square_simple(3);
	var G8 = square_simple(3);


	G1.nodes.forEach(function(d){d.state = 0})
	G1.nodes[4].state=1;
	G1.nodes[0].state=1;


	G2.nodes.forEach(function(d){d.state = 0})
	G2.nodes[0].state=1;

	G3.nodes.forEach(function(d){d.state = 0})
	G3.nodes[4].state=1;
	G3.nodes[0].state=1;
	G3.nodes[6].state=1;
	G3.nodes[7].state=1;
	G3.nodes[1].state=1;

	G4.nodes.forEach(function(d){d.state = 0})
	G4.nodes[0].state=1;
	G4.nodes[6].state=1;
	G4.nodes[7].state=1;
	G4.nodes[1].state=1;

	G5.nodes.forEach(function(d){d.state = 0})
	G5.nodes[4].state=1;
	G5.nodes[6].state=1;
	G5.nodes[7].state=1;

	G6.nodes.forEach(function(d){d.state = 0})
	G6.nodes[4].state=1;
	G6.nodes[6].state=1;
	G6.nodes[7].state=1;

	G7.nodes.forEach(function(d){d.state = 0})
	G7.nodes[4].state=0;
	G7.nodes[6].state=1;
	G7.nodes[7].state=1;
	G7.nodes[2].state=1;

	G8.nodes.forEach(function(d){d.state = 0})
	G8.nodes[4].state=1;
	G8.nodes[6].state=1;
	G8.nodes[7].state=1;
	G8.nodes[2].state=1;
	
	const L = 3*config.panel_size.height/4;
	
	const X = d3.scaleLinear().domain([0,3]).range([0,L]);
	const Y = d3.scaleLinear().domain([0,3]).range([0,L])
	var C = d3.scaleLinear().domain([0,1]).range(["rgb(230,230,230)","rgb(65,65,65)"]);
					
	const grid = widgets.grid(
			config.panel_size.width,
			config.panel_size.height,
			config.panel_grid.nx,
			config.panel_grid.ny
		);
	
	const fig_container = d3.select("#"+container).classed(config.fig_class,true);

	const panel1 = fig_container.append("div")
			.attr("id","panel1")
			.classed(config.panel_class,true)
			.classed(config.debug_lattice,config.debug)
			.append("svg")
			.attr("viewBox","0 0 "+config.panel_size.width+" "+config.panel_size.height)	
			.style("width","100%")
//			.style("border","1px solid black")
	
	const panel2 = fig_container.append("div")
			.attr("id","panel2")
			.classed(config.panel_class,true)
			.classed(config.debug_lattice,config.debug)
			.append("svg")
			.attr("viewBox","0 0 "+config.panel_size.width+" "+config.panel_size.height)	
			.style("width","100%")
		//	.style("border","1px solid black")
		
	const panel3 = fig_container.append("div")
			.attr("id","panel3")
			.classed(config.panel_class,true)
			.classed(config.debug_lattice,config.debug)
			.append("svg")
			.attr("viewBox","0 0 "+config.panel_size.width+" "+config.panel_size.height)	
			.style("width","100%")
			//	.style("border","1px solid black")
	
	const panel4 = fig_container.append("div")
			.attr("id","panel4")
			.classed(config.panel_class,true)
			.classed(config.debug_lattice,config.debug)
			.append("svg")
			.attr("viewBox","0 0 "+config.panel_size.width+" "+config.panel_size.height)	
			.style("width","100%")
			//	.style("border","1px solid black")
	
	const p1pos = grid.position(2,1);
	const p1pos2 = grid.position(6,1);
	const apos = grid.position(4,1);
	const tpos = grid.position(4,0.5);
	
	panel1
		.append("g").attr("transform","translate("+apos.x+","+apos.y+")")
		.append("path").attr("d",p.toString())
		.style("fill","none")
		.style("stroke","black").style("stroke-width",2)
		.style("stroke-linecap", "round")

	panel1
		.append("g").attr("transform","translate("+tpos.x+","+tpos.y+")")
		.append("text").text("Rule 1")
		.style("text-anchor","middle")

	const p1left = panel1.append("g").attr("transform","translate("+p1pos.x+","+p1pos.y+")")
	const p1right = panel1.append("g").attr("transform","translate("+p1pos2.x+","+p1pos2.y+")")
	
	p1left.selectAll(".cell").data(G1.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})

	p1right.selectAll(".cell").data(G2.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})

	panel2
		.append("g").attr("transform","translate("+apos.x+","+apos.y+")")
		.append("path").attr("d",p.toString())
		.style("fill","none")
		.style("stroke","black").style("stroke-width",2)
		.style("stroke-linecap", "round")

	panel2
		.append("g").attr("transform","translate("+tpos.x+","+tpos.y+")")
		.append("text").text("Rule 2")
		.style("text-anchor","middle")

	const p2left = panel2.append("g").attr("transform","translate("+p1pos.x+","+p1pos.y+")")
	const p2right = panel2.append("g").attr("transform","translate("+p1pos2.x+","+p1pos2.y+")")
	
	p2left.selectAll(".cell").data(G3.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})

	p2right.selectAll(".cell").data(G4.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})
	
	
	panel3
		.append("g").attr("transform","translate("+apos.x+","+apos.y+")")
		.append("path").attr("d",p.toString())
		.style("fill","none")
		.style("stroke","black").style("stroke-width",2)
		.style("stroke-linecap", "round")

	panel3
		.append("g").attr("transform","translate("+tpos.x+","+tpos.y+")")
		.append("text").text("Rule 3")
		.style("text-anchor","middle")

	const p3left = panel3.append("g").attr("transform","translate("+p1pos.x+","+p1pos.y+")")
	const p3right = panel3.append("g").attr("transform","translate("+p1pos2.x+","+p1pos2.y+")")
	
	p3left.selectAll(".cell").data(G5.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})

	p3right.selectAll(".cell").data(G6.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})
	
	panel4
		.append("g").attr("transform","translate("+apos.x+","+apos.y+")")
		.append("path").attr("d",p.toString())
		.style("fill","none")
		.style("stroke","black").style("stroke-width",2)
		.style("stroke-linecap", "round")

	panel4
		.append("g").attr("transform","translate("+tpos.x+","+tpos.y+")")
		.append("text").text("Rule 4")
		.style("text-anchor","middle")

	const p4left = panel4.append("g").attr("transform","translate("+p1pos.x+","+p1pos.y+")")
	const p4right = panel4.append("g").attr("transform","translate("+p1pos2.x+","+p1pos2.y+")")
	
	p4left.selectAll(".cell").data(G7.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})

	p4right.selectAll(".cell").data(G8.nodes).enter().append("rect")
		.attr("x",d=>X(d.cell()[0].x)-L/2)
		.attr("y",d=>Y(d.cell()[0].y)-L/2)
		.attr("width",X(1))
		.attr("height",Y(1))
	.attr("class","celle")
	.style("stroke","black")	
	.style("stroke-width","1")
	.style("fill",function(d){return C(d.state)})
	
	if (config.debug){		
		panel1.selectAll(".grid").data(grid.points).enter().append("circle").attr("r",2)
			.attr("transform",d=>"translate("+d.x+","+d.y+")")
			.style("fill","black")	
	}
}


