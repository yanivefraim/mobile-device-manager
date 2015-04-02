'use strict';

import React from 'react';

export default class DeviceItem extends React.Component {
	constructor(props) {
		super(props);
		//this.state = getDeviceState();
	}

	render() {debugger;
		return (
			<li key={ this.props.device.deviceID }>
				{this.props.device.deviceName}
			</li>
		);
	}
}