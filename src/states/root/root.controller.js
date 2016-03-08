(function () {
'use strict';

class RootCtrl {
	constructor ($scope, $timeout, $rootScope, LoginModal) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$rootScope = $rootScope;
		this.LoginModal = LoginModal;

		this.initializeStateChangeEventHandlers();
		this.initializeViewEventHandlers();
		this.initializeLoginModal();
	}

	initializeStateChangeEventHandlers () {
		this.onStateChangeStart = this.onStateChangeStart.bind(this);
		this.onStateNotFound = this.onStateNotFound.bind(this);
		this.onStateChangeSuccess = this.onStateChangeSuccess.bind(this);
		this.onStateChangeError = this.onStateChangeError.bind(this);

		this.$rootScope.$on('$stateChangeStart', this.onStateChangeStart);
		this.$rootScope.$on('$stateNotFound', this.onStateNotFound);
		this.$rootScope.$on('$stateChangeSuccess', this.onStateChangeSuccess);
		this.$rootScope.$on('$stateChangeError', this.onStateChangeError);
	}

	onStateChangeStart ($event, toState, toParams, fromState, fromParams, options) {
		console.log('RootCtrl - onStateChangeStart');
	}
	onStateNotFound ($event, unfoundState, fromState, fromParams) {
		console.log('RootCtrl - onStateNotFound');
	}
	onStateChangeSuccess ($event, toState, toParams, fromState, fromParams) {
		console.log('RootCtrl - onStateChangeSuccess');
	}
	onStateChangeError ($event, toState, toParams, fromState, fromParams, error) {
		console.log('RootCtrl - onStateChangeError');
	}

	initializeViewEventHandlers () {
		this.onViewLoaded = this.onViewLoaded.bind(this);
		this.onViewEnter = this.onViewEnter.bind(this);
		this.onViewLeave = this.onViewLeave.bind(this);
		this.onViewBeforeEnter = this.onViewBeforeEnter.bind(this);
		this.onViewBeforeLeave = this.onViewBeforeLeave.bind(this);
		this.onViewAfterEnter = this.onViewAfterEnter.bind(this);
		this.onViewAfterLeave = this.onViewAfterLeave.bind(this);

		this.$scope.$on('$ionicView.loaded', this.onViewLoaded);
		this.$scope.$on('$ionicView.enter', this.onViewEnter);
		this.$scope.$on('$ionicView.leave', this.onViewLeave);
		this.$scope.$on('$ionicView.beforeEnter', this.onViewBeforeEnter);
		this.$scope.$on('$ionicView.beforeLeave', this.onViewBeforeLeave);
		this.$scope.$on('$ionicView.afterEnter', this.onViewAfterEnter);
		this.$scope.$on('$ionicView.afterLeave', this.onViewAfterLeave);
	}

	onViewLoaded ($event) {
		console.log('RootCtrl - onViewLoaded');
	}
	onViewEnter ($event) {
		console.log('RootCtrl - onViewEnter');
	}
	onViewLeave ($event) {
		console.log('RootCtrl - onViewLeave');
	}
	onViewBeforeEnter ($event) {
		console.log('RootCtrl - onViewBeforeEnter');
	}
	onViewBeforeLeave ($event) {
		console.log('RootCtrl - onViewBeforeLeave');
	}
	onViewAfterEnter ($event) {
		console.log('RootCtrl - onViewAfterEnter');
	}
	onViewAfterLeave ($event) {
		console.log('RootCtrl - onViewAfterLeave');
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