'use strict';

import React from 'react';
import DeviceItem from '../DeviceItem';

export default class DeviceList extends React.Component {

	render() {
		var	devicesHTML = this.props.devices.map( function( deviceItem ){
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
}
