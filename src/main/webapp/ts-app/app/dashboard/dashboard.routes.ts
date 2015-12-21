/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />

module Onesnap.Dashboard {
  'use strict';

  export class DashboardRouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider) {
      $stateProvider
        .state('app.dashboard', {
          url: '/dashboard',
          views : {
            'content': {
              templateUrl: 'scripts/app/dashboard/dashboard.html'
            }
          }
        });

    }

  }
  
  angular.module('onesnap.dashboard')
   .config(DashboardRouterConfig);
}

