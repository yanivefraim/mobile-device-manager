'use strict';

import React from 'react';
import mui from 'material-ui';
var Paper = mui.Paper;


export default class DeviceListItem extends React.Component {
	constructor(props) {
		super(props);
		//this.state = getDeviceState();
	}

	render() {debugger;
		return (
			<li key={ this.props.device.deviceID } onClick={this._clickHandler.bind(this)}>
				<Paper zDepth={2}>
	  				{this.props.device.deviceName}
				</Paper>
			</li>
		);
	}

	_clickHandler(e){
		this.props.onItemEdit(this.props.device.deviceID);
	}
}