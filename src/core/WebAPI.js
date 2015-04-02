
'use strict';

import AppActions from '../actions/AppActions';

export default class WebAPI {

	constructor() {
		
	}

	init() {

		var ref = new Firebase("https://sweltering-torch-8852.firebaseio.com");

		ref.on('value', function(snap) {debugger;
			console.log(snap.val());
			AppActions.pushServerData(snap.val());
		});

	}
}