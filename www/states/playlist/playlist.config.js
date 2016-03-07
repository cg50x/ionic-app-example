(function () {
'use strict';

angular
	.module('starter.states.playlist')
	.config(config);

function config ($stateProvider) {
	$stateProvider
		.state('root.playlist', {
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					templateUrl: 'states/playlist/playlist.html',
					controller: 'PlaylistCtrl'
				}
			}
		});
}

})();