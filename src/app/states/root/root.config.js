(function () {
'use strict';

function config ($stateProvider) {
	$stateProvider
		.state('root', {
			url: '/',
			abstract: true,
			templateUrl: 'app/states/root/menu.html',
			controller: 'RootCtrl as RootCtrl'
		});
}

angular
	.module('starter.states.root')
	.config(config);

})();