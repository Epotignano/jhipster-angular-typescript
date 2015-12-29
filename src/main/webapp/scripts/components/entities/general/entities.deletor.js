/**
 * Created by mmasuyama on 11/10/2015.
 */
/// <reference path="../../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Components;
    (function (Components) {
        var Entities;
        (function (Entities) {
            var EntityDeletionController = (function () {
                /** @ngInject */
                function EntityDeletionController($mdDialog, $element, $q, StreamsService) {
                    var _this = this;
                    this.$mdDialog = $mdDialog;
                    this.$element = $element;
                    this.$q = $q;
                    this.StreamsService = StreamsService;
                    this.executeDeletion = function () {
                        if (Array.isArray(_this.ngModel)) {
                            var promisesArray = [];
                            _this.ngModel.forEach(function (modelElement) {
                                var modelElementPromise = this.$q.defer();
                                promisesArray.push(modelElementPromise.promise);
                                this.deletionService({ id: modelElement.id });
                            });
                        }
                        else {
                            var _model = (_this.options.compareBy) ? _this.ngModel[_this.options.compareBy] : _this.ngModel;
                            _this.deletionService({ id: _model });
                        }
                    };
                    var _stream = this.StreamsService.getStream(this.apiEndpoint + this.ngModel[this.options.compareBy]);
                    _stream.subscribe(function (notification) {
                        _this.removeProxy();
                    });
                    this.removeProxy = function () {
                        var _ind = _this.collection.indexOf(_this.ngModel);
                        _this.collection = _this.collection.splice(_ind, 1);
                    };
                    this.$element.bind('click', function () {
                        _this.submitDeletion(_this.collection, _this.ngModel);
                    });
                }
                EntityDeletionController.prototype.submitDeletion = function (ev, entity) {
                    var _this = this;
                    if (this.deletionService) {
                        if (this.options.askBeforeDelete) {
                            this.$mdDialog.show({
                                controller: DeletorDialogController,
                                controllerAs: 'dialogVm',
                                templateUrl: 'scripts/components/entities/general/entities.deletor.dialog.html',
                                parent: angular.element(document.body),
                                targetEvent: ev,
                                clickOutsideToClose: true,
                                locals: {
                                    'entity': entity,
                                    'showLabel': this.showLabel
                                }
                            }).then(function () {
                                _this.executeDeletion();
                            });
                        }
                        else {
                            this.executeDeletion();
                        }
                    }
                };
                return EntityDeletionController;
            })();
            var DeletorDialogController = (function () {
                /** @ngInject */
                function DeletorDialogController($mdDialog, $translate, entity, showLabel) {
                    this.$mdDialog = $mdDialog;
                    this.$translate = $translate;
                    this.entity = entity;
                    this.showLabel = showLabel;
                }
                DeletorDialogController.prototype.add = function (entity) {
                    this.$mdDialog.hide(entity);
                };
                DeletorDialogController.prototype.cancel = function () {
                    this.$mdDialog.cancel();
                };
                return DeletorDialogController;
            })();
            /** @ngInject */
            function entityDeletor() {
                var directive = {
                    scope: {
                        collection: '=',
                        ngModel: '=',
                        showLabel: '=',
                        deletionService: '=',
                        options: '=',
                        modalOptions: '=',
                        apiEndpoint: '='
                    },
                    controller: EntityDeletionController,
                    controllerAs: 'vm',
                    bindToController: true
                };
                return directive;
            }
            Entities.entityDeletor = entityDeletor;
            angular.module('onesnap.components.entities').directive('entityDeletor', entityDeletor);
        })(Entities = Components.Entities || (Components.Entities = {}));
    })(Components = Onesnap.Components || (Onesnap.Components = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMuZGVsZXRvci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Db21wb25lbnRzIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkVudGl0eURlbGV0aW9uQ29udHJvbGxlciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlEZWxldGlvbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRW50aXR5RGVsZXRpb25Db250cm9sbGVyLnN1Ym1pdERlbGV0aW9uIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyLmFkZCIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5EZWxldG9yRGlhbG9nQ29udHJvbGxlci5jYW5jZWwiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuZW50aXR5RGVsZXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxxREFBcUQ7QUFFckQsSUFBTyxPQUFPLENBcUhiO0FBckhELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxVQUFVQSxDQXFIeEJBO0lBckhjQSxXQUFBQSxVQUFVQTtRQUFDQyxJQUFBQSxRQUFRQSxDQXFIakNBO1FBckh5QkEsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7WUFNbENDLElBQU1BLHdCQUF3QkE7Z0JBVzVCQyxnQkFBZ0JBO2dCQUNoQkEsU0FaSUEsd0JBQXdCQSxDQVlSQSxTQUFTQSxFQUFVQSxRQUFRQSxFQUFVQSxFQUFFQSxFQUFVQSxjQUFjQTtvQkFackZD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QU5BO29CQUNFRyxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUNISCw4QkFBQ0E7WUFBREEsQ0FWQUosQUFVQ0ksSUFBQUo7WUFHREEsQUFDQUEsZ0JBRGdCQTtxQkFDQUEsYUFBYUE7Z0JBRTNCUSxJQUFJQSxTQUFTQSxHQUFrQkE7b0JBQzdCQSxLQUFLQSxFQUFFQTt3QkFDTEEsVUFBVUEsRUFBRUEsR0FBR0E7d0JBQ2ZBLE9BQU9BLEVBQUVBLEdBQUdBO3dCQUNaQSxTQUFTQSxFQUFFQSxHQUFHQTt3QkFDZEEsZUFBZUEsRUFBRUEsR0FBR0E7d0JBQ3BCQSxPQUFPQSxFQUFFQSxHQUFHQTt3QkFDWkEsWUFBWUEsRUFBRUEsR0FBR0E7d0JBQ2pCQSxXQUFXQSxFQUFFQSxHQUFHQTtxQkFDakJBO29CQUNEQSxVQUFVQSxFQUFFQSx3QkFBd0JBO29CQUNwQ0EsWUFBWUEsRUFBRUEsSUFBSUE7b0JBQ2xCQSxnQkFBZ0JBLEVBQUVBLElBQUlBO2lCQUN2QkEsQ0FBQ0E7Z0JBRUZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1lBQ25CQSxDQUFDQTtZQWxCZVIsc0JBQWFBLEdBQWJBLGFBa0JmQSxDQUFBQTtZQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSw2QkFBNkJBLENBQUNBLENBQzFDQSxTQUFTQSxDQUFDQSxlQUFlQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUUvQ0EsQ0FBQ0EsRUFySHlCRCxRQUFRQSxHQUFSQSxtQkFBUUEsS0FBUkEsbUJBQVFBLFFBcUhqQ0E7SUFBREEsQ0FBQ0EsRUFySGNELFVBQVVBLEdBQVZBLGtCQUFVQSxLQUFWQSxrQkFBVUEsUUFxSHhCQTtBQUFEQSxDQUFDQSxFQXJITSxPQUFPLEtBQVAsT0FBTyxRQXFIYiIsImZpbGUiOiJlbnRpdGllcy9nZW5lcmFsL2VudGl0aWVzLmRlbGV0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvMTAvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMge1xyXG5cclxuICBpbnRlcmZhY2UgSUVudGl0eURlbGV0aW9uQ29udHJvbGxlciB7XHJcbiAgICBleGVjdXRlRGVsZXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY2xhc3MgRW50aXR5RGVsZXRpb25Db250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBjb2xsZWN0aW9uO1xyXG4gICAgcHVibGljIG5nTW9kZWw7XHJcbiAgICBwdWJsaWMgZGVsZXRpb25TZXJ2aWNlOyAvL3NlcnZpY2UgZm9yIGRlbGV0ZSBlbGVtZW50IGlmIHRoZXJlIGlzIGFuIGludGVyYWN0aW9uIHdpdGggYW55IGFwaVxyXG4gICAgcHVibGljIG9wdGlvbnM7IC8vIGxpdmVVcGRhdGUgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY29tcGFyZUJ5O1xyXG4gICAgcHVibGljIHNob3dMYWJlbDtcclxuICAgIHB1YmxpYyBtb2RhbE9wdGlvbnM7XHJcbiAgICBwdWJsaWMgYXBpRW5kcG9pbnQ7XHJcblxyXG5cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJG1kRGlhbG9nLCBwcml2YXRlICRlbGVtZW50LCBwcml2YXRlICRxLCBwcml2YXRlIFN0cmVhbXNTZXJ2aWNlKSB7XHJcblxyXG4gICAgICB2YXIgX3N0cmVhbSA9IHRoaXMuU3RyZWFtc1NlcnZpY2UuZ2V0U3RyZWFtKHRoaXMuYXBpRW5kcG9pbnQgKyB0aGlzLm5nTW9kZWxbdGhpcy5vcHRpb25zLmNvbXBhcmVCeV0pXHJcbiAgICAgIF9zdHJlYW0uc3Vic2NyaWJlKChub3RpZmljYXRpb24pID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVByb3h5KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMucmVtb3ZlUHJveHkgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIF9pbmQgPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLm5nTW9kZWwpO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5zcGxpY2UoX2luZCwgMSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiRlbGVtZW50LmJpbmQoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWl0RGVsZXRpb24odGhpcy5jb2xsZWN0aW9uLCB0aGlzLm5nTW9kZWwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXhlY3V0ZURlbGV0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5uZ01vZGVsKSkge1xyXG5cclxuICAgICAgICB2YXIgcHJvbWlzZXNBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLm5nTW9kZWwuZm9yRWFjaChmdW5jdGlvbihtb2RlbEVsZW1lbnQpIHtcclxuICAgICAgICAgIHZhciBtb2RlbEVsZW1lbnRQcm9taXNlID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgICAgcHJvbWlzZXNBcnJheS5wdXNoKG1vZGVsRWxlbWVudFByb21pc2UucHJvbWlzZSk7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0aW9uU2VydmljZSh7IGlkOiBtb2RlbEVsZW1lbnQuaWQgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIF9tb2RlbCA9ICh0aGlzLm9wdGlvbnMuY29tcGFyZUJ5KSA/IHRoaXMubmdNb2RlbFt0aGlzLm9wdGlvbnMuY29tcGFyZUJ5XSA6IHRoaXMubmdNb2RlbDtcclxuICAgICAgICB0aGlzLmRlbGV0aW9uU2VydmljZSh7IGlkOiBfbW9kZWwgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVtb3ZlUHJveHk6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgc3VibWl0RGVsZXRpb24oZXYsIGVudGl0eSkge1xyXG4gICAgICBpZiAodGhpcy5kZWxldGlvblNlcnZpY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFza0JlZm9yZURlbGV0ZSkge1xyXG4gICAgICAgICAgdGhpcy4kbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IERlbGV0b3JEaWFsb2dDb250cm9sbGVyLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdkaWFsb2dWbScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL2VudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMuZGVsZXRvci5kaWFsb2cuaHRtbCcsXHJcbiAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICB0YXJnZXRFdmVudDogZXYsXHJcbiAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICAgICdlbnRpdHknOiBlbnRpdHksXHJcbiAgICAgICAgICAgICAgJ3Nob3dMYWJlbCc6IHRoaXMuc2hvd0xhYmVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVEZWxldGlvbigpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZXhlY3V0ZURlbGV0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2xhc3MgRGVsZXRvckRpYWxvZ0NvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIHNlY3Rpb247XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRtZERpYWxvZywgcHJpdmF0ZSAkdHJhbnNsYXRlLCBwdWJsaWMgZW50aXR5LCBwdWJsaWMgc2hvd0xhYmVsKSB7IH1cclxuICAgIGFkZChlbnRpdHkpIHtcclxuICAgICAgdGhpcy4kbWREaWFsb2cuaGlkZShlbnRpdHkpO1xyXG4gICAgfVxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICB0aGlzLiRtZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiogQG5nSW5qZWN0ICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eURlbGV0b3IoKTogbmcuSURpcmVjdGl2ZSB7XHJcblxyXG4gICAgdmFyIGRpcmVjdGl2ZSA9IDxuZy5JRGlyZWN0aXZlPntcclxuICAgICAgc2NvcGU6IHtcclxuICAgICAgICBjb2xsZWN0aW9uOiAnPScsXHJcbiAgICAgICAgbmdNb2RlbDogJz0nLFxyXG4gICAgICAgIHNob3dMYWJlbDogJz0nLFxyXG4gICAgICAgIGRlbGV0aW9uU2VydmljZTogJz0nLCAvL3NlcnZpY2UgZm9yIGRlbGV0ZSBlbGVtZW50IGlmIHRoZXJlIGlzIGFuIGludGVyYWN0aW9uIHdpdGggYW55IGFwaVxyXG4gICAgICAgIG9wdGlvbnM6ICc9JywgLy8gbGl2ZVVwZGF0ZSA6IGJvb2xlYW5cclxuICAgICAgICBtb2RhbE9wdGlvbnM6ICc9JyxcclxuICAgICAgICBhcGlFbmRwb2ludDogJz0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRyb2xsZXI6IEVudGl0eURlbGV0aW9uQ29udHJvbGxlcixcclxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgfVxyXG5cclxuICBhbmd1bGFyLm1vZHVsZSgnb25lc25hcC5jb21wb25lbnRzLmVudGl0aWVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2VudGl0eURlbGV0b3InLCBlbnRpdHlEZWxldG9yKTtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9