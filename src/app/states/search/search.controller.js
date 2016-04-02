(function () {
'use strict';

class SearchCtrl {
	constructor ($scope, $rootScope) {
		this.$scope = $scope;
		this.$rootScope = $rootScope;

		this.initializeStateChangeEventHandlers();
		this.initializeViewEventHandlers();
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
		console.log('SearchCtrl - onStateChangeStart');
	}
	onStateNotFound ($event, unfoundState, fromState, fromParams) {
		console.log('SearchCtrl - onStateNotFound');
	}
	onStateChangeSuccess ($event, toState, toParams, fromState, fromParams) {
		console.log('SearchCtrl - onStateChangeSuccess');
	}
	onStateChangeError ($event, toState, toParams, fromState, fromParams, error) {
		console.log('SearchCtrl - onStateChangeError');
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
		console.log('SearchCtrl - onViewLoaded');
	}
	onViewEnter ($event, state) {
		console.log('SearchCtrl - onViewEnter');
	}
	onViewLeave ($event, state) {
		console.log('SearchCtrl - onViewLeave');
	}
	onViewBeforeEnter ($event, state) {
		console.log('SearchCtrl - onViewBeforeEnter');
	}
	onViewBeforeLeave ($event, state) {
		console.log('SearchCtrl - onViewBeforeLeave');
	}
	onViewAfterEnter ($event, state) {
		console.log('SearchCtrl - onViewAfterEnter');
	}
	onViewAfterLeave ($event, state) {
		console.log('SearchCtrl - onViewAfterLeave');
	}
	onViewUnloaded ($event, state) {
		console.log('SearchCtrl - onViewUnloaded');
	}
}

angular
	.module('starter.states.search')
	.controller('SearchCtrl', SearchCtrl);

})();