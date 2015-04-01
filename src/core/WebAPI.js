
'use strict';

import AppActions from '../actions/AppActions';

export default class WebAPI {
	init() {

		var ref = new Firebase("https://sweltering-torch-8852.firebaseio.com");

		ref.on('value', function(snap) {
			console.log(snap.val());
			AppActions.pushServerData(snap.val());
		});

	}
}