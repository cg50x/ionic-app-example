(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root', {
			url: '/',
			abstract: true,
			templateUrl: 'states/root/menu.html',
			controller: 'RootCtrl'
		});
}

angular
	.module('starter.states.root')
	.config(config);

})();