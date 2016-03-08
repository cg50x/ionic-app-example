(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.playlist', {
			url: 'playlists/:playlistId',
			templateUrl: 'states/playlist/playlist.html',
			controller: 'PlaylistCtrl'
		});
}

angular
	.module('starter.states.playlist')
	.config(config);

})();