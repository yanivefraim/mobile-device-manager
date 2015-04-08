/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 'use strict';

 import React from 'react';
 import DeviceStore from '../../stores/DeviceStore';
 import DeviceList from '../DeviceList';
 import WebAPI from '../../core/WebAPI';
 import requireAuth from '../../core/requireAuth';


 function getDeviceState(){
 	return DeviceStore.getDevices();
 }

 var ContentPage = requireAuth(class extends React.Component {
//export default class ContentPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = getDeviceState();
	}

	componentDidMount() {
		DeviceStore.addListener('change',this._onChange.bind(this));
		var webAPI = new WebAPI();
		webAPI.init();
	}

	componentWillUnmount() {
    	DeviceStore.removeListener('change', this._onChange.bind(this));
	}

	render() {
		return (
			<div>
			<DeviceList devices = {this.state.devices} />
			</div>
		);
	}

	_onChange() {debugger;
		this.setState(getDeviceState());
	}

});

 export default ContentPage;
