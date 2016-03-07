(function () {
'use strict';

angular
	.module('starter.states.root')
	.config(config);

function config ($stateProvider) {
	$stateProvider
		.state('root', {
			url: '/root',
			abstract: true,
			templateUrl: 'states/root/menu.html',
			controller: 'RootCtrl'
		});
}

})();