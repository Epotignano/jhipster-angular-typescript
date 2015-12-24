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
                }).state('app.courses.create', {
                    url: '/create',
                    templateUrl: 'scripts/app/courses/courses.editor.html',
                    controller: 'CoursesEditorController',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMvY291cnNlcy5yb3V0ZXMudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQ291cnNlcyIsIk9uZXNuYXAuQ291cnNlcy5Db3Vyc2VzQ29uZmlnIiwiT25lc25hcC5Db3Vyc2VzLkNvdXJzZXNDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDtBQUVsRCxJQUFPLE9BQU8sQ0FzQ2I7QUF0Q0QsV0FBTyxPQUFPO0lBQUNBLElBQUFBLE9BQU9BLENBc0NyQkE7SUF0Q2NBLFdBQUFBLE9BQU9BLEVBQUNBLENBQUNBO1FBRXZCQyxJQUFhQSxhQUFhQTtZQUV2QkMsU0FGVUEsYUFBYUEsQ0FFWEEsY0FBb0NBO2dCQUM5Q0MsY0FBY0EsQ0FDWEEsS0FBS0EsQ0FBQ0EsYUFBYUEsRUFBRUE7b0JBQ3BCQSxRQUFRQSxFQUFFQSxJQUFJQTtvQkFDZEEsR0FBR0EsRUFBRUEsVUFBVUE7b0JBQ2ZBLE9BQU9BLEVBQUVBO3dCQUNQQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEsMkNBQTJDQTt5QkFDekRBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FFREEsS0FBS0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQTtvQkFDekJBLEdBQUdBLEVBQUVBLE9BQU9BO29CQUNaQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO29CQUNwREEsVUFBVUEsRUFBRUEsdUJBQXVCQTtvQkFDbkNBLFlBQVlBLEVBQUVBLElBQUlBO2lCQUNuQkEsQ0FBQ0EsQ0FFREEsS0FBS0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQTtvQkFDM0JBLEdBQUdBLEVBQUVBLFNBQVNBO29CQUNkQSxXQUFXQSxFQUFFQSx5Q0FBeUNBO29CQUN0REEsVUFBVUEsRUFBRUEseUJBQXlCQTtvQkFDckNBLFlBQVlBLEVBQUdBLElBQUlBO2lCQUNwQkEsQ0FBQ0EsQ0FBQUE7Z0JBRUpBLHlEQUF5REE7WUFFM0RBLENBQUNBO1lBN0JRRCxxQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUE4QnZEQSxvQkFBQ0E7UUFBREEsQ0EvQkRELEFBK0JFQyxJQUFBRDtRQS9CV0EscUJBQWFBLEdBQWJBLGFBK0JYQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQzlCQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtJQUUzQkEsQ0FBQ0EsRUF0Q2NELE9BQU9BLEdBQVBBLGVBQU9BLEtBQVBBLGVBQU9BLFFBc0NyQkE7QUFBREEsQ0FBQ0EsRUF0Q00sT0FBTyxLQUFQLE9BQU8sUUFzQ2IiLCJmaWxlIjoiY291cnNlcy9jb3Vyc2VzLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkNvdXJzZXMge1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBDb3Vyc2VzQ29uZmlnIHtcclxuICAgIFx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcikge1xyXG4gICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmNvdXJzZXMnLCB7XHJcbiAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgIHVybDogJy9jb3Vyc2VzJyxcclxuICAgICAgICAgICd2aWV3cyc6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9jb3Vyc2VzL2NvdXJzZXMuYWJzdHJhY3QuaHRtbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmNvdXJzZXMubGlzdCcsIHtcclxuICAgICAgICAgIHVybDogJy9saXN0JyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvY291cnNlcy9jb3Vyc2VzLmxpc3QuaHRtbCcsXHJcbiAgICAgICAgICBjb250cm9sbGVyOiAnQ291cnNlc0xpc3RDb250cm9sbGVyJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCdhcHAuY291cnNlcy5jcmVhdGUnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvY291cnNlcy9jb3Vyc2VzLmVkaXRvci5odG1sJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb3Vyc2VzRWRpdG9yQ29udHJvbGxlcicsXHJcbiAgICAgICAgICBjb250cm9sbGVyQXMgOiAndm0nXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIC8vJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdhcHAvY291cnNlcycpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ29uZXNuYXAuY291cnNlcycpXHJcbiAgICAuY29uZmlnKENvdXJzZXNDb25maWcpO1xyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9