/// <reference path="../../typings/tsd.d.ts" />



module Onesnap {
	export class httpConfig {

		constructor(private $httpProvider : ng.IHttpProvider) {
			this.$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
			this.$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
		}
	}



}