
'use strict';

import AppActions from '../actions/AppActions';

export default class WebAPI {

	constructor() {
		
	}

	init() {

		var ref = new Firebase("https://sweltering-torch-8852.firebaseio.com");

		// var authData = ref.getAuth(); 

		// if( !authData ) {
		// 	ref.authWithOAuthPopup("google", function(error, authData) {
		// 	if (error) {
		// 		console.log("Login Failed!", error);
		// 	} else {
		// 		ref.on('value', function(snap) {debugger;
		// 			console.log(snap.val());
		// 			AppActions.pushServerData(snap.val());
		// 		});
		// 		console.log("Authenticated successfully with payload:", authData);
		// 	}
		// 	}, {
		// 	 remember: "default"
		// 	});
		// }
		// else {
			ref.on('value', function(snap) {debugger;
				console.log(snap.val());
				AppActions.pushServerData(snap.val());
			});
		//}

		

	}
}