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
import mui from 'material-ui';
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var FontIcon = mui.FontIcon;
var DropDownIcon = mui.DropDownIcon;
var RaisedButton = mui.RaisedButton;
var DropDownMenu = mui.DropDownMenu;
var TextField = mui.TextField;

 function getDeviceState(search){
 	return DeviceStore.getDevices(search);
 }

 var ContentPage = requireAuth(class extends React.Component {
//export default class ContentPage extends React.Component {

	constructor(props) {
		super(props);
		this.filterOptions = [
  { payload: '1', text: 'All Broadcasts' },
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];
this.iconMenuItems = [
  { payload: '1', text: 'Download' },
  { payload: '2', text: 'More Info' }
];

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
				<Toolbar>
				  <ToolbarGroup key={0} float="left">
				    <TextField hintText="Hint Text" ref="searchBox" onChange={this._onChange.bind(this)}  id="searchBox"/>
				  </ToolbarGroup>
				  
				</Toolbar>

			<DeviceList devices = {this.state.devices} />
			</div>
		);
	}

	_onChange() {
		this.setState(getDeviceState(React.findDOMNode(this.refs.searchBox).childNodes[1].value));
	}

});

 export default ContentPage;
