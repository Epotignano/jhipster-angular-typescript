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
                        var _ind = _this.collection.indexOf(_this.ngModel);
                        _this.collection.splice(_ind, 0);
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2dlbmVyYWwvZW50aXRpZXMuZGVsZXRvci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Db21wb25lbnRzIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkVudGl0eURlbGV0aW9uQ29udHJvbGxlciIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5FbnRpdHlEZWxldGlvbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuRW50aXR5RGVsZXRpb25Db250cm9sbGVyLnN1Ym1pdERlbGV0aW9uIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiT25lc25hcC5Db21wb25lbnRzLkVudGl0aWVzLkRlbGV0b3JEaWFsb2dDb250cm9sbGVyLmFkZCIsIk9uZXNuYXAuQ29tcG9uZW50cy5FbnRpdGllcy5EZWxldG9yRGlhbG9nQ29udHJvbGxlci5jYW5jZWwiLCJPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMuZW50aXR5RGVsZXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxxREFBcUQ7QUFFckQsSUFBTyxPQUFPLENBK0diO0FBL0dELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxVQUFVQSxDQStHeEJBO0lBL0djQSxXQUFBQSxVQUFVQTtRQUFDQyxJQUFBQSxRQUFRQSxDQStHakNBO1FBL0d5QkEsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7WUFNbENDLElBQU1BLHdCQUF3QkE7Z0JBVzVCQyxnQkFBZ0JBO2dCQUNoQkEsU0FaSUEsd0JBQXdCQSxDQVlSQSxTQUFTQSxFQUFVQSxRQUFRQSxFQUFVQSxFQUFFQSxFQUFVQSxjQUFjQTtvQkFackZD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QUEsZ0JBRGdCQTtxQkFDQUEsYUFBYUE7Z0JBRTNCUSxJQUFJQSxTQUFTQSxHQUFrQkE7b0JBQzdCQSxLQUFLQSxFQUFFQTt3QkFDTEEsVUFBVUEsRUFBRUEsR0FBR0E7d0JBQ2ZBLE9BQU9BLEVBQUVBLEdBQUdBO3dCQUNaQSxTQUFTQSxFQUFFQSxHQUFHQTt3QkFDZEEsZUFBZUEsRUFBRUEsR0FBR0E7d0JBQ3BCQSxPQUFPQSxFQUFFQSxHQUFHQTt3QkFDWkEsWUFBWUEsRUFBRUEsR0FBR0E7d0JBQ2pCQSxXQUFXQSxFQUFFQSxHQUFHQTtxQkFDakJBO29CQUNEQSxVQUFVQSxFQUFFQSx3QkFBd0JBO29CQUNwQ0EsWUFBWUEsRUFBRUEsSUFBSUE7b0JBQ2xCQSxnQkFBZ0JBLEVBQUVBLElBQUlBO2lCQUN2QkEsQ0FBQ0E7Z0JBRUZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1lBQ25CQSxDQUFDQTtZQWxCZVIsc0JBQWFBLEdBQWJBLGFBa0JmQSxDQUFBQTtZQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSw2QkFBNkJBLENBQUNBLENBQzFDQSxTQUFTQSxDQUFDQSxlQUFlQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUUvQ0EsQ0FBQ0EsRUEvR3lCRCxRQUFRQSxHQUFSQSxtQkFBUUEsS0FBUkEsbUJBQVFBLFFBK0dqQ0E7SUFBREEsQ0FBQ0EsRUEvR2NELFVBQVVBLEdBQVZBLGtCQUFVQSxLQUFWQSxrQkFBVUEsUUErR3hCQTtBQUFEQSxDQUFDQSxFQS9HTSxPQUFPLEtBQVAsT0FBTyxRQStHYiIsImZpbGUiOiJlbnRpdGllcy9nZW5lcmFsL2VudGl0aWVzLmRlbGV0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBtbWFzdXlhbWEgb24gMTEvMTAvMjAxNS5cclxuICovXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkNvbXBvbmVudHMuRW50aXRpZXMge1xyXG5cclxuICBpbnRlcmZhY2UgSUVudGl0eURlbGV0aW9uQ29udHJvbGxlciB7XHJcbiAgICBleGVjdXRlRGVsZXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY2xhc3MgRW50aXR5RGVsZXRpb25Db250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBjb2xsZWN0aW9uO1xyXG4gICAgcHVibGljIG5nTW9kZWw7XHJcbiAgICBwdWJsaWMgZGVsZXRpb25TZXJ2aWNlOyAvL3NlcnZpY2UgZm9yIGRlbGV0ZSBlbGVtZW50IGlmIHRoZXJlIGlzIGFuIGludGVyYWN0aW9uIHdpdGggYW55IGFwaVxyXG4gICAgcHVibGljIG9wdGlvbnM7IC8vIGxpdmVVcGRhdGUgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY29tcGFyZUJ5O1xyXG4gICAgcHVibGljIHNob3dMYWJlbDtcclxuICAgIHB1YmxpYyBtb2RhbE9wdGlvbnM7XHJcbiAgICBwdWJsaWMgYXBpRW5kcG9pbnQ7XHJcblxyXG5cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJG1kRGlhbG9nLCBwcml2YXRlICRlbGVtZW50LCBwcml2YXRlICRxLCBwcml2YXRlIFN0cmVhbXNTZXJ2aWNlKSB7XHJcblxyXG4gICAgICB2YXIgX3N0cmVhbSA9IHRoaXMuU3RyZWFtc1NlcnZpY2UuZ2V0U3RyZWFtKHRoaXMuYXBpRW5kcG9pbnQgKyB0aGlzLm5nTW9kZWxbdGhpcy5vcHRpb25zLmNvbXBhcmVCeV0pXHJcbiAgICAgIF9zdHJlYW0uc3Vic2NyaWJlKChub3RpZmljYXRpb24pID0+IHtcclxuICAgICAgICB2YXIgX2luZCA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMubmdNb2RlbCk7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnNwbGljZShfaW5kLCAwKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuJGVsZW1lbnQuYmluZCgnY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXREZWxldGlvbih0aGlzLmNvbGxlY3Rpb24sIHRoaXMubmdNb2RlbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVEZWxldGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMubmdNb2RlbCkpIHtcclxuXHJcbiAgICAgICAgdmFyIHByb21pc2VzQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5uZ01vZGVsLmZvckVhY2goZnVuY3Rpb24obW9kZWxFbGVtZW50KSB7XHJcbiAgICAgICAgICB2YXIgbW9kZWxFbGVtZW50UHJvbWlzZSA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICAgIHByb21pc2VzQXJyYXkucHVzaChtb2RlbEVsZW1lbnRQcm9taXNlLnByb21pc2UpO1xyXG4gICAgICAgICAgdGhpcy5kZWxldGlvblNlcnZpY2UoeyBpZDogbW9kZWxFbGVtZW50LmlkIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBfbW9kZWwgPSAodGhpcy5vcHRpb25zLmNvbXBhcmVCeSkgPyB0aGlzLm5nTW9kZWxbdGhpcy5vcHRpb25zLmNvbXBhcmVCeV0gOiB0aGlzLm5nTW9kZWw7XHJcbiAgICAgICAgdGhpcy5kZWxldGlvblNlcnZpY2UoeyBpZDogX21vZGVsIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN1Ym1pdERlbGV0aW9uKGV2LCBlbnRpdHkpIHtcclxuICAgICAgaWYgKHRoaXMuZGVsZXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc2tCZWZvcmVEZWxldGUpIHtcclxuICAgICAgICAgIHRoaXMuJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBEZWxldG9yRGlhbG9nQ29udHJvbGxlcixcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnZGlhbG9nVm0nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29tcG9uZW50cy9lbnRpdGllcy9nZW5lcmFsL2VudGl0aWVzLmRlbGV0b3IuZGlhbG9nLmh0bWwnLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6IGV2LFxyXG4gICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAnZW50aXR5JzogZW50aXR5LFxyXG4gICAgICAgICAgICAgICdzaG93TGFiZWwnOiB0aGlzLnNob3dMYWJlbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlRGVsZXRpb24oKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmV4ZWN1dGVEZWxldGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsYXNzIERlbGV0b3JEaWFsb2dDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzZWN0aW9uO1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkbWREaWFsb2csIHByaXZhdGUgJHRyYW5zbGF0ZSwgcHVibGljIGVudGl0eSwgcHVibGljIHNob3dMYWJlbCkgeyB9XHJcbiAgICBhZGQoZW50aXR5KSB7XHJcbiAgICAgIHRoaXMuJG1kRGlhbG9nLmhpZGUoZW50aXR5KTtcclxuICAgIH1cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgdGhpcy4kbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBuZ0luamVjdCAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlEZWxldG9yKCk6IG5nLklEaXJlY3RpdmUge1xyXG5cclxuICAgIHZhciBkaXJlY3RpdmUgPSA8bmcuSURpcmVjdGl2ZT57XHJcbiAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgY29sbGVjdGlvbjogJz0nLFxyXG4gICAgICAgIG5nTW9kZWw6ICc9JyxcclxuICAgICAgICBzaG93TGFiZWw6ICc9JyxcclxuICAgICAgICBkZWxldGlvblNlcnZpY2U6ICc9JywgLy9zZXJ2aWNlIGZvciBkZWxldGUgZWxlbWVudCBpZiB0aGVyZSBpcyBhbiBpbnRlcmFjdGlvbiB3aXRoIGFueSBhcGlcclxuICAgICAgICBvcHRpb25zOiAnPScsIC8vIGxpdmVVcGRhdGUgOiBib29sZWFuXHJcbiAgICAgICAgbW9kYWxPcHRpb25zOiAnPScsXHJcbiAgICAgICAgYXBpRW5kcG9pbnQ6ICc9J1xyXG4gICAgICB9LFxyXG4gICAgICBjb250cm9sbGVyOiBFbnRpdHlEZWxldGlvbkNvbnRyb2xsZXIsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ29uZXNuYXAuY29tcG9uZW50cy5lbnRpdGllcycpXHJcbiAgICAuZGlyZWN0aXZlKCdlbnRpdHlEZWxldG9yJywgZW50aXR5RGVsZXRvcik7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==