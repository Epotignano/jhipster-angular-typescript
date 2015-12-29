/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Students {
	'use strict';

	export class StudentsListController {
		static $inject: Array<string> = ['Student', 'StreamsService'];
		public studentsList: Array<any>;
		public studentsStream;
		public studentsConf;

		constructor(public Student, private StreamsService: Onesnap.StreamsService ) {
			Student.query({page:0, size:20});
				
			this.studentsStream = this.StreamsService.getStream('api/students');
			this.studentsStream.subscribe((notification) => {
				this.studentsList = notification.data;
			})
			
			this.studentsConf = [{
				key: 'name',
				label: 'Nombre',
				sort: true
			}];
		}
		
		showStudentLabel (chosen) {
			return 'Estas seguro que quieres eliminar a ' + chosen.name;
		}
	}

	angular
		.module('onesnap.students')
		.controller('StudentsListController', StudentsListController);
}