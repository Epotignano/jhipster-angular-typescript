/// <reference path="commons/subscriptions.service.ts" />
/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {

	export class RXInterceptor {
		static $inject: Array<string> = ['StreamsService'];
		constructor(private StreamsService: Onesnap.StreamsService) {
			this.response = (response) => {
			if (response.config.url.indexOf('api') !== -1) {
				var _service = StreamsService;
				var _stream = _service.getStream(response.config.url);
				_stream.onNext({type: response.config.method, data: response.data})
			}
			return response
		}
			
			return;
		}
		response : (response) => void;	
	}


	export function getInstance(StreamsService: Onesnap.StreamsService) {
		return new RXInterceptor(StreamsService)
	}


	angular.module('springTestApp')
		.factory('rxInterceptorFactory', getInstance);

}