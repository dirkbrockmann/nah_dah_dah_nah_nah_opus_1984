import * as d3 from "d3"
import {map, replace, capitalize, each, has, isBoolean, pickBy, toPairs } from "lodash-es"

const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," "); return d[1]} );

const add_widget = (p,w) => each(p,(v,i) => v["widget"]=w[i]);	

const variables = (p) => pickBy(p, v =>  has(v, "range"))  
const booleans = (p) => pickBy(p, v =>  isBoolean(v.default))  
const choices = (p) => pickBy(p, v =>  has(v, "choices"))  

const deg2rad = d3.scaleLinear().domain([0,360]).range([0,2*Math.PI]);
const rad2deg = d3.scaleLinear().range([0,360]).domain([0,2*Math.PI]);


const rle2xy = a=>{
	
	let s = a;
	
	s=s.replace(RegExp("ob","g"),"o1b");
	s=s.replace(RegExp("o\\$","g"),"o1$");
	s=s.replace(RegExp("bo","g"),"b1o");
	s=s.replace(RegExp("b\\$","g"),"b1$");
	s=s.replace(RegExp("\\$o","g"),"$1o");
	s=s.replace(RegExp("\\$b","g"),"$1b");
	if(s[0]=="b"){s=s.replace("b","1b")}
	if(s[0]=="a"){s=s.replace("a","1a")}
	if(s[0]=="$"){s=s.replace("$","1$")}
	
	let ss=s.split(RegExp("([bo\\$])"));
	ss.pop();
	let zonk = [];
	var posx = 0;
	var posy = 0
	var k;
	for(k=0;k<ss.length;k+=2){
		
		var n = 0;
		var state = 0;
		if(ss[k+1]=="$"){
			posx=0;
			posy=posy+parseInt(ss[k],10);
		} else {
			n = parseInt(ss[k],10);

			state= ss[k+1]=="o"? 1 : 0;
			zonk.push({n:n,state:state,x:posx,y:posy})
			posx=posx+n;
		}
	}
	
	let minx = d3.min(zonk,function(d){return d.x})
	let miny = d3.min(zonk,function(d){return d.y})
	
	zonk.forEach(function(d){d.x-=minx;d.y-=miny})

	return zonk;
}

function c2l(x,y,N){

	return y*N+x;
}

function l2c(l,N){
	return {x:l % N,y:Math.floor(l/N)}
}


export {add_id_label,add_widget,variables,booleans,choices,deg2rad,rad2deg,rle2xy,c2l,l2c}