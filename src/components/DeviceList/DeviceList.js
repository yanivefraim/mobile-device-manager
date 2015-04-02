'use strict';

import React from 'react';
import DeviceStore from '../../stores/DeviceStore';


function getDeviceState(){
	return DeviceStore.getDevices();
}

export default class DeviceList extends React.Component {

	constructor(props) {
		super(props);
		this.state = getDeviceState();
	}

	// getInitialState() {
	// 	return getDeviceState();
	// }

	componentDidMount() {debugger;
	    DeviceStore.addListener('change',this._onChange);
  	}

	componentWillUnmount() {
		DeviceStore.removeListener('change', this._onChange);
	}

	render() {
		debugger;
		var devicesHTML = "";
		if(this.state.devices){
			devicesHTML = this.state.devices.map( function( deviceItem ){
			return (
					<li key={ deviceItem.deviceID }>
					{deviceItem.deviceName}
					</li>
				);	
			});	
		}
		
		
		return (
		  <div>
		       <ul>
		       		{ devicesHTML }
		       </ul>
		   </div>
		);
	}

	_onChange() {debugger;
    	this.setState(getDeviceState());
    	
  	}

}
