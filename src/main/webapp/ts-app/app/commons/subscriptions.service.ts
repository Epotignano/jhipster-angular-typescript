/**
 * Created by mmasuyama on 10/22/2015.
 */


module Onesnap {


  export interface IStreamService  {
    setStream(streamKey: string, stream: any)
    getStream(streamKey: string)
    getStreams()
  }

  export class StreamsService implements IStreamService{

    private streams = {};
    private generalListeners = [];
    
    /** @ngInject */
    constructor() {}

    public defaultEvents = {'COLLECTION_LOADED' : 'cloaded',
      'COLLECTION_OBJECT_REMOVED': 'coremoved',
      'OBJECT_CREATE' : 'ocreated',
      'OBJECT_LOAD': 'oloaded', 'OBJECT_UPDATE': 'oupdated',
      'OBJECT_DELETE': 'odeleted'};

    setStream (streamKey: string, stream: any) {
      if(!this.streams[streamKey]) {
        this.streams[streamKey] = stream;
        this.generalListeners.forEach(function(listener) {
        listener.onNext(stream);
        }); 
      }
    }

    setGeneralListener(thread: any) {
      this.generalListeners.push(thread);
    }

    getGeneralListener () {

    }

    getStream (streamKey: string) {
      return this.streams[streamKey];
    }

    getStreams() {
      return this.streams;
    }
  }
  
  angular.module('springTestApp')
  .service('StreamsService', StreamsService)
}
