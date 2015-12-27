/// <reference path="../../typings/tsd.d.ts" />
module Onesnap {

	export class RunConfiguration {
		static $inject: Array<string> = ['$rootScope', '$state', 'Principal', 'Auth'];

		constructor(
			private $rootScope: ng.IRootScopeService,
			private $state: ng.ui.IStateService,
			private Principal, private Auth
		) {

			this.$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
				this.$rootScope.toState = toState;
				this.$rootScope.toStateParams = toStateParams;
				/*if (toState.name.indexOf('access') === -1) {
					if (Principal.isIdentityResolved()) {
						Auth.authorize();
					} else {
						this.$state.go('access.pages_auth_login');
					}
				};*/
			});

			$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
				var titleKey = 'global.title';

				// Remember previous state unless we've been redirected to login or we've just
				// reset the state memory after logout. If we're redirected to login, our
				// previousState is already set in the authExpiredInterceptor. If we're going
				// to login directly, we don't want to be sent to some previous state anyway
				if (toState.name != 'login' && this.$rootScope.previousStateName) {
					this.$rootScope.previousStateName = fromState.name;
					this.$rootScope.previousStateParams = fromParams;
				}

				// Set the page title key to the one configured in state or use default one
				/*if (toState.data.pageTitle) {
					titleKey = toState.data.pageTitle;
				}*/
			});
		}
	}

	angular.module('springTestApp')
		.run(RunConfiguration);
}	