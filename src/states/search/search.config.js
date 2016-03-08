(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.search', {
			url: 'search',
			templateUrl: 'states/search/search.html'
		});
}

angular
	.module('starter.states.search')
	.config(config);

})();