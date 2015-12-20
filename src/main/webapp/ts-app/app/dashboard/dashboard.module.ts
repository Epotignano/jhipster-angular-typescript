/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="dashboard.routes.ts" />

module Onesnap.Dashboard {
  'use strict';
  angular.module('onesnap.dashboard', [])
  .config(DashboardRouterConfig);
}
