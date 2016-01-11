/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Courses {
	'use strict';

	export class CourseEditorController {
		static $inject: Array<string> = ['Course', 'StreamsService', '$stateParams'];

		public formFields;
		public course
		public courseStream;

		constructor(private Course, StreamsService: Onesnap.StreamsService, $stateParams: ng.ui.IStateParamsService) {
			if ($stateParams['id']) {
				Course.get({ id: $stateParams['id'] });
				this.courseStream = StreamsService.getStream('api/teachers/' + $stateParams['id']);
				this.courseStream.subscribe((notification) => {
					this.course = notification.data;
				})
			}

			this.formFields = [
				{
					key: 'name',
					type: 'input',
					templateOptions: {
						type: 'text ',
						label: 'Nombre'
					}
				}];
		}

		save() {
			this.Course.save(this.course);
		}

	}

	angular
		.module('onesnap.courses')
		.controller('CourseEditorController', CourseEditorController);
}