/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Teachers;
    (function (Teachers) {
        'use strict';
        var TeachersListController = (function () {
            function TeachersListController(Teacher) {
                this.Teacher = Teacher;
            }
            TeachersListController.$inject = ['Teacher'];
            return TeachersListController;
        })();
        Teachers.TeachersListController = TeachersListController;
        angular.module('onesnap.teachers').controller('TeachersListController', TeachersListController);
    })(Teachers = Onesnap.Teachers || (Onesnap.Teachers = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLmxpc3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5UZWFjaGVycyIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlciIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xELDREQUE0RDtBQUU1RCxJQUFPLE9BQU8sQ0FpQmI7QUFqQkQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLFFBQVFBLENBaUJ0QkE7SUFqQmNBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1FBQ3hCQyxZQUFZQSxDQUFDQTtRQUViQSxJQUFhQSxzQkFBc0JBO1lBSWxDQyxTQUpZQSxzQkFBc0JBLENBSWRBLE9BQU9BO2dCQUFQQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtZQUUzQkEsQ0FBQ0E7WUFMTUQsOEJBQU9BLEdBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtZQVE3Q0EsNkJBQUNBO1FBQURBLENBVEFELEFBU0NDLElBQUFEO1FBVFlBLCtCQUFzQkEsR0FBdEJBLHNCQVNaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUNMQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQzFCQSxVQUFVQSxDQUFDQSx3QkFBd0JBLEVBQUVBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7SUFDaEVBLENBQUNBLEVBakJjRCxRQUFRQSxHQUFSQSxnQkFBUUEsS0FBUkEsZ0JBQVFBLFFBaUJ0QkE7QUFBREEsQ0FBQ0EsRUFqQk0sT0FBTyxLQUFQLE9BQU8sUUFpQmIiLCJmaWxlIjoidGVhY2hlcnMvdGVhY2hlcnMubGlzdC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vY29tbW9ucy9zdWJzY3JpcHRpb25zLnNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuVGVhY2hlcnMge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFRlYWNoZXJzTGlzdENvbnRyb2xsZXIge1xyXG5cdFx0c3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbJ1RlYWNoZXInXTtcclxuXHRcdHB1YmxpYyB0ZWFjaGVycyA6IEFycmF5PGFueT47XHJcblx0XHRcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgVGVhY2hlcikge1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0YW5ndWxhclxyXG5cdFx0Lm1vZHVsZSgnb25lc25hcC50ZWFjaGVycycpXHJcblx0XHQuY29udHJvbGxlcignVGVhY2hlcnNMaXN0Q29udHJvbGxlcicsIFRlYWNoZXJzTGlzdENvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9