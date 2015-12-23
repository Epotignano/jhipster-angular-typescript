/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Courses;
    (function (Courses) {
        var CoursesConfig = (function () {
            function CoursesConfig($stateProvider) {
                $stateProvider.state('app.courses', {
                    abstract: true,
                    url: '/courses',
                    'views': {
                        'content': {
                            templateUrl: 'scripts/app/courses/courses.abstract.html'
                        }
                    }
                }).state('app.courses.list', {
                    url: '/list',
                    templateUrl: 'scripts/app/courses/courses.list.html',
                    controller: 'CoursesListController',
                    controllerAs: 'vm'
                });
                //$translatePartialLoaderProvider.addPart('app/courses');
            }
            CoursesConfig.$inject = ['$stateProvider'];
            return CoursesConfig;
        })();
        Courses.CoursesConfig = CoursesConfig;
        angular.module('onesnap.courses').config(CoursesConfig);
    })(Courses = Onesnap.Courses || (Onesnap.Courses = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMvY291cnNlcy5yb3V0ZXMudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQ291cnNlcyIsIk9uZXNuYXAuQ291cnNlcy5Db3Vyc2VzQ29uZmlnIiwiT25lc25hcC5Db3Vyc2VzLkNvdXJzZXNDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUVsRCxJQUFPLE9BQU8sQ0ErQmI7QUEvQkQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLE9BQU9BLENBK0JyQkE7SUEvQmNBLFdBQUFBLE9BQU9BLEVBQUNBLENBQUNBO1FBRXZCQyxJQUFhQSxhQUFhQTtZQUV2QkMsU0FGVUEsYUFBYUEsQ0FFWEEsY0FBb0NBO2dCQUM5Q0MsY0FBY0EsQ0FDWEEsS0FBS0EsQ0FBQ0EsYUFBYUEsRUFBRUE7b0JBQ3BCQSxRQUFRQSxFQUFFQSxJQUFJQTtvQkFDZEEsR0FBR0EsRUFBRUEsVUFBVUE7b0JBQ2ZBLE9BQU9BLEVBQUVBO3dCQUNQQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEsMkNBQTJDQTt5QkFDekRBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FFREEsS0FBS0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQTtvQkFDekJBLEdBQUdBLEVBQUVBLE9BQU9BO29CQUNaQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO29CQUNwREEsVUFBVUEsRUFBRUEsdUJBQXVCQTtvQkFDbkNBLFlBQVlBLEVBQUVBLElBQUlBO2lCQUNuQkEsQ0FBQ0EsQ0FBQUE7Z0JBRUpBLHlEQUF5REE7WUFFM0RBLENBQUNBO1lBdEJRRCxxQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUF1QnZEQSxvQkFBQ0E7UUFBREEsQ0F4QkRELEFBd0JFQyxJQUFBRDtRQXhCV0EscUJBQWFBLEdBQWJBLGFBd0JYQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQzlCQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtJQUUzQkEsQ0FBQ0EsRUEvQmNELE9BQU9BLEdBQVBBLGVBQU9BLEtBQVBBLGVBQU9BLFFBK0JyQkE7QUFBREEsQ0FBQ0EsRUEvQk0sT0FBTyxLQUFQLE9BQU8sUUErQmIiLCJmaWxlIjoiY291cnNlcy9jb3Vyc2VzLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkNvdXJzZXMge1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBDb3Vyc2VzQ29uZmlnIHtcclxuICAgIFx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcikge1xyXG4gICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmNvdXJzZXMnLCB7XHJcbiAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgIHVybDogJy9jb3Vyc2VzJyxcclxuICAgICAgICAgICd2aWV3cyc6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9jb3Vyc2VzL2NvdXJzZXMuYWJzdHJhY3QuaHRtbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmNvdXJzZXMubGlzdCcsIHtcclxuICAgICAgICAgIHVybDogJy9saXN0JyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvY291cnNlcy9jb3Vyc2VzLmxpc3QuaHRtbCcsXHJcbiAgICAgICAgICBjb250cm9sbGVyOiAnQ291cnNlc0xpc3RDb250cm9sbGVyJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAvLyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnYXBwL2NvdXJzZXMnKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFuZ3VsYXIubW9kdWxlKCdvbmVzbmFwLmNvdXJzZXMnKVxyXG4gICAgLmNvbmZpZyhDb3Vyc2VzQ29uZmlnKTtcclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==