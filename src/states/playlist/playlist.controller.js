(function () {
'use strict';

class PlaylistCtrl {
	constructor ($scope, $stateParams) {
		this.$scope = $scope;
		this.$stateParams = $stateParams;
	}
}

angular
	.module('starter.states.playlist')
	.controller('PlaylistCtrl', PlaylistCtrl);

})();