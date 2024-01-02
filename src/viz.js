import * as d3 from "d3"
import param from "./parameters.js"
import {nodes,machine} from "./model.js"


const X = d3.scaleLinear();
const Y = d3.scaleLinear();

var ctx,dL,W,H;


function draw(display,config){
	
	ctx.clearRect(0, 0, W, H);

	nodes.filter(function(n){return n.state==1}).forEach(d=>{
		const c = d.cell();
		ctx.fillStyle="black"
		ctx.fillRect(X(c[0].x), Y(c[0].y), (X(c[2].x)-X(c[0].x)), (Y(c[2].y)-Y(c[0].y)));
	})
	
}


const update = (display,config) => {
	
	draw(display,config)
	
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]).domain([0,machine.N]);
	Y.range([0,H]).domain([0,machine.N]);
	
	ctx = display.node().getContext('2d');
	
	draw(display,config)
	
};

const go = (display,config) => {
	
	draw(display,config)
	
}


export {initialize,go,update}
