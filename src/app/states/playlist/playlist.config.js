(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.playlist', {
			url: 'playlists/:playlistId',
			templateUrl: 'app/states/playlist/playlist.html',
			controller: 'PlaylistCtrl as PlaylistCtrl'
		});
}

angular
	.module('starter.states.playlist')
	.config(config);

})();