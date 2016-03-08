(function () {
'use strict';

class LoginModal {
	constructor ($ionicModal) {
		this.$ionicModal = $ionicModal;
	}

	create (options) {
		return this.$ionicModal.fromTemplateUrl('../modals/login/login.html', options);
	}
}

angular
	.module('starter.modals')
	.service('LoginModal', LoginModal);

})();