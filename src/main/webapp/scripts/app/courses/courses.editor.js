/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Courses;
    (function (Courses) {
        'use strict';
        var CourseEditorController = (function () {
            function CourseEditorController(StreamsService) {
                this.StreamsService = StreamsService;
                this.StreamsService.getStream('/api/course');
            }
            CourseEditorController.$inject = ['StreamsService'];
            return CourseEditorController;
        })();
        Courses.CourseEditorController = CourseEditorController;
        angular.module('onesnap.courses').controller('CourseEditorController', CourseEditorController);
    })(Courses = Onesnap.Courses || (Onesnap.Courses = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMvY291cnNlcy5lZGl0b3IudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQ291cnNlcyIsIk9uZXNuYXAuQ291cnNlcy5Db3Vyc2VFZGl0b3JDb250cm9sbGVyIiwiT25lc25hcC5Db3Vyc2VzLkNvdXJzZUVkaXRvckNvbnRyb2xsZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFFNUQsSUFBTyxPQUFPLENBZ0JiO0FBaEJELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxPQUFPQSxDQWdCckJBO0lBaEJjQSxXQUFBQSxPQUFPQSxFQUFDQSxDQUFDQTtRQUN2QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsc0JBQXNCQTtZQUVsQ0MsU0FGWUEsc0JBQXNCQSxDQUVkQSxjQUFzQ0E7Z0JBQXRDQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBd0JBO2dCQUV6REEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFFOUNBLENBQUNBO1lBTE1ELDhCQUFPQSxHQUFrQkEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQU9wREEsNkJBQUNBO1FBQURBLENBUkFELEFBUUNDLElBQUFEO1FBUllBLDhCQUFzQkEsR0FBdEJBLHNCQVFaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUNMQSxNQUFNQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQ3pCQSxVQUFVQSxDQUFDQSx3QkFBd0JBLEVBQUVBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7SUFDaEVBLENBQUNBLEVBaEJjRCxPQUFPQSxHQUFQQSxlQUFPQSxLQUFQQSxlQUFPQSxRQWdCckJBO0FBQURBLENBQUNBLEVBaEJNLE9BQU8sS0FBUCxPQUFPLFFBZ0JiIiwiZmlsZSI6ImNvdXJzZXMvY291cnNlcy5lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb21tb25zL3N1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5Db3Vyc2VzIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBDb3Vyc2VFZGl0b3JDb250cm9sbGVyIHtcclxuXHRcdHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWydTdHJlYW1zU2VydmljZSddO1xyXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBTdHJlYW1zU2VydmljZTogT25lc25hcC5TdHJlYW1zU2VydmljZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5TdHJlYW1zU2VydmljZS5nZXRTdHJlYW0oJy9hcGkvY291cnNlJyk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ29uZXNuYXAuY291cnNlcycpXHJcblx0XHQuY29udHJvbGxlcignQ291cnNlRWRpdG9yQ29udHJvbGxlcicsIENvdXJzZUVkaXRvckNvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9