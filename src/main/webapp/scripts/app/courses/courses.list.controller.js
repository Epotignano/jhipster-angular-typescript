/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Courses;
    (function (Courses) {
        'use strict';
        var CoursesListController = (function () {
            function CoursesListController(Course) {
                this.Course = Course;
                this.Course.query({ page: 0, size: 20 }, function (result, headers) {
                });
            }
            CoursesListController.$inject = ['Course'];
            return CoursesListController;
        })();
        Courses.CoursesListController = CoursesListController;
        angular.module('onesnap.courses').controller('CoursesListController', CoursesListController);
    })(Courses = Onesnap.Courses || (Onesnap.Courses = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMvY291cnNlcy5saXN0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQ291cnNlcyIsIk9uZXNuYXAuQ291cnNlcy5Db3Vyc2VzTGlzdENvbnRyb2xsZXIiLCJPbmVzbmFwLkNvdXJzZXMuQ291cnNlc0xpc3RDb250cm9sbGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxBQUNBLGtEQURrRDtBQUNsRCxJQUFPLE9BQU8sQ0FnQmI7QUFoQkQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLE9BQU9BLENBZ0JyQkE7SUFoQmNBLFdBQUFBLE9BQU9BLEVBQUNBLENBQUNBO1FBQ3ZCQyxZQUFZQSxDQUFDQTtRQUViQSxJQUFhQSxxQkFBcUJBO1lBRWpDQyxTQUZZQSxxQkFBcUJBLENBRWJBLE1BQU1BO2dCQUFOQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFBQTtnQkFDekJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUNBLEVBQUVBLFVBQVNBLE1BQU1BLEVBQUVBLE9BQU9BO2dCQUN0RCxDQUFDLENBQUNBLENBQUNBO1lBRWJBLENBQUNBO1lBTE1ELDZCQUFPQSxHQUFrQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFPNUNBLDRCQUFDQTtRQUFEQSxDQVJBRCxBQVFDQyxJQUFBRDtRQVJZQSw2QkFBcUJBLEdBQXJCQSxxQkFRWkEsQ0FBQUE7UUFFREEsT0FBT0EsQ0FDTEEsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUN6QkEsVUFBVUEsQ0FBQ0EsdUJBQXVCQSxFQUFFQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQzlEQSxDQUFDQSxFQWhCY0QsT0FBT0EsR0FBUEEsZUFBT0EsS0FBUEEsZUFBT0EsUUFnQnJCQTtBQUFEQSxDQUFDQSxFQWhCTSxPQUFPLEtBQVAsT0FBTyxRQWdCYiIsImZpbGUiOiJjb3Vyc2VzL2NvdXJzZXMubGlzdC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcC5Db3Vyc2VzIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBDb3Vyc2VzTGlzdENvbnRyb2xsZXIge1xyXG5cdFx0c3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbJ0NvdXJzZSddO1xyXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBDb3Vyc2UpIHtcclxuXHRcdFx0dGhpcy5Db3Vyc2UucXVlcnkoe3BhZ2U6IDAsIHNpemU6IDIwfSwgZnVuY3Rpb24ocmVzdWx0LCBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdvbmVzbmFwLmNvdXJzZXMnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ0NvdXJzZXNMaXN0Q29udHJvbGxlcicsIENvdXJzZXNMaXN0Q29udHJvbGxlcik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=