(function () {
'use strict';

function LoginModal ($ionicModal) {
	this.$ionicModal = $ionicModal;
}

LoginModal.prototype.create = function create (options) {
	return this.$ionicModal.fromTemplateUrl('../modals/login/login.html', options);
}

angular
	.module('starter.modals')
	.service('LoginModal', LoginModal);

})();