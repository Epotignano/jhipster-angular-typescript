/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Courses {
	'use strict';

	export class CourseEditorController {
		static $inject: Array<string> = ['Course'];
		public course
		constructor(private Course) {}
		
		save() {
			this.Course.save(this.course);
		}
		
	}

	angular
		.module('onesnap.courses')
		.controller('CourseEditorController', CourseEditorController);
}