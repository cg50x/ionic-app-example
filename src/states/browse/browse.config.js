(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root.browse', {
			url: 'browse',
			templateUrl: 'states/browse/browse.html'
		});
}

angular
	.module('starter.states.browse')
	.config(config);

})();