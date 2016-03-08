(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.playlist', {
			url: 'playlists/:playlistId',
			views: {
				'menuContent': {
					templateUrl: 'states/playlist/playlist.html',
					controller: 'PlaylistCtrl'
				}
			}
		});
}

angular
	.module('starter.states.playlist')
	.config(config);

})();