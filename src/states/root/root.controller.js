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
		
		// Bind event handlers 'this' reference to this controller
		this.onLoginModalFormSubmitted = this.onLoginModalFormSubmitted.bind(this);
		this.onLoginModalCloseButtonClicked = this.onLoginModalCloseButtonClicked.bind(this);
		
		this.initializeLoginModal();
	}

	initializeLoginModal () {
		// Create the login modal that we will use later
		return this.LoginModal.create({
			onCloseButtonClicked: this.onLoginModalCloseButtonClicked,
			onFormSubmitted: this.onLoginModalFormSubmitted
		}).then((modal) => {
			this.loginModal = modal;
		});
	}

	onLoginMenuButtonClicked () {
		// Open the login modal
		this.loginModal.show();
	}

	onLoginModalCloseButtonClicked () {
		this.loginModal.hide();
	}

	onLoginModalFormSubmitted (loginData) {
		console.log('Doin login', loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		this.$timeout(() => {
			this.loginModal.hide();
		}, 1000);
	}
}

angular
	.module('starter.states.root')
	.controller('RootCtrl', RootCtrl);

})();