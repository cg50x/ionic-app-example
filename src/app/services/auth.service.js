(function () {
'use strict';

class AuthService {
	constructor ($timeout, $q) {
		this.$timeout = $timeout;
		this.$q = $q;
	}
	loginWithPassword(username, password) {
		return this.$timeout(() => {
			if (username === 'a@example.com' && password === 'a') {
				return {
					token: '123'
				};
			} else {
				return this.$q.reject();
			}
		}, 1000);
	}
}

angular
	.module('starter.services')
	.service('AuthService', AuthService);

})();