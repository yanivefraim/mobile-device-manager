'use strict';

import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

var _deviceList = [];

function cretae(data){
	_deviceList = data;
}

var DeviceStore = assign({}, EventEmitter.prototype, {
	getDevices() {
		return _deviceList;
		//return [{"deviceID":"123", "deviceName":"Nexus4"},{"deviceID":"124", "deviceName":"Nexus5"}];
	},

	/**
	* Emits change event to all registered event listeners.
	*
	* @returns {Boolean} Indication if we've emitted an event.
	*/
	emitChange() {
		return this.emit(CHANGE_EVENT);
	},

	/**
	* Register a new change event listener.
	*
	* @param {function} callback Callback function.
	*/
	onChange(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	* Remove change event listener.
	*
	* @param {function} callback Callback function.
	*/
	off(callback) {
		this.off(CHANGE_EVENT, callback);
	}

});

DeviceStore.dispatcherToken = Dispatcher.register((payload) => {
	var action = payload.action;

	switch (action.actionType) {
		case ActionTypes.PUSH_DATA:
			create(action.val);
			DeviceStore.emitChange();
			break;

		default:

	}
});





export default DeviceStore;