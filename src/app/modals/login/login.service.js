(function () {
'use strict';

class LoginModal {
	constructor ($ionicModal, $rootScope) {
		this.$ionicModal = $ionicModal;
		this.$rootScope = $rootScope;
	}

	create (options) {
		return this.$ionicModal.fromTemplateUrl('app/modals/login/login.html').then((modal) => {
			this.extendModal(modal, options);
			return modal;
		});
	}

	extendModal (modal, options) {
		this.initializeScope(modal.scope, options);
		this.initializeMethods(modal);
	}

	initializeMethods (modal) {
		modal.clearForm = function () {
			this.fillForm({});
		};
		modal.fillForm = function (params) {
			this.scope.loginData.username = params.username || '';
			this.scope.loginData.password = params.password || '';
		};
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