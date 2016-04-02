(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.browse', {
			url: 'browse',
			templateUrl: 'app/states/browse/browse.html',
			controller: 'BrowseCtrl as BrowseCtrl'
		});
}

angular
	.module('starter.states.browse')
	.config(config);

})();