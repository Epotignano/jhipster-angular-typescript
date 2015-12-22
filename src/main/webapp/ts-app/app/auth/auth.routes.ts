/**
 * Created by mmasuyama on 10/21/2015.
 */

/// <reference path="../../../typings/tsd.d.ts" />

module Onesnap.Auth {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $translatePartialLoaderProvider) {

      $stateProvider.state('access', {
        abstract: true,
        url: '/access',
        views: {
          'main@': {
            templateUrl: 'scripts/app/core/layouts/basic.html'
          }
        }
      });


      $stateProvider.state('access.pages_auth_login', {
        url: '/login',
        views: {
          'content': {
            templateUrl: 'scripts/app/auth/auth.login.html',
            controller: 'OnesnapLoginController',
            controllerAs: 'vm'
          }
        }
      });

      $stateProvider.state('access.pages_auth_register', {
        url: '/register',
        views: {
          'content': {
            templateUrl: 'scripts/app/auth/auth.register.html',
            controller: 'OnesnapRegisterController',
            controllerAs: 'vm'
          }
        }
      });

      //$translatePartialLoaderProvider.addPart('app/auth');

    }

  }

  angular.module('onesnap.auth')
    .config(RouterConfig)
}
