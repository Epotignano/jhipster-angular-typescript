/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />

module Onesnap.Auth {
	'use strict';

	interface ILoginController {
		signIn(credentials):void;
	}


	export class LoginController implements ILoginController {
		static $inject: Array<string> = ['Auth', '$state'];
		public credentials : LoginCredentials;
		public err : any;
		
		constructor(private Auth, private $state : ng.ui.IStateService) {}
		
		signIn() {
			this.Auth.login({
				username: this.credentials.username,
				password: this.credentials.password,
				rememberMe: this.credentials.rememberMe
			})
			.then((result) => {
				this.$state.go('app.dashboard');
			})
			
			.catch((err)=> {
				this.err = err.data;
			})
		}
				
	}

	angular
		.module('onesnap.auth')
		.controller('OnesnapLoginController', LoginController);
}