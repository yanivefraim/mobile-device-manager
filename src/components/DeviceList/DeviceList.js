'use strict';

import React from 'react';
import DeviceStore from '../../stores/DeviceStore';


// function getDeviceState(){
// 	return {'devices': DeviceStore.getDevices()};
// }

export default class DeviceList extends React.Component {

	constructor(props) {
		super(props);
//		this.state = getDeviceState();
	}

	// componentDidMount() {
	//     DeviceStore.addChangeListener(this._onChange);
 //  	}

	// componentWillUnmount() {
	// 	DeviceStore.removeChangeListener(this._onChange);
	// }

	render() {
		// //var devices = DeviceStore.getDevices();
		// var devicesHTML = this.state.devices.map( function( deviceItem ){
		// 	return <li key={ deviceItem.deviceID }>
		// 		{deviceItem.deviceName}
		// 		</li>	
		// });
		return (
		  <div>
		       <ul>

		       </ul>
		   </div>
		);
	}

	// _onChange: function() {
 //    	this.setState(getDeviceState());
 //  	}

}
