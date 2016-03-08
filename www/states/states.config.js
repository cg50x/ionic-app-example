'use strict';

(function () {
	'use strict';

	angular.module('starter.states').config(config);

	function config($urlRouterProvider) {
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/playlists');
	}
})();