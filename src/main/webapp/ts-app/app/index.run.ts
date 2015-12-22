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
				if (Principal.isIdentityResolved()) {
					Auth.authorize();
				}
			});
		}
	}
	
	angular.module('springTestApp')
		.run(RunConfiguration);
}	