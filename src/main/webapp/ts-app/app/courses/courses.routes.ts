/// <reference path="../../../typings/tsd.d.ts" />

module Onesnap.Courses {
	
	export class CoursesConfig {
    		static $inject: Array<string> = ['$stateProvider'];
    constructor($stateProvider: ng.ui.IStateProvider) {
      $stateProvider
        .state('app.courses', {
          abstract: true,
          url: '/courses',
          'views': {
            'content': {
              templateUrl: 'scripts/app/courses/courses.abstract.html'
            }
          }
        })

        .state('app.courses.list', {
          url: '/list',
          templateUrl: 'scripts/app/courses/courses.list.html',
          controller: 'CoursesListController',
          controllerAs: 'vm'
        })
        
        .state('app.courses.create', {
          url: '/create',
          templateUrl: 'scripts/app/courses/courses.editor.html',
          controller: 'CoursesEditorController',
          controllerAs : 'vm'
        })

      //$translatePartialLoaderProvider.addPart('app/courses');

    }
  }
  
  angular.module('onesnap.courses')
    .config(CoursesConfig);
	
}