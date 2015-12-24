/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Teachers {
	'use strict';

	export class TeacherEditorController {
		static $inject: Array<string> = ['Teacher'];
		public formFields;
		public teacher
		constructor(private Teacher) {
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
						label: 'Name'
					}
				}];
		}

		save() {
			this.Teacher.save({id: this.teacher.id || null, name: this.teacher.name});
		}

	}

	angular
		.module('onesnap.teachers')
		.controller('TeacherEditorController', TeacherEditorController);
}