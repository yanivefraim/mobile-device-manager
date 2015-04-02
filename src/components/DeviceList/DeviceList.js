'use strict';

import React from 'react';
import DeviceItem from '../DeviceItem';
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

	componentDidMount() {
	    DeviceStore.addListener('change',this._onChange.bind(this));
  	}

	componentWillUnmount() {
		DeviceStore.removeListener('change', this._onChange.bind(this));
	}

	render() {
		
		var	devicesHTML = this.state.devices.map( function( deviceItem ){
			return (
					<DeviceItem device = {deviceItem} />
				);	
			});	
		
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
