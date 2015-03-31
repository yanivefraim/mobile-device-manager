'use strict';

import React from 'react';
import DeviceStore from '../../stores/DeviceStore';

export default class DeviceList extends React.Component {

  render() {
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
       </div>
    );
  }

}
