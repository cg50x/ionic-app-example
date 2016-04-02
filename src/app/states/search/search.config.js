(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.search', {
			url: 'search',
			templateUrl: 'app/states/search/search.html',
			controller: 'SearchCtrl as SearchCtrl'
		});
}

angular
	.module('starter.states.search')
	.config(config);

})();