(function () {
'use strict';

class RootCtrl {
	constructor ($scope, $timeout, $ionicPopup, LoginModal, AuthService) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$ionicPopup = $ionicPopup;
		this.LoginModal = LoginModal;
		this.AuthService = AuthService;

		this.initializeViewEventHandlers();
		this.initializeLoginModal();
	}

	initializeViewEventHandlers () {
		this.onViewLoaded = this.onViewLoaded.bind(this);
		this.onViewEnter = this.onViewEnter.bind(this);
		this.onViewLeave = this.onViewLeave.bind(this);
		this.onViewBeforeEnter = this.onViewBeforeEnter.bind(this);
		this.onViewBeforeLeave = this.onViewBeforeLeave.bind(this);
		this.onViewAfterEnter = this.onViewAfterEnter.bind(this);
		this.onViewAfterLeave = this.onViewAfterLeave.bind(this);
		this.onViewUnloaded = this.onViewUnloaded.bind(this);

		this.$scope.$on('$ionicView.loaded', this.onViewLoaded);
		this.$scope.$on('$ionicView.enter', this.onViewEnter);
		this.$scope.$on('$ionicView.leave', this.onViewLeave);
		this.$scope.$on('$ionicView.beforeEnter', this.onViewBeforeEnter);
		this.$scope.$on('$ionicView.beforeLeave', this.onViewBeforeLeave);
		this.$scope.$on('$ionicView.afterEnter', this.onViewAfterEnter);
		this.$scope.$on('$ionicView.afterLeave', this.onViewAfterLeave);
		this.$scope.$on('$ionicView.unloaded', this.onViewUnloaded);
	}

	onViewLoaded ($event, state) {
		console.log('RootCtrl - onViewLoaded', $event);
	}
	onViewEnter ($event, state) {
		console.log('RootCtrl - onViewEnter', $event);
	}
	onViewLeave ($event, state) {
		console.log('RootCtrl - onViewLeave', $event);
	}
	onViewBeforeEnter ($event, state) {
		console.log('RootCtrl - onViewBeforeEnter', $event);
	}
	onViewBeforeLeave ($event, state) {
		console.log('RootCtrl - onViewBeforeLeave', $event);
	}
	onViewAfterEnter ($event, state) {
		console.log('RootCtrl - onViewAfterEnter', $event);
	}
	onViewAfterLeave ($event, state) {
		console.log('RootCtrl - onViewAfterLeave', $event);
	}
	onViewUnloaded ($event, state) {
		console.log('RootCtrl - onViewUnloaded');
	}

	initializeLoginModal () {
		// Bind event handlers 'this' reference to this controller
		this.onLoginModalFormSubmitted = this.onLoginModalFormSubmitted.bind(this);
		this.onLoginModalCloseButtonClicked = this.onLoginModalCloseButtonClicked.bind(this);

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

	onLoginMenuPrefillButtonClicked () {
		// Prefill the login modal
		this.loginModal.fillForm({
			username: 'haha',
			password: 'foo'
		});
		this.loginModal.show();
	}

	onLoginMenuEmptyButtonClicked () {
		this.loginModal.clearForm();
		this.loginModal.show();
	}

	onLoginModalCloseButtonClicked () {
		this.loginModal.hide();
	}

	onLoginModalFormSubmitted (loginData) {
		console.log('Doing login', loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		this.AuthService.loginWithPassword(loginData.username, loginData.password).then(() => {
			return this.$ionicPopup.alert({
				title: 'Login Success',
				subTitle: 'Login succeeded!'
			}).then(() => {
				this.loginModal.hide();
			});
		}).catch(() => {
			return this.$ionicPopup.alert({
				title: 'Login Failed',
				subTitle: 'Wrong username or password!'
			});
		});
	}
}

angular
	.module('starter.states.root')
	.controller('RootCtrl', RootCtrl);

})();