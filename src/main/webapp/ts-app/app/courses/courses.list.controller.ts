/// <reference path="../../../typings/tsd.d.ts" />
module Onesnap.Courses {
	'use strict';

	export class CoursesListController {
		static $inject: Array<string> = ['Course', 'StreamsService'];

		public coursesList: Array<any>;
		public coursesThread;
		public courseConf;

		constructor(public Course, private StreamsService: Onesnap.StreamsService ) {
			Course.query({page:0, size:20});

			this.coursesThread = this.StreamsService.getStream('api/courses');
			this.coursesThread.subscribe((notification) => {
				this.coursesList = notification.data;
			})

			this.courseConf = [{
				key: 'name',
				label: 'Nombre',
				sort: true
			}];
		}

	}

	angular
		.module('onesnap.courses')
		.controller('CoursesListController', CoursesListController);
}