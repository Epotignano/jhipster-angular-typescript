/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />
module Onesnap.Auth {

	interface IRegister {
		signUp(userCredentials: UserCredentials)
	}

	export class RegisterController implements IRegister {
		constructor(private Auth) { }
		signUp(userCredentials: UserCredentials) {
			this.Auth.createAccount(userCredentials)
				.then((result) => {
					alert('OK!');
				})
				.catch((err) => {
					console.log(err);
				})
		}

	}
	
	angular
		.module('onesnap.auth')
		.controller('OnesnapRegisterController', RegisterController);
}