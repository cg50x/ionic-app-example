(function () {
'use strict';

angular
	.module('starter.states.search')
	.config(config);

function config ($stateProvider) {
	$stateProvider
		.state('root.search', {
			url: 'search',
			views: {
				'menuContent': {
					templateUrl: 'states/search/search.html'
				}
			}
		});
}

})();