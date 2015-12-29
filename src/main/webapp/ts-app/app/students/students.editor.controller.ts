/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Students {
	'use strict';

	export class StudentEditorController {
		static $inject: Array<string> = ['Student', 'StreamsService', '$stateParams'];
		public formFields;
		public student
		public studentsStream;
		constructor(private Student, StreamsService: Onesnap.StreamsService, $stateParams: ng.ui.IStateParamsService) {
			if ($stateParams['id']) {
				Student.get({ id: $stateParams['id'] })
				this.studentsStream = StreamsService.getStream('api/students/' + $stateParams['id']);
				this.studentsStream.subscribe((notification) => {
					this.student = notification.data;
				})
			};

			this.formFields = [
				{
					key: 'firstname',
					type: 'input',
					templateOptions: {
						type: 'text ',
						label: 'Nombre'
					}
				},{
					key: 'lastName',
					type: 'input',
					templateOptions: {
						type: 'text ',
						label: 'Apellido'
					}
				}
				];
		}

		save() {
			if (this.student.id) {
				this.Student.update(this.student);
			} else {
				this.Student.save({ name: this.student.name });
			}

		}

	}

	angular
		.module('onesnap.students')
		.controller('StudentEditorController', StudentEditorController);
}