/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Teachers {
	'use strict';

	export class TeacherEditorController {
		static $inject: Array<string> = ['Teacher', 'StreamsService', '$stateParams'];
		public formFields;
		public teacher
		public teacherStream;
		constructor(private Teacher, StreamsService: Onesnap.StreamsService, $stateParams: ng.ui.IStateParamsService) {
			if ($stateParams['id']) {
				Teacher.get({ id: $stateParams['id'] })
				this.teacherStream = StreamsService.getStream('api/teachers/' + $stateParams['id']);
				this.teacherStream.subscribe((notification) => {
					this.teacher = notification.data;
				})
			};

			this.formFields = [{
				key: 'id',
				type: 'input',
				templateOptions: {
					type: 'text',
					label: 'ID'
				}
			},
				{
					key: 'name',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'Nombre'
					}
				}];
		}

		save() {
			if (this.teacher.id) {
				this.Teacher.update(this.teacher);
			} else {
				this.Teacher.save({ name: this.teacher.name });
			}

		}

	}

	angular
		.module('onesnap.teachers')
		.controller('TeacherEditorController', TeacherEditorController);
}