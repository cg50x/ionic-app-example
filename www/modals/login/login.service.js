'use strict';

(function () {
	'use strict';

	angular.module('starter.modals').service('LoginModal', LoginModal);

	function LoginModal($ionicModal) {
		this.$ionicModal = $ionicModal;
	}

	LoginModal.prototype.create = function create(options) {
		return this.$ionicModal.fromTemplateUrl('../modals/login/login.html', options);
	};
})();