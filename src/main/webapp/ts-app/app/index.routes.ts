/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
        .state('app', {
          url: '/app',
          views   : {
            'main@'         : {
              templateUrl: 'scripts/core/layouts/default.html'
            },
            'toolbar@app': {
              templateUrl: 'scripts/toolbar/toolbar.html',
              controller : 'ToolbarController as vm'
            },
            'navigation@app': {
              templateUrl: 'scripts/sidenav/navigation/navigation.html',
              controller : 'NavigationController as vm'
            }
          }
        });


      $urlRouterProvider.otherwise('/app');

      // commons translations

    }

  }
}
