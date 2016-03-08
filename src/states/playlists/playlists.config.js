(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.playlists', {
			url: 'playlists',
			templateUrl: 'states/playlists/playlists.html',
			controller: 'PlaylistsCtrl'
		});
}

angular
	.module('starter.states.playlists')
	.config(config);

})();