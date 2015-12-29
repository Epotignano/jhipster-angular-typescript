/// <reference path="../../../typings/tsd.d.ts" />

module Onesnap.Students {
	
	export class StudentsConfig {
    		static $inject: Array<string> = ['$stateProvider'];
    constructor($stateProvider: ng.ui.IStateProvider) {
      $stateProvider
        .state('app.students', {
          abstract: true,
          url: '/students',
          'views': {
            'content': {
              templateUrl: 'scripts/app/students/students.abstract.html'
            }
          }
        })

        .state('app.students.list', {
          url: '/list',
          templateUrl: 'scripts/app/students/students.list.html',
          controller: 'StudentsListController',
          controllerAs: 'vm'
        })
        
        .state('app.students.create', {
          url: '/create',
          templateUrl: 'scripts/app/students/students.editor.html',
          controller: 'StudentEditorController',
          controllerAs : 'vm'
        })
        
        .state('app.students.edit', {
          url: '/edit/:id',
          templateUrl: 'scripts/app/students/students.editor.html',
          controller: 'StudentEditorController',
          controllerAs : 'vm'
        })

      //$translatePartialLoaderProvider.addPart('app/courses');

    }
  }
  
  angular.module('onesnap.students')
    .config(StudentsConfig);
	
}