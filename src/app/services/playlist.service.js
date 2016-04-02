(function () {
'use strict';

class PlaylistService {
	constructor ($timeout) {
		this.$timeout = $timeout;
	}
	getPlaylists() {
		return this.$timeout(function () {
			return [
			{ title: 'Reggae', id: 1 },
			{ title: 'Chill', id: 2 },
			{ title: 'Dubstep', id: 3 },
			{ title: 'Indie', id: 4 },
			{ title: 'Rap', id: 5 },
			{ title: 'Cowbell', id: 6 }
		];}, 1000);
	}
}

angular
	.module('starter.services')
	.service('PlaylistService', PlaylistService);

})();