/// <reference path="../../typings/tsd.d.ts" />



module Onesnap {
	export class httpConfig {
		static $inject: Array<string> = ['$httpProvider'];

		constructor(private $httpProvider: ng.IHttpProvider) {

			this.$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
			this.$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

			this.$httpProvider.interceptors.push('errorHandlerInterceptor');
			this.$httpProvider.interceptors.push('authExpiredInterceptor');
			this.$httpProvider.interceptors.push('authInterceptor');
			this.$httpProvider.interceptors.push('notificationInterceptor');


		}

	}
	
	angular.module('springTestApp')
		.config(httpConfig);
}