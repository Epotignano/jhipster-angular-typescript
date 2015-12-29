/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Students;
    (function (Students) {
        'use strict';
        var StudentsListController = (function () {
            function StudentsListController(Student, StreamsService) {
                var _this = this;
                this.Student = Student;
                this.StreamsService = StreamsService;
                Student.query({ page: 0, size: 20 });
                this.studentsStream = this.StreamsService.getStream('api/students');
                this.studentsStream.subscribe(function (notification) {
                    _this.studentsList = notification.data;
                });
                this.studentsConf = [{
                    key: 'name',
                    label: 'Nombre',
                    sort: true
                }];
            }
            StudentsListController.prototype.showStudentLabel = function (chosen) {
                return 'Estas seguro que quieres eliminar a ' + chosen.name;
            };
            StudentsListController.$inject = ['Student', 'StreamsService'];
            return StudentsListController;
        })();
        Students.StudentsListController = StudentsListController;
        angular.module('onesnap.students').controller('StudentsListController', StudentsListController);
    })(Students = Onesnap.Students || (Onesnap.Students = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzL3N0dWRlbnRzLmxpc3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5TdHVkZW50cyIsIk9uZXNuYXAuU3R1ZGVudHMuU3R1ZGVudHNMaXN0Q29udHJvbGxlciIsIk9uZXNuYXAuU3R1ZGVudHMuU3R1ZGVudHNMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuU3R1ZGVudHMuU3R1ZGVudHNMaXN0Q29udHJvbGxlci5zaG93U3R1ZGVudExhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFDbEQsNERBQTREO0FBRTVELElBQU8sT0FBTyxDQWdDYjtBQWhDRCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsUUFBUUEsQ0FnQ3RCQTtJQWhDY0EsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7UUFDeEJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLHNCQUFzQkE7WUFNbENDLFNBTllBLHNCQUFzQkEsQ0FNZkEsT0FBT0EsRUFBVUEsY0FBc0NBO2dCQU4zRUMsaUJBd0JDQTtnQkFsQm1CQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtnQkFBVUEsbUJBQWNBLEdBQWRBLGNBQWNBLENBQXdCQTtnQkFDekVBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEVBQUNBLElBQUlBLEVBQUNBLENBQUNBLEVBQUVBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO2dCQUVqQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxZQUFZQTtvQkFDMUNBLEtBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBO2dCQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7Z0JBRUZBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBO29CQUNwQkEsR0FBR0EsRUFBRUEsTUFBTUE7b0JBQ1hBLEtBQUtBLEVBQUVBLFFBQVFBO29CQUNmQSxJQUFJQSxFQUFFQSxJQUFJQTtpQkFDVkEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsQ0FBQ0E7WUFFREQsaURBQWdCQSxHQUFoQkEsVUFBa0JBLE1BQU1BO2dCQUN2QkUsTUFBTUEsQ0FBQ0Esc0NBQXNDQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUM3REEsQ0FBQ0E7WUF0Qk1GLDhCQUFPQSxHQUFrQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQXVCL0RBLDZCQUFDQTtRQUFEQSxDQXhCQUQsQUF3QkNDLElBQUFEO1FBeEJZQSwrQkFBc0JBLEdBQXRCQSxzQkF3QlpBLENBQUFBO1FBRURBLE9BQU9BLENBQ0xBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FDMUJBLFVBQVVBLENBQUNBLHdCQUF3QkEsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtJQUNoRUEsQ0FBQ0EsRUFoQ2NELFFBQVFBLEdBQVJBLGdCQUFRQSxLQUFSQSxnQkFBUUEsUUFnQ3RCQTtBQUFEQSxDQUFDQSxFQWhDTSxPQUFPLEtBQVAsT0FBTyxRQWdDYiIsImZpbGUiOiJzdHVkZW50cy9zdHVkZW50cy5saXN0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb21tb25zL3N1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5TdHVkZW50cyB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU3R1ZGVudHNMaXN0Q29udHJvbGxlciB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnU3R1ZGVudCcsICdTdHJlYW1zU2VydmljZSddO1xyXG5cdFx0cHVibGljIHN0dWRlbnRzTGlzdDogQXJyYXk8YW55PjtcclxuXHRcdHB1YmxpYyBzdHVkZW50c1N0cmVhbTtcclxuXHRcdHB1YmxpYyBzdHVkZW50c0NvbmY7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IocHVibGljIFN0dWRlbnQsIHByaXZhdGUgU3RyZWFtc1NlcnZpY2U6IE9uZXNuYXAuU3RyZWFtc1NlcnZpY2UgKSB7XHJcblx0XHRcdFN0dWRlbnQucXVlcnkoe3BhZ2U6MCwgc2l6ZToyMH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLnN0dWRlbnRzU3RyZWFtID0gdGhpcy5TdHJlYW1zU2VydmljZS5nZXRTdHJlYW0oJ2FwaS9zdHVkZW50cycpO1xyXG5cdFx0XHR0aGlzLnN0dWRlbnRzU3RyZWFtLnN1YnNjcmliZSgobm90aWZpY2F0aW9uKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdHVkZW50c0xpc3QgPSBub3RpZmljYXRpb24uZGF0YTtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc3R1ZGVudHNDb25mID0gW3tcclxuXHRcdFx0XHRrZXk6ICduYW1lJyxcclxuXHRcdFx0XHRsYWJlbDogJ05vbWJyZScsXHJcblx0XHRcdFx0c29ydDogdHJ1ZVxyXG5cdFx0XHR9XTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2hvd1N0dWRlbnRMYWJlbCAoY2hvc2VuKSB7XHJcblx0XHRcdHJldHVybiAnRXN0YXMgc2VndXJvIHF1ZSBxdWllcmVzIGVsaW1pbmFyIGEgJyArIGNob3Nlbi5uYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YW5ndWxhclxyXG5cdFx0Lm1vZHVsZSgnb25lc25hcC5zdHVkZW50cycpXHJcblx0XHQuY29udHJvbGxlcignU3R1ZGVudHNMaXN0Q29udHJvbGxlcicsIFN0dWRlbnRzTGlzdENvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9