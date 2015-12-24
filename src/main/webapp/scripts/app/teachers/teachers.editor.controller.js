/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Teachers;
    (function (Teachers) {
        'use strict';
        var TeacherEditorController = (function () {
            function TeacherEditorController(Teacher) {
                this.Teacher = Teacher;
                this.formFields = [{
                    key: 'id',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'ID'
                    }
                }, {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Name'
                    }
                }];
            }
            TeacherEditorController.prototype.save = function () {
                this.Teacher.save({ id: this.teacher.id || null, name: this.teacher.name });
            };
            TeacherEditorController.$inject = ['Teacher'];
            return TeacherEditorController;
        })();
        Teachers.TeacherEditorController = TeacherEditorController;
        angular.module('onesnap.teachers').controller('TeacherEditorController', TeacherEditorController);
    })(Teachers = Onesnap.Teachers || (Onesnap.Teachers = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLmVkaXRvci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLlRlYWNoZXJzIiwiT25lc25hcC5UZWFjaGVycy5UZWFjaGVyRWRpdG9yQ29udHJvbGxlciIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlckVkaXRvckNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLlRlYWNoZXJzLlRlYWNoZXJFZGl0b3JDb250cm9sbGVyLnNhdmUiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFFNUQsSUFBTyxPQUFPLENBbUNiO0FBbkNELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxRQUFRQSxDQW1DdEJBO0lBbkNjQSxXQUFBQSxRQUFRQSxFQUFDQSxDQUFDQTtRQUN4QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsdUJBQXVCQTtZQUluQ0MsU0FKWUEsdUJBQXVCQSxDQUlmQSxPQUFPQTtnQkFBUEMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBQUE7Z0JBQzFCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQTtvQkFDbEJBLEdBQUdBLEVBQUVBLElBQUlBO29CQUNUQSxJQUFJQSxFQUFFQSxPQUFPQTtvQkFDYkEsZUFBZUEsRUFBRUE7d0JBQ2hCQSxJQUFJQSxFQUFFQSxNQUFNQTt3QkFDWkEsS0FBS0EsRUFBRUEsSUFBSUE7cUJBQ1hBO2lCQUNEQSxFQUNBQTtvQkFDQ0EsR0FBR0EsRUFBRUEsTUFBTUE7b0JBQ1hBLElBQUlBLEVBQUVBLE9BQU9BO29CQUNiQSxlQUFlQSxFQUFFQTt3QkFDaEJBLElBQUlBLEVBQUVBLE1BQU1BO3dCQUNaQSxLQUFLQSxFQUFFQSxNQUFNQTtxQkFDYkE7aUJBQ0RBLENBQUNBLENBQUNBO1lBQ0xBLENBQUNBO1lBRURELHNDQUFJQSxHQUFKQTtnQkFDQ0UsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBQ0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0VBLENBQUNBO1lBeEJNRiwrQkFBT0EsR0FBa0JBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1lBMEI3Q0EsOEJBQUNBO1FBQURBLENBM0JBRCxBQTJCQ0MsSUFBQUQ7UUEzQllBLGdDQUF1QkEsR0FBdkJBLHVCQTJCWkEsQ0FBQUE7UUFFREEsT0FBT0EsQ0FDTEEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUMxQkEsVUFBVUEsQ0FBQ0EseUJBQXlCQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUNBO0lBQ2xFQSxDQUFDQSxFQW5DY0QsUUFBUUEsR0FBUkEsZ0JBQVFBLEtBQVJBLGdCQUFRQSxRQW1DdEJBO0FBQURBLENBQUNBLEVBbkNNLE9BQU8sS0FBUCxPQUFPLFFBbUNiIiwiZmlsZSI6InRlYWNoZXJzL3RlYWNoZXJzLmVkaXRvci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vY29tbW9ucy9zdWJzY3JpcHRpb25zLnNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuVGVhY2hlcnMge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFRlYWNoZXJFZGl0b3JDb250cm9sbGVyIHtcclxuXHRcdHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWydUZWFjaGVyJ107XHJcblx0XHRwdWJsaWMgZm9ybUZpZWxkcztcclxuXHRcdHB1YmxpYyB0ZWFjaGVyXHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIFRlYWNoZXIpIHtcclxuXHRcdFx0dGhpcy5mb3JtRmllbGRzID0gW3tcclxuXHRcdFx0XHRrZXk6ICdpZCcsXHJcblx0XHRcdFx0dHlwZTogJ2lucHV0JyxcclxuXHRcdFx0XHR0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGxhYmVsOiAnSUQnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGtleTogJ25hbWUnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lucHV0JyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnTmFtZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XTtcclxuXHRcdH1cclxuXHJcblx0XHRzYXZlKCkge1xyXG5cdFx0XHR0aGlzLlRlYWNoZXIuc2F2ZSh7aWQ6IHRoaXMudGVhY2hlci5pZCB8fCBudWxsLCBuYW1lOiB0aGlzLnRlYWNoZXIubmFtZX0pO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ29uZXNuYXAudGVhY2hlcnMnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ1RlYWNoZXJFZGl0b3JDb250cm9sbGVyJywgVGVhY2hlckVkaXRvckNvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9