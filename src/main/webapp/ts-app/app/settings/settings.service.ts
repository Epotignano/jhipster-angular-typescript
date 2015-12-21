/// <reference path="../../../typings/tsd.d.ts" />
module Onesnap.Settings {

	export class SettingsService {
		private mockMenu = [{
			label: 'COURSES.SECTION_TITLE',
			icon: 'icon-tile-four',
			items: [
				{
					label: 'COMMONS.LIST',
					sref: 'app.courses.list'
				},

				{
					label: 'COMMONS.NEW',
					sref: 'app.courses.create'
				}
			]
		}, {
				label: 'TEACHERS.SECTION_TITLE',
				icon: 'icon-tile-four',
				items: [
					{
						label: 'COMMONS.LIST',
						sref: 'app.teachers.list'
					},

					{
						label: 'COMMONS.NEW',
						sref: 'app.teachers.create'
					}
				]
			}, {
				label: 'STUDENTS.SECTION_TITLE',
				icon: 'icon-tile-four',
				items: [
					{
						label: 'COMMONS.LIST',
						sref: 'app.students.list'
					},

					{
						label: 'COMMONS.NEW',
						sref: 'app.students.create'
					}
				]
			}, ]
		constructor(private $http: ng.IHttpService) {

		}
		
		//TODO Get sidemenu options from an API endpoint;
		getSideMenu() {
			return this.mockMenu;
		}

	}
	
	
	angular.module('onesnap.settings')
		.service('SettingsService', SettingsService)
}