/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Teachers {
	'use strict';

	export class TeachersListController {
		static $inject: Array<string> = ['Teacher'];
		public teachers : Array<any>;
		
		constructor(private Teacher) {
			
		}


	}

	angular
		.module('onesnap.teachers')
		.controller('TeachersListController', TeachersListController);
}