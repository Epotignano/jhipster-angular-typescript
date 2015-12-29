/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Teachers;
    (function (Teachers) {
        'use strict';
        var TeachersListController = (function () {
            function TeachersListController(Teacher, StreamsService) {
                var _this = this;
                this.Teacher = Teacher;
                this.StreamsService = StreamsService;
                Teacher.query({ page: 0, size: 20 });
                this.teachersThread = this.StreamsService.getStream('api/teachers');
                this.teachersThread.subscribe(function (notification) {
                    _this.teachersList = notification.data;
                });
                this.teachersConf = [{
                    key: 'name',
                    label: 'Nombre',
                    sort: true
                }];
            }
            TeachersListController.prototype.showTeacherLabel = function (chosenTeacher) {
                return 'Estas seguro que quieres eliminar a ' + chosenTeacher.name;
            };
            TeachersListController.$inject = ['Teacher', 'StreamsService'];
            return TeachersListController;
        })();
        Teachers.TeachersListController = TeachersListController;
        angular.module('onesnap.teachers').controller('TeachersListController', TeachersListController);
    })(Teachers = Onesnap.Teachers || (Onesnap.Teachers = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLmxpc3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5UZWFjaGVycyIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlciIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlci5zaG93VGVhY2hlckxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFDbEQsNERBQTREO0FBRTVELElBQU8sT0FBTyxDQWdDYjtBQWhDRCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsUUFBUUEsQ0FnQ3RCQTtJQWhDY0EsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7UUFDeEJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLHNCQUFzQkE7WUFNbENDLFNBTllBLHNCQUFzQkEsQ0FNZkEsT0FBT0EsRUFBVUEsY0FBc0NBO2dCQU4zRUMsaUJBd0JDQTtnQkFsQm1CQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtnQkFBVUEsbUJBQWNBLEdBQWRBLGNBQWNBLENBQXdCQTtnQkFDekVBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEVBQUNBLElBQUlBLEVBQUNBLENBQUNBLEVBQUVBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO2dCQUVqQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxZQUFZQTtvQkFDMUNBLEtBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBO2dCQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7Z0JBRUZBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBO29CQUNwQkEsR0FBR0EsRUFBRUEsTUFBTUE7b0JBQ1hBLEtBQUtBLEVBQUVBLFFBQVFBO29CQUNmQSxJQUFJQSxFQUFFQSxJQUFJQTtpQkFDVkEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsQ0FBQ0E7WUFFREQsaURBQWdCQSxHQUFoQkEsVUFBa0JBLGFBQWFBO2dCQUM5QkUsTUFBTUEsQ0FBQ0Esc0NBQXNDQSxHQUFHQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNwRUEsQ0FBQ0E7WUF0Qk1GLDhCQUFPQSxHQUFrQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQXVCL0RBLDZCQUFDQTtRQUFEQSxDQXhCQUQsQUF3QkNDLElBQUFEO1FBeEJZQSwrQkFBc0JBLEdBQXRCQSxzQkF3QlpBLENBQUFBO1FBRURBLE9BQU9BLENBQ0xBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FDMUJBLFVBQVVBLENBQUNBLHdCQUF3QkEsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtJQUNoRUEsQ0FBQ0EsRUFoQ2NELFFBQVFBLEdBQVJBLGdCQUFRQSxLQUFSQSxnQkFBUUEsUUFnQ3RCQTtBQUFEQSxDQUFDQSxFQWhDTSxPQUFPLEtBQVAsT0FBTyxRQWdDYiIsImZpbGUiOiJ0ZWFjaGVycy90ZWFjaGVycy5saXN0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb21tb25zL3N1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5UZWFjaGVycyB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRleHBvcnQgY2xhc3MgVGVhY2hlcnNMaXN0Q29udHJvbGxlciB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnVGVhY2hlcicsICdTdHJlYW1zU2VydmljZSddO1xyXG5cdFx0cHVibGljIHRlYWNoZXJzTGlzdDogQXJyYXk8YW55PjtcclxuXHRcdHB1YmxpYyB0ZWFjaGVyc1RocmVhZDtcclxuXHRcdHB1YmxpYyB0ZWFjaGVyc0NvbmY7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IocHVibGljIFRlYWNoZXIsIHByaXZhdGUgU3RyZWFtc1NlcnZpY2U6IE9uZXNuYXAuU3RyZWFtc1NlcnZpY2UgKSB7XHJcblx0XHRcdFRlYWNoZXIucXVlcnkoe3BhZ2U6MCwgc2l6ZToyMH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLnRlYWNoZXJzVGhyZWFkID0gdGhpcy5TdHJlYW1zU2VydmljZS5nZXRTdHJlYW0oJ2FwaS90ZWFjaGVycycpO1xyXG5cdFx0XHR0aGlzLnRlYWNoZXJzVGhyZWFkLnN1YnNjcmliZSgobm90aWZpY2F0aW9uKSA9PiB7XHJcblx0XHRcdFx0dGhpcy50ZWFjaGVyc0xpc3QgPSBub3RpZmljYXRpb24uZGF0YTtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudGVhY2hlcnNDb25mID0gW3tcclxuXHRcdFx0XHRrZXk6ICduYW1lJyxcclxuXHRcdFx0XHRsYWJlbDogJ05vbWJyZScsXHJcblx0XHRcdFx0c29ydDogdHJ1ZVxyXG5cdFx0XHR9XTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2hvd1RlYWNoZXJMYWJlbCAoY2hvc2VuVGVhY2hlcikge1xyXG5cdFx0XHRyZXR1cm4gJ0VzdGFzIHNlZ3VybyBxdWUgcXVpZXJlcyBlbGltaW5hciBhICcgKyBjaG9zZW5UZWFjaGVyLm5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdvbmVzbmFwLnRlYWNoZXJzJylcclxuXHRcdC5jb250cm9sbGVyKCdUZWFjaGVyc0xpc3RDb250cm9sbGVyJywgVGVhY2hlcnNMaXN0Q29udHJvbGxlcik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=