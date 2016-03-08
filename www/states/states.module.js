'use strict';

(function () {
	'use strict';

	var hello = function hello(haha) {
		return haha.hello;
	};

	angular.module('starter.states', ['starter.states.browse', 'starter.states.playlist', 'starter.states.playlists', 'starter.states.root', 'starter.states.search']);
})();