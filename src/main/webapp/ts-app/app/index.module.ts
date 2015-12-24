/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="index.routes.ts" />
/// <reference path="index.http.config.ts" />
/// <reference path="index.formly.conf.ts" />

module Onesnap {
	angular.module('springTestApp', [
		'app.core', 'app.navigation', 'app.toolbar', 
		'onesnap.auth','onesnap.settings', 
		'onesnap.dashboard', 'onesnap.courses', 'onesnap.teachers'])
}
