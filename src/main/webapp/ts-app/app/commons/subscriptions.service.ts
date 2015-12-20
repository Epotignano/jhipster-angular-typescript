/**
 * Created by mmasuyama on 10/22/2015.
 */


module Onesnap.Commons.Streams {


  interface IStreams  {
    setStream(streamKey: string, stream: any)
    getStream(streamKey: string)
    getStreams()
  }

  export class StreamsService implements IStreams{

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
      this.streams[streamKey] = stream;
      this.generalListeners.forEach(function(listener) {
      listener.onNext(stream);
      });
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


}
