
import param from "./parameters.js"
import {each,range,map,mean,sumBy} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"
import setup_machine,{systems as machines} from "./machines.js"
import {square_simple as square} from "lattices"

const L = param.L;
const dt = param.dt;

let nodes = [];
let G = {};
let machine = {};

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	machine = machines[param.systems.widget.value()];

	G = square(machine.N).boundary(machine.boundary);
	nodes = G.nodes;
	
	
	if (machine.name != "random") {
			setup_machine(nodes,machine)
	} else {
		nodes.forEach(function(d){
			d.state= Math.random() < param.density.widget.value() ? 1 : 0;
		})
	}
	
};

const go  = () => {
	
	param.tick++;
	
	nodes.forEach(function(n){
		let z = sumBy(n.neighbors,function(m){return m.state})
		if(!n.state){
			n.nextstate = z==3 ? 1 : 0
		} else {
			n.nextstate = (z==2 || z==3) ? 1 : 0
		}
		
		// if (n.state == 0 && n.nextstate==1) {n.newness=1}
	// 	if (n.state == 1 && n.nextstate==1) {n.newness*=0.95}
	//		
	})
	nodes.forEach(function(n){
		n.state=n.nextstate;
	})
	
}

const update = () => {
	machine = machines[param.systems.widget.value()];
	if (machine.name != "random") {
			setup_machine(nodes,machine)
	} else {
		nodes.forEach(function(d){
			d.state= Math.random() < param.density.widget.value() ? 1 : 0;
		})
	}
}

export {nodes,machine,initialize,go,update}
