/**
 * Created by mmasuyama on 11/10/2015.
 */

/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="subscriptions.service.ts" />

module Onesnap.Commons.Streams {

  interface IToaster {
    showToaster(notification, type)
  }

  export class ToasterService implements IToaster{
    private toasterStream;
    private arrayObserv;
    private streams;
    private observables;

    /** @ngInject */
    constructor(private  StreamsService: Onesnap.Commons.Streams.StreamsService, private $mdToast, private $translate) {
      this.toasterStream = new Rx.Subject<{}>();
      this.observables = [];
      this.StreamsService.setGeneralListener(this.toasterStream);

      this.toasterStream.subscribe((observable) => {
        this.observables.push(observable);
        this.streams = Rx.Observable.merge(this.observables);
        this.streams.subscribe((notification) => {
          this.showToaster(notification, 'SUCCESS');
        })
      },(error)=> {
        this.showToaster(error, 'ERROR');
      });
    }

    showToaster(notification, type){
      switch(notification.EVENT){
        case(this.StreamsService.defaultEvents['OBJECT_UPDATE']):
              this.$mdToast.showSimple(this.$translate.instant("COMMONS.UPDATE_" + type));
              break;
        case(this.StreamsService.defaultEvents['OBJECT_CREATE']):
          this.$mdToast.showSimple(this.$translate.instant("COMMONS.SAVE_" + type));
          break;
        case(this.StreamsService.defaultEvents['OBJECT_DELETE']):
          this.$mdToast.showSimple(this.$translate.instant("COMMONS.DELETE_" + type));
          break;
      }

    }
  }
}
