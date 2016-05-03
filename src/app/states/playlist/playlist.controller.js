(function () {
'use strict';

class PlaylistCtrl {
	constructor ($scope, $stateParams) {
		this.$scope = $scope;
		this.$stateParams = $stateParams;

		this.initializeViewEventHandlers();
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
		console.log('PlaylistCtrl - onViewLoaded');
	}
	onViewEnter ($event, state) {
		console.log('PlaylistCtrl - onViewEnter');
	}
	onViewLeave ($event, state) {
		console.log('PlaylistCtrl - onViewLeave');
	}
	onViewBeforeEnter ($event, state) {
		console.log('PlaylistCtrl - onViewBeforeEnter');
	}
	onViewBeforeLeave ($event, state) {
		console.log('PlaylistCtrl - onViewBeforeLeave');
	}
	onViewAfterEnter ($event, state) {
		console.log('PlaylistCtrl - onViewAfterEnter');
	}
	onViewAfterLeave ($event, state) {
		console.log('PlaylistCtrl - onViewAfterLeave');
	}
	onViewUnloaded ($event, state) {
		console.log('PlaylistCtrl - onViewUnloaded');
	}
}

angular
	.module('starter.states.playlist')
	.controller('PlaylistCtrl', PlaylistCtrl);

})();