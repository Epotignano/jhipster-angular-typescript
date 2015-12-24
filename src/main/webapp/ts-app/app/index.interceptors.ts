/// <reference path="commons/subscriptions.service.ts" />
/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {

	export class RXInterceptor {
		constructor(private StreamsService: Onesnap.StreamsService) {
			return;
		}
		response(response) {
			console.log(response);
			if ( (response.status === 200 || response.status === 201) && typeof response.data !== 'string') {
				var _stream = this.StreamsService.getStream(response.config.url);
				if (!_stream) {
					this.StreamsService.setStream(response.config.url, new Rx.Subject<{}>())
					_stream = this.StreamsService.getStream(response.config.url)
				}
				_stream.onNext({type: response.statusText, data: response.data})
			}

			return response
		}
	}


	export function getInstance(StreamsService: Onesnap.StreamsService) {
		return new RXInterceptor(StreamsService)
	}


	angular.module('springTestApp')
		.factory('rxInterceptorFactory', getInstance);

}