(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.playlists', {
			url: 'playlists',
			templateUrl: 'app/states/playlists/playlists.html',
			controller: 'PlaylistsCtrl as PlaylistsCtrl'
		});
}

angular
	.module('starter.states.playlists')
	.config(config);

})();