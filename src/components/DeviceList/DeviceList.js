'use strict';

import React from 'react';

export default class DeviceList extends React.Component {

  render() {
  	var DeviceStore = {};
  	DeviceStore.getDevices = function(){
  		return [{"deviceID":"123", "deviceName":"Nexus4"}];
  	};
  	var devices = DeviceStore.getDevices();
  	var devicesHTML = devices.map( function( deviceItem ){
  		return <li key={ deviceItem.deviceID }>
  			{deviceItem.deviceName}
  			</li>	
  	});
    return (
      <div>
       <ul>
       		{ devicesHTML }
       </ul>
    );
  }

}
