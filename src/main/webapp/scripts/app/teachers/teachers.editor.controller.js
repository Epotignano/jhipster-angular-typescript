/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Teachers;
    (function (Teachers) {
        'use strict';
        var TeacherEditorController = (function () {
            function TeacherEditorController(Teacher, StreamsService, $stateParams) {
                var _this = this;
                this.Teacher = Teacher;
                if ($stateParams['id']) {
                    Teacher.get({ id: $stateParams['id'] });
                    this.teacherStream = StreamsService.getStream('api/teachers/' + $stateParams['id']);
                    this.teacherStream.subscribe(function (notification) {
                        _this.teacher = notification.data;
                    });
                }
                ;
                this.formFields = [
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            type: 'text ',
                            label: 'Nombre'
                        }
                    }
                ];
            }
            TeacherEditorController.prototype.save = function () {
                if (this.teacher.id) {
                    this.Teacher.update(this.teacher);
                }
                else {
                    this.Teacher.save({ name: this.teacher.name });
                }
            };
            TeacherEditorController.$inject = ['Teacher', 'StreamsService', '$stateParams'];
            return TeacherEditorController;
        })();
        Teachers.TeacherEditorController = TeacherEditorController;
        angular.module('onesnap.teachers').controller('TeacherEditorController', TeacherEditorController);
    })(Teachers = Onesnap.Teachers || (Onesnap.Teachers = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLmVkaXRvci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLlRlYWNoZXJzIiwiT25lc25hcC5UZWFjaGVycy5UZWFjaGVyRWRpdG9yQ29udHJvbGxlciIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlckVkaXRvckNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLlRlYWNoZXJzLlRlYWNoZXJFZGl0b3JDb250cm9sbGVyLnNhdmUiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFFNUQsSUFBTyxPQUFPLENBMENiO0FBMUNELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxRQUFRQSxDQTBDdEJBO0lBMUNjQSxXQUFBQSxRQUFRQSxFQUFDQSxDQUFDQTtRQUN4QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsdUJBQXVCQTtZQUtuQ0MsU0FMWUEsdUJBQXVCQSxDQUtmQSxPQUFPQSxFQUFFQSxjQUFzQ0EsRUFBRUEsWUFBdUNBO2dCQUw3R0MsaUJBa0NDQTtnQkE3Qm9CQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtnQkFDMUJBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN4QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQUE7b0JBQ3ZDQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxlQUFlQSxHQUFHQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEZBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLFlBQVlBO3dCQUN6Q0EsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2xDQSxDQUFDQSxDQUFDQSxDQUFBQTtnQkFDSEEsQ0FBQ0E7Z0JBQUFBLENBQUNBO2dCQUVGQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQTtvQkFDakJBO3dCQUNDQSxHQUFHQSxFQUFFQSxNQUFNQTt3QkFDWEEsSUFBSUEsRUFBRUEsT0FBT0E7d0JBQ2JBLGVBQWVBLEVBQUVBOzRCQUNoQkEsSUFBSUEsRUFBRUEsT0FBT0E7NEJBQ2JBLEtBQUtBLEVBQUVBLFFBQVFBO3lCQUNmQTtxQkFDREE7aUJBQUNBLENBQUNBO1lBQ0xBLENBQUNBO1lBRURELHNDQUFJQSxHQUFKQTtnQkFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDUEEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hEQSxDQUFDQTtZQUVGQSxDQUFDQTtZQS9CTUYsK0JBQU9BLEdBQWtCQSxDQUFDQSxTQUFTQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLGNBQWNBLENBQUNBLENBQUNBO1lBaUMvRUEsOEJBQUNBO1FBQURBLENBbENBRCxBQWtDQ0MsSUFBQUQ7UUFsQ1lBLGdDQUF1QkEsR0FBdkJBLHVCQWtDWkEsQ0FBQUE7UUFFREEsT0FBT0EsQ0FDTEEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUMxQkEsVUFBVUEsQ0FBQ0EseUJBQXlCQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUNBO0lBQ2xFQSxDQUFDQSxFQTFDY0QsUUFBUUEsR0FBUkEsZ0JBQVFBLEtBQVJBLGdCQUFRQSxRQTBDdEJBO0FBQURBLENBQUNBLEVBMUNNLE9BQU8sS0FBUCxPQUFPLFFBMENiIiwiZmlsZSI6InRlYWNoZXJzL3RlYWNoZXJzLmVkaXRvci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vY29tbW9ucy9zdWJzY3JpcHRpb25zLnNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuVGVhY2hlcnMge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFRlYWNoZXJFZGl0b3JDb250cm9sbGVyIHtcclxuXHRcdHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWydUZWFjaGVyJywgJ1N0cmVhbXNTZXJ2aWNlJywgJyRzdGF0ZVBhcmFtcyddO1xyXG5cdFx0cHVibGljIGZvcm1GaWVsZHM7XHJcblx0XHRwdWJsaWMgdGVhY2hlclxyXG5cdFx0cHVibGljIHRlYWNoZXJTdHJlYW07XHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIFRlYWNoZXIsIFN0cmVhbXNTZXJ2aWNlOiBPbmVzbmFwLlN0cmVhbXNTZXJ2aWNlLCAkc3RhdGVQYXJhbXM6IG5nLnVpLklTdGF0ZVBhcmFtc1NlcnZpY2UpIHtcclxuXHRcdFx0aWYgKCRzdGF0ZVBhcmFtc1snaWQnXSkge1xyXG5cdFx0XHRcdFRlYWNoZXIuZ2V0KHsgaWQ6ICRzdGF0ZVBhcmFtc1snaWQnXSB9KVxyXG5cdFx0XHRcdHRoaXMudGVhY2hlclN0cmVhbSA9IFN0cmVhbXNTZXJ2aWNlLmdldFN0cmVhbSgnYXBpL3RlYWNoZXJzLycgKyAkc3RhdGVQYXJhbXNbJ2lkJ10pO1xyXG5cdFx0XHRcdHRoaXMudGVhY2hlclN0cmVhbS5zdWJzY3JpYmUoKG5vdGlmaWNhdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50ZWFjaGVyID0gbm90aWZpY2F0aW9uLmRhdGE7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMuZm9ybUZpZWxkcyA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRrZXk6ICduYW1lJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbnB1dCcsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3RleHQgJyxcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdOb21icmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fV07XHJcblx0XHR9XHJcblxyXG5cdFx0c2F2ZSgpIHtcclxuXHRcdFx0aWYgKHRoaXMudGVhY2hlci5pZCkge1xyXG5cdFx0XHRcdHRoaXMuVGVhY2hlci51cGRhdGUodGhpcy50ZWFjaGVyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLlRlYWNoZXIuc2F2ZSh7IG5hbWU6IHRoaXMudGVhY2hlci5uYW1lIH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ29uZXNuYXAudGVhY2hlcnMnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ1RlYWNoZXJFZGl0b3JDb250cm9sbGVyJywgVGVhY2hlckVkaXRvckNvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9