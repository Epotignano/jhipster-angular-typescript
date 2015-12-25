/// <reference path="../../../typings/tsd.d.ts" />

module Onesnap.Teacher {
	
	export class TeachersConfig {
    		static $inject: Array<string> = ['$stateProvider'];
    constructor($stateProvider: ng.ui.IStateProvider) {
      $stateProvider
        .state('app.teachers', {
          abstract: true,
          url: '/teachers',
          'views': {
            'content': {
              templateUrl: 'scripts/app/teachers/teachers.abstract.html'
            }
          }
        })

        .state('app.teachers.list', {
          url: '/list',
          templateUrl: 'scripts/app/teachers/teachers.list.html',
          controller: 'TeachersListController',
          controllerAs: 'vm'
        })
        
        .state('app.teachers.create', {
          url: '/create',
          templateUrl: 'scripts/app/teachers/teachers.editor.html',
          controller: 'TeacherEditorController',
          controllerAs : 'vm'
        })

      //$translatePartialLoaderProvider.addPart('app/courses');

    }
  }
  
  angular.module('onesnap.teachers')
    .config(TeachersConfig);
	
}