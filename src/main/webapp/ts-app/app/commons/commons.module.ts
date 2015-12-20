/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="subscriptions.service.ts" />
/// <reference path="toaster.service.ts" />

module Onesnap.Commons.Streams {
	
	angular.module('onesnap.commons', [])
		 .service('StreamsService', StreamsService)
		 .service('ToasterService', ToasterService);
	
}