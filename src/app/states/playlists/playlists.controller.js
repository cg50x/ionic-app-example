(function () {
'use strict';

class PlaylistsCtrl {
	constructor ($scope, $rootScope, $state, $q, PlaylistService) {
		this.$scope = $scope;
		this.$rootScope = $rootScope;
		this.$state = $state;
		this.$q = $q;
		this.PlaylistService = PlaylistService;

		this.initializeStateChangeEventHandlers();
		this.initializeViewEventHandlers();

		this.initializeClickHandlers();
	}

	refreshPlaylistsVm () {
		return this.getPlaylistsData().then((playlists) => {
			this.renderPlaylistsVm(playlists);
		});
	}

	getPlaylistsData () {
		return this.PlaylistService.getPlaylists();
	}

	renderPlaylistsVm (playlists) {
		this.vm = this.vm || {};
		this.vm.playlists = playlists;
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
		console.log('PlaylistsCtrl - onStateChangeStart');
	}
	onStateNotFound ($event, unfoundState, fromState, fromParams) {
		console.log('PlaylistsCtrl - onStateNotFound');
	}
	onStateChangeSuccess ($event, toState, toParams, fromState, fromParams) {
		console.log('PlaylistsCtrl - onStateChangeSuccess');
	}
	onStateChangeError ($event, toState, toParams, fromState, fromParams, error) {
		console.log('PlaylistsCtrl - onStateChangeError');
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
		console.log('PlaylistsCtrl - onViewLoaded');
	}
	onViewEnter ($event, state) {
		console.log('PlaylistsCtrl - onViewEnter');
		this.refreshPlaylistsVm();
	}
	onViewLeave ($event, state) {
		console.log('PlaylistsCtrl - onViewLeave');
	}
	onViewBeforeEnter ($event, state) {
		console.log('PlaylistsCtrl - onViewBeforeEnter');
	}
	onViewBeforeLeave ($event, state) {
		console.log('PlaylistsCtrl - onViewBeforeLeave');
	}
	onViewAfterEnter ($event, state) {
		console.log('PlaylistsCtrl - onViewAfterEnter');
	}
	onViewAfterLeave ($event, state) {
		console.log('PlaylistsCtrl - onViewAfterLeave');
	}
	onViewUnloaded ($event, state) {
		console.log('PlaylistsCtrl - onViewUnloaded');
	}

	initializeClickHandlers () {
		this.onPlaylistItemClicked = this.onPlaylistItemClicked.bind(this);
	}
	onPlaylistItemClicked (playlistId) {
		this.$state.go('root.playlist', {
			playlistId: playlistId
		});
	}
}

angular
	.module('starter.states.playlists')
	.controller('PlaylistsCtrl', PlaylistsCtrl);

})();