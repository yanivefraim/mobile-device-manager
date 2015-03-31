'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

var DeviceStore = assign({}, EventEmitter.prototype, {
	getDevices() {
		return [{"deviceID":"123", "deviceName":"Nexus4"},{"deviceID":"124", "deviceName":"Nexus5"}];
	}
});

export default DeviceStore;