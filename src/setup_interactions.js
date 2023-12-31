import {interval,select} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {systems as machines} from "./machines.js"
import {styles} from "d3-widgets"

var timer = {}

const startstop = (display,config) => {
	const delay = machines[param.systems.widget.value()].delay
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),delay) : timer.stop()

}

function update_slider_visibility(controls){
	if(ct.go.value()==true ||  machines[param.systems.widget.value()].name != "random") {
		controls.select("#slider_"+param.density.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+param.density.widget.id()).selectAll("*").style("pointer-events","none")
	} else {
		controls.select("#slider_"+param.density.widget.id()).transition().style("opacity",1)
		controls.select("#slider_"+param.density.widget.id()).selectAll("*").style("pointer-events",null)
	}
}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(()=>{
		update_slider_visibility(controls)
		startstop(display,config)
	})
	ct.setup.update(()=>initialize(display,config))
	
	
	param.density.widget.update_end(()=>update(display,config))
	// add toggle of visibilty of slider!!
	
	param.systems.widget.update(()=>{
		
		update_slider_visibility(controls)
		
		if (ct.go.value()) {ct.go.press(controls)}
		
		initialize(display,config)
		
	})
	
	//
	
}

