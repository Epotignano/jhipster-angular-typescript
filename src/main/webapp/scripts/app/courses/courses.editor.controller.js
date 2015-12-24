/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Courses;
    (function (Courses) {
        'use strict';
        var CourseEditorController = (function () {
            function CourseEditorController(Course) {
                this.Course = Course;
            }
            CourseEditorController.prototype.save = function () {
                this.Course.save(this.course);
            };
            CourseEditorController.$inject = ['Course'];
            return CourseEditorController;
        })();
        Courses.CourseEditorController = CourseEditorController;
        angular.module('onesnap.courses').controller('CourseEditorController', CourseEditorController);
    })(Courses = Onesnap.Courses || (Onesnap.Courses = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMvY291cnNlcy5lZGl0b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Db3Vyc2VzIiwiT25lc25hcC5Db3Vyc2VzLkNvdXJzZUVkaXRvckNvbnRyb2xsZXIiLCJPbmVzbmFwLkNvdXJzZXMuQ291cnNlRWRpdG9yQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIk9uZXNuYXAuQ291cnNlcy5Db3Vyc2VFZGl0b3JDb250cm9sbGVyLnNhdmUiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUNsRCw0REFBNEQ7QUFFNUQsSUFBTyxPQUFPLENBaUJiO0FBakJELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxPQUFPQSxDQWlCckJBO0lBakJjQSxXQUFBQSxPQUFPQSxFQUFDQSxDQUFDQTtRQUN2QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEsc0JBQXNCQTtZQUdsQ0MsU0FIWUEsc0JBQXNCQSxDQUdkQSxNQUFNQTtnQkFBTkMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBQUE7WUFBR0EsQ0FBQ0E7WUFFOUJELHFDQUFJQSxHQUFKQTtnQkFDQ0UsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLENBQUNBO1lBTk1GLDhCQUFPQSxHQUFrQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFRNUNBLDZCQUFDQTtRQUFEQSxDQVRBRCxBQVNDQyxJQUFBRDtRQVRZQSw4QkFBc0JBLEdBQXRCQSxzQkFTWkEsQ0FBQUE7UUFFREEsT0FBT0EsQ0FDTEEsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUN6QkEsVUFBVUEsQ0FBQ0Esd0JBQXdCQSxFQUFFQSxzQkFBc0JBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQSxFQWpCY0QsT0FBT0EsR0FBUEEsZUFBT0EsS0FBUEEsZUFBT0EsUUFpQnJCQTtBQUFEQSxDQUFDQSxFQWpCTSxPQUFPLEtBQVAsT0FBTyxRQWlCYiIsImZpbGUiOiJjb3Vyc2VzL2NvdXJzZXMuZWRpdG9yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb21tb25zL3N1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5Db3Vyc2VzIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBDb3Vyc2VFZGl0b3JDb250cm9sbGVyIHtcclxuXHRcdHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWydDb3Vyc2UnXTtcclxuXHRcdHB1YmxpYyBjb3Vyc2VcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgQ291cnNlKSB7fVxyXG5cdFx0XHJcblx0XHRzYXZlKCkge1xyXG5cdFx0XHR0aGlzLkNvdXJzZS5zYXZlKHRoaXMuY291cnNlKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0YW5ndWxhclxyXG5cdFx0Lm1vZHVsZSgnb25lc25hcC5jb3Vyc2VzJylcclxuXHRcdC5jb250cm9sbGVyKCdDb3Vyc2VFZGl0b3JDb250cm9sbGVyJywgQ291cnNlRWRpdG9yQ29udHJvbGxlcik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=