(function () {
'use strict';

class LoginModal {
	constructor ($ionicModal, $rootScope) {
		this.$ionicModal = $ionicModal;
		this.$rootScope = $rootScope;
	}

	create (options) {
		return this.$ionicModal.fromTemplateUrl('modals/login/login.html').then((modal) => {
			this.initializeScope(modal.scope, options);
			return modal;
		});
	}

	initializeScope (scope, options) {
		options = options || {};

		// Initialize scope variables
		scope.loginData = {
			username: '',
			password: ''
		};

		// Initialize click handlers
		scope.onCloseButtonClicked = options.onCloseButtonClicked;

		scope.onFormSubmitted = function () {
			options.onFormSubmitted({
				username: scope.loginData.username,
				password: scope.loginData.password
			});
		};
	}
}

angular
	.module('starter.modals')
	.service('LoginModal', LoginModal);

})();