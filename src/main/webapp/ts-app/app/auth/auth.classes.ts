module Onesnap.Auth {

	export class UserCredentials {
		username: string;
		password: string;
		email: string;
	}

	export class LoginCredentials extends UserCredentials {
		rememberMe: boolean;
	}
}