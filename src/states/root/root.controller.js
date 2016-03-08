(function () {
'use strict';

class RootCtrl {
	constructor ($scope, $timeout, LoginModal) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.LoginModal = LoginModal;
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//$scope.$on('$ionicView.enter', function(e) {
		//});

		
		// Form data for the login modal
		this.$scope.loginData = {};

		// Create the login modal that we will use later
		LoginModal.create({
			scope: this.$scope
		}).then((modal) => {
			this.$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		this.$scope.closeLogin = () => {
			this.$scope.modal.hide();
			console.log('modal', this.$scope.modal);
		};

		// Open the login modal
		this.$scope.login = () => {
			this.$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		this.$scope.doLogin = () => {
			console.log('Doing login', this.$scope.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout(() => {
				this.$scope.closeLogin();
			}, 1000);
		};
	}
}

angular
	.module('starter.states.root')
	.controller('RootCtrl', RootCtrl);

})();