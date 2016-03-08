(function () {
'use strict';

function PlaylistsCtrl ($scope) {
	$scope.playlists = [
		{ title: 'Reggae', id: 1 },
		{ title: 'Chill', id: 2 },
		{ title: 'Dubstep', id: 3 },
		{ title: 'Indie', id: 4 },
		{ title: 'Rap', id: 5 },
		{ title: 'Cowbell', id: 6 }
	];
}

angular
	.module('starter.states.playlists')
	.controller('PlaylistsCtrl', PlaylistsCtrl);

})();