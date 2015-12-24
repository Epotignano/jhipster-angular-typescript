/// <reference path="commons/subscriptions.service.ts" />
/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {

	export class RXInterceptor {
		constructor(private StreamsService: Onesnap.StreamsService) {
			return;
		}
		response(response) {
			console.log(response.data.path);
			if (response.data.path && response.status == 200) {
				var _stream = this.StreamsService.getStream(response.data.path);
				if (!_stream) {
					this.StreamsService.setStream(response.data.path, new Rx.Subject<{}>())
					_stream = this.StreamsService.getStream(response.data.path)
				}
				_stream.onNext({type: response.method, data: response.data})
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