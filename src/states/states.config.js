(function () {
'use strict';

function config ($urlRouterProvider) {
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/playlists');
}

angular
	.module('starter.states')
	.config(config);

})();