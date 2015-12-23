/// <reference path="commons/subscriptions.service.ts" />
/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {
	
	export class RXInterceptor {
		constructor(private StreamsService : Onesnap.StreamsService) {
			return;
		}
		response (response) {
			console.log(response.data.path);
			if(response.data.path && response.status == 200) {
				this.StreamsService.setStream(response.data.path, new Rx.Subject<{}>())	
			}
		
			return response
		}
	}
	
	
	export function getInstance(StreamsService : Onesnap.StreamsService) {
		return new RXInterceptor(StreamsService)
	}
	
	
	angular.module('springTestApp')
		.factory('rxInterceptorFactory', getInstance);
	
}