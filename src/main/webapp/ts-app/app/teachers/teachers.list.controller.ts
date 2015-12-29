/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Teachers {
	'use strict';

	export class TeachersListController {
		static $inject: Array<string> = ['Teacher', 'StreamsService'];
		public teachersList: Array<any>;
		public teachersThread;
		public teachersConf;

		constructor(public Teacher, private StreamsService: Onesnap.StreamsService ) {
			Teacher.query({page:0, size:20});
				
			this.teachersThread = this.StreamsService.getStream('api/teachers');
			this.teachersThread.subscribe((notification) => {
				this.teachersList = notification.data;
			})
			
			this.teachersConf = [{
				key: 'name',
				label: 'Nombre',
				sort: true
			}];
		}
		
		showTeacherLabel (chosenTeacher) {
			return 'Estas seguro que quieres eliminar a ' + chosenTeacher.name;
		}
	}

	angular
		.module('onesnap.teachers')
		.controller('TeachersListController', TeachersListController);
}