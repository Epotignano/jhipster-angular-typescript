/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../../typings/tsd.d.ts" />
module app.components.entities {


  interface IEntityListController {
    columnIsSortable(entity)
  }

  /** @ngInject */
  export class EntityListController implements IEntityListController{
    public thread;
    public list;
    public entityConf;
    public options;


    columnIsSortable(entity) {
      return (entity.sort) ? entity.key : '';
    }
  }

  /** @ngInject */
  export function entityList():ng.IDirective {

    var directive = <ng.IDirective> {
      restrict: 'E',
      scope: {
        thread: '=',
        list: '=',
        entityConf: '=',
        options: '='
      },
      templateUrl: 'scripts/components/entities/general/entities.list.html',
      controller: EntityListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
  
  angular.module('onesnap.components.entities')
    .directive('entityList', entityList);
}
