'use strict';

(function () {
	'use strict';

	angular.module('starter.states.playlists').config(config);

	function config($stateProvider) {
		$stateProvider.state('root.playlists', {
			url: 'playlists',
			views: {
				'menuContent': {
					templateUrl: 'states/playlists/playlists.html',
					controller: 'PlaylistsCtrl'
				}
			}
		});
	}
})();