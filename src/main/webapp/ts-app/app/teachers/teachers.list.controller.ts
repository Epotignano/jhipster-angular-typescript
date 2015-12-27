/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />

module Onesnap.Teachers {
	'use strict';

	export class TeachersListController {
		static $inject: Array<string> = [
			'Teacher', 'StreamsService',
			'DTOptionsBuilder', 'DTColumnBuilder'];
		public teachersList: Array<any>;
		public dtOptions;
		public dtColumns;

		constructor(private Teacher, private StreamsService: Onesnap.StreamsService,
			private DTOptionsBuilder, private DTColumnBuilder) {
			this.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
				return Teacher.query({ page: 0, size: 20 }).$promise;
			}).withPaginationType('full_numbers');

			this.dtColumns = [
				DTColumnBuilder.newColumn('id').withTitle('ID'),
				DTColumnBuilder.newColumn('name').withTitle('Name')
			];

		}


	}

	angular
		.module('onesnap.teachers')
		.controller('TeachersListController', TeachersListController);
}