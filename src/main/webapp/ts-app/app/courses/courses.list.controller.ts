/// <reference path="../../../typings/tsd.d.ts" />
module Onesnap.Courses {
	'use strict';

	export class CoursesListController {
		static $inject: Array<string> = ['Course'];
		constructor(private Course) {
			this.Course.query({page: 0, size: 20}, function(result, headers) {
            });
			
		}

	}

	angular
		.module('onesnap.courses')
		.controller('CoursesListController', CoursesListController);
}