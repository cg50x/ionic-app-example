(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.playlists', {
			url: 'playlists',
			views: {
				'menuContent': {
					templateUrl: 'states/playlists/playlists.html',
					controller: 'PlaylistsCtrl'
				}
			}
		});
}

angular
	.module('starter.states.playlists')
	.config(config);

})();