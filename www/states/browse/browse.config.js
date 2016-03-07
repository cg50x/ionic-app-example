(function () {
'use strict';

angular
	.module('starter.states.browse')
	.config(config);

function config ($stateProvider) {
	$stateProvider
		.state('root.browse', {
			url: '/browse',
			views: {
				'menuContent': {
					templateUrl: 'states/browse/browse.html'
				}
			}
		});
}

})();