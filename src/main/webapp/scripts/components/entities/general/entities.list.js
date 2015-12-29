/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        var entities;
        (function (entities) {
            /** @ngInject */
            var EntityListController = (function () {
                function EntityListController() {
                }
                EntityListController.prototype.columnIsSortable = function (entity) {
                    return (entity.sort) ? entity.key : '';
                };
                return EntityListController;
            })();
            entities.EntityListController = EntityListController;
            /** @ngInject */
            function entityList() {
                var directive = {
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
            entities.entityList = entityList;
            angular.module('onesnap.components.entities').directive('entityList', entityList);
        })(entities = components.entities || (components.entities = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMubGlzdC50cyJdLCJuYW1lcyI6WyJhcHAiLCJhcHAuY29tcG9uZW50cyIsImFwcC5jb21wb25lbnRzLmVudGl0aWVzIiwiYXBwLmNvbXBvbmVudHMuZW50aXRpZXMuRW50aXR5TGlzdENvbnRyb2xsZXIiLCJhcHAuY29tcG9uZW50cy5lbnRpdGllcy5FbnRpdHlMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciIsImFwcC5jb21wb25lbnRzLmVudGl0aWVzLkVudGl0eUxpc3RDb250cm9sbGVyLmNvbHVtbklzU29ydGFibGUiLCJhcHAuY29tcG9uZW50cy5lbnRpdGllcy5lbnRpdHlMaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxBQUlBOztHQUZHO0FBQ0gscURBQXFEO0FBQ3JELElBQU8sR0FBRyxDQTBDVDtBQTFDRCxXQUFPLEdBQUc7SUFBQ0EsSUFBQUEsVUFBVUEsQ0EwQ3BCQTtJQTFDVUEsV0FBQUEsVUFBVUE7UUFBQ0MsSUFBQUEsUUFBUUEsQ0EwQzdCQTtRQTFDcUJBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1lBTzlCQyxBQUNBQSxnQkFEZ0JBO2dCQUNIQSxvQkFBb0JBO2dCQUFqQ0MsU0FBYUEsb0JBQW9CQTtnQkFVakNDLENBQUNBO2dCQUhDRCwrQ0FBZ0JBLEdBQWhCQSxVQUFpQkEsTUFBTUE7b0JBQ3JCRSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUNIRiwyQkFBQ0E7WUFBREEsQ0FWQUQsQUFVQ0MsSUFBQUQ7WUFWWUEsNkJBQW9CQSxHQUFwQkEsb0JBVVpBLENBQUFBO1lBRURBLEFBQ0FBLGdCQURnQkE7cUJBQ0FBLFVBQVVBO2dCQUV4QkksSUFBSUEsU0FBU0EsR0FBbUJBO29CQUM5QkEsUUFBUUEsRUFBRUEsR0FBR0E7b0JBQ2JBLEtBQUtBLEVBQUVBO3dCQUNMQSxNQUFNQSxFQUFFQSxHQUFHQTt3QkFDWEEsSUFBSUEsRUFBRUEsR0FBR0E7d0JBQ1RBLFVBQVVBLEVBQUVBLEdBQUdBO3dCQUNmQSxPQUFPQSxFQUFFQSxHQUFHQTtxQkFDYkE7b0JBQ0RBLFdBQVdBLEVBQUVBLHdEQUF3REE7b0JBQ3JFQSxVQUFVQSxFQUFFQSxvQkFBb0JBO29CQUNoQ0EsWUFBWUEsRUFBRUEsSUFBSUE7b0JBQ2xCQSxnQkFBZ0JBLEVBQUVBLElBQUlBO2lCQUN2QkEsQ0FBQ0E7Z0JBRUZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1lBQ25CQSxDQUFDQTtZQWpCZUosbUJBQVVBLEdBQVZBLFVBaUJmQSxDQUFBQTtZQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSw2QkFBNkJBLENBQUNBLENBQzFDQSxTQUFTQSxDQUFDQSxZQUFZQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUN6Q0EsQ0FBQ0EsRUExQ3FCRCxRQUFRQSxHQUFSQSxtQkFBUUEsS0FBUkEsbUJBQVFBLFFBMEM3QkE7SUFBREEsQ0FBQ0EsRUExQ1VELFVBQVVBLEdBQVZBLGNBQVVBLEtBQVZBLGNBQVVBLFFBMENwQkE7QUFBREEsQ0FBQ0EsRUExQ00sR0FBRyxLQUFILEdBQUcsUUEwQ1QiLCJmaWxlIjoiZW50aXRpZXMvZ2VuZXJhbC9lbnRpdGllcy5saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzUvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIGFwcC5jb21wb25lbnRzLmVudGl0aWVzIHtcclxuXHJcblxyXG4gIGludGVyZmFjZSBJRW50aXR5TGlzdENvbnRyb2xsZXIge1xyXG4gICAgY29sdW1uSXNTb3J0YWJsZShlbnRpdHkpXHJcbiAgfVxyXG5cclxuICAvKiogQG5nSW5qZWN0ICovXHJcbiAgZXhwb3J0IGNsYXNzIEVudGl0eUxpc3RDb250cm9sbGVyIGltcGxlbWVudHMgSUVudGl0eUxpc3RDb250cm9sbGVye1xyXG4gICAgcHVibGljIHRocmVhZDtcclxuICAgIHB1YmxpYyBsaXN0O1xyXG4gICAgcHVibGljIGVudGl0eUNvbmY7XHJcbiAgICBwdWJsaWMgb3B0aW9ucztcclxuXHJcblxyXG4gICAgY29sdW1uSXNTb3J0YWJsZShlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIChlbnRpdHkuc29ydCkgPyBlbnRpdHkua2V5IDogJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQG5nSW5qZWN0ICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUxpc3QoKTpuZy5JRGlyZWN0aXZlIHtcclxuXHJcbiAgICB2YXIgZGlyZWN0aXZlID0gPG5nLklEaXJlY3RpdmU+IHtcclxuICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgc2NvcGU6IHtcclxuICAgICAgICB0aHJlYWQ6ICc9JyxcclxuICAgICAgICBsaXN0OiAnPScsXHJcbiAgICAgICAgZW50aXR5Q29uZjogJz0nLFxyXG4gICAgICAgIG9wdGlvbnM6ICc9J1xyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29tcG9uZW50cy9lbnRpdGllcy9nZW5lcmFsL2VudGl0aWVzLmxpc3QuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IEVudGl0eUxpc3RDb250cm9sbGVyLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ29uZXNuYXAuY29tcG9uZW50cy5lbnRpdGllcycpXHJcbiAgICAuZGlyZWN0aXZlKCdlbnRpdHlMaXN0JywgZW50aXR5TGlzdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9