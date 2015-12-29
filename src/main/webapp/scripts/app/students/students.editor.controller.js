/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Students;
    (function (Students) {
        'use strict';
        var StudentEditorController = (function () {
            function StudentEditorController(Student, StreamsService, $stateParams) {
                var _this = this;
                this.Student = Student;
                if ($stateParams['id']) {
                    Student.get({ id: $stateParams['id'] });
                    this.studentsStream = StreamsService.getStream('api/students/' + $stateParams['id']);
                    this.studentsStream.subscribe(function (notification) {
                        _this.student = notification.data;
                    });
                }
                ;
                this.formFields = [
                    {
                        key: 'firstname',
                        type: 'input',
                        templateOptions: {
                            type: 'text ',
                            label: 'Nombre'
                        }
                    },
                    {
                        key: 'lastName',
                        type: 'input',
                        templateOptions: {
                            type: 'text ',
                            label: 'Apellido'
                        }
                    }
                ];
            }
            StudentEditorController.prototype.save = function () {
                if (this.student.id) {
                    this.Student.update(this.student);
                }
                else {
                    this.Student.save({ name: this.student.name });
                }
            };
            StudentEditorController.$inject = ['Student', 'StreamsService', '$stateParams'];
            return StudentEditorController;
        })();
        Students.StudentEditorController = StudentEditorController;
        angular.module('onesnap.students').controller('StudentEditorController', StudentEditorController);
    })(Students = Onesnap.Students || (Onesnap.Students = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzL3N0dWRlbnRzLmVkaXRvci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLlN0dWRlbnRzIiwiT25lc25hcC5TdHVkZW50cy5TdHVkZW50RWRpdG9yQ29udHJvbGxlciIsIk9uZXNuYXAuU3R1ZGVudHMuU3R1ZGVudEVkaXRvckNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLlN0dWRlbnRzLlN0dWRlbnRFZGl0b3JDb250cm9sbGVyLnNhdmUiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFFNUQsSUFBTyxPQUFPLENBa0RiO0FBbERELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxRQUFRQSxDQWtEdEJBO0lBbERjQSxXQUFBQSxRQUFRQSxFQUFDQSxDQUFDQTtRQUN4QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsdUJBQXVCQTtZQUtuQ0MsU0FMWUEsdUJBQXVCQSxDQUtmQSxPQUFPQSxFQUFFQSxjQUFzQ0EsRUFBRUEsWUFBdUNBO2dCQUw3R0MsaUJBMENDQTtnQkFyQ29CQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtnQkFDMUJBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN4QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQUE7b0JBQ3ZDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxlQUFlQSxHQUFHQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDckZBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLFlBQVlBO3dCQUMxQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2xDQSxDQUFDQSxDQUFDQSxDQUFBQTtnQkFDSEEsQ0FBQ0E7Z0JBQUFBLENBQUNBO2dCQUVGQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQTtvQkFDakJBO3dCQUNDQSxHQUFHQSxFQUFFQSxXQUFXQTt3QkFDaEJBLElBQUlBLEVBQUVBLE9BQU9BO3dCQUNiQSxlQUFlQSxFQUFFQTs0QkFDaEJBLElBQUlBLEVBQUVBLE9BQU9BOzRCQUNiQSxLQUFLQSxFQUFFQSxRQUFRQTt5QkFDZkE7cUJBQ0RBO29CQUFDQTt3QkFDREEsR0FBR0EsRUFBRUEsVUFBVUE7d0JBQ2ZBLElBQUlBLEVBQUVBLE9BQU9BO3dCQUNiQSxlQUFlQSxFQUFFQTs0QkFDaEJBLElBQUlBLEVBQUVBLE9BQU9BOzRCQUNiQSxLQUFLQSxFQUFFQSxVQUFVQTt5QkFDakJBO3FCQUNEQTtpQkFDQUEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7WUFFREQsc0NBQUlBLEdBQUpBO2dCQUNDRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDckJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUNQQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDaERBLENBQUNBO1lBRUZBLENBQUNBO1lBdkNNRiwrQkFBT0EsR0FBa0JBLENBQUNBLFNBQVNBLEVBQUVBLGdCQUFnQkEsRUFBRUEsY0FBY0EsQ0FBQ0EsQ0FBQ0E7WUF5Qy9FQSw4QkFBQ0E7UUFBREEsQ0ExQ0FELEFBMENDQyxJQUFBRDtRQTFDWUEsZ0NBQXVCQSxHQUF2QkEsdUJBMENaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUNMQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQzFCQSxVQUFVQSxDQUFDQSx5QkFBeUJBLEVBQUVBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0E7SUFDbEVBLENBQUNBLEVBbERjRCxRQUFRQSxHQUFSQSxnQkFBUUEsS0FBUkEsZ0JBQVFBLFFBa0R0QkE7QUFBREEsQ0FBQ0EsRUFsRE0sT0FBTyxLQUFQLE9BQU8sUUFrRGIiLCJmaWxlIjoic3R1ZGVudHMvc3R1ZGVudHMuZWRpdG9yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb21tb25zL3N1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5TdHVkZW50cyB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU3R1ZGVudEVkaXRvckNvbnRyb2xsZXIge1xyXG5cdFx0c3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbJ1N0dWRlbnQnLCAnU3RyZWFtc1NlcnZpY2UnLCAnJHN0YXRlUGFyYW1zJ107XHJcblx0XHRwdWJsaWMgZm9ybUZpZWxkcztcclxuXHRcdHB1YmxpYyBzdHVkZW50XHJcblx0XHRwdWJsaWMgc3R1ZGVudHNTdHJlYW07XHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIFN0dWRlbnQsIFN0cmVhbXNTZXJ2aWNlOiBPbmVzbmFwLlN0cmVhbXNTZXJ2aWNlLCAkc3RhdGVQYXJhbXM6IG5nLnVpLklTdGF0ZVBhcmFtc1NlcnZpY2UpIHtcclxuXHRcdFx0aWYgKCRzdGF0ZVBhcmFtc1snaWQnXSkge1xyXG5cdFx0XHRcdFN0dWRlbnQuZ2V0KHsgaWQ6ICRzdGF0ZVBhcmFtc1snaWQnXSB9KVxyXG5cdFx0XHRcdHRoaXMuc3R1ZGVudHNTdHJlYW0gPSBTdHJlYW1zU2VydmljZS5nZXRTdHJlYW0oJ2FwaS9zdHVkZW50cy8nICsgJHN0YXRlUGFyYW1zWydpZCddKTtcclxuXHRcdFx0XHR0aGlzLnN0dWRlbnRzU3RyZWFtLnN1YnNjcmliZSgobm90aWZpY2F0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN0dWRlbnQgPSBub3RpZmljYXRpb24uZGF0YTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhpcy5mb3JtRmllbGRzID0gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGtleTogJ2ZpcnN0bmFtZScsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5wdXQnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVPcHRpb25zOiB7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0ICcsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnTm9tYnJlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0a2V5OiAnbGFzdE5hbWUnLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lucHV0JyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndGV4dCAnLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0FwZWxsaWRvJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNhdmUoKSB7XHJcblx0XHRcdGlmICh0aGlzLnN0dWRlbnQuaWQpIHtcclxuXHRcdFx0XHR0aGlzLlN0dWRlbnQudXBkYXRlKHRoaXMuc3R1ZGVudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5TdHVkZW50LnNhdmUoeyBuYW1lOiB0aGlzLnN0dWRlbnQubmFtZSB9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdvbmVzbmFwLnN0dWRlbnRzJylcclxuXHRcdC5jb250cm9sbGVyKCdTdHVkZW50RWRpdG9yQ29udHJvbGxlcicsIFN0dWRlbnRFZGl0b3JDb250cm9sbGVyKTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==