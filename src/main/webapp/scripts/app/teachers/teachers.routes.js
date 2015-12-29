/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Teacher;
    (function (Teacher) {
        var TeachersConfig = (function () {
            function TeachersConfig($stateProvider) {
                $stateProvider.state('app.teachers', {
                    abstract: true,
                    url: '/teachers',
                    'views': {
                        'content': {
                            templateUrl: 'scripts/app/teachers/teachers.abstract.html'
                        }
                    }
                }).state('app.teachers.list', {
                    url: '/list',
                    templateUrl: 'scripts/app/teachers/teachers.list.html',
                    controller: 'TeachersListController',
                    controllerAs: 'vm'
                }).state('app.teachers.create', {
                    url: '/create',
                    templateUrl: 'scripts/app/teachers/teachers.editor.html',
                    controller: 'TeacherEditorController',
                    controllerAs: 'vm'
                }).state('app.teachers.edit', {
                    url: '/edit/:id',
                    templateUrl: 'scripts/app/teachers/teachers.editor.html',
                    controller: 'TeacherEditorController',
                    controllerAs: 'vm'
                });
                //$translatePartialLoaderProvider.addPart('app/courses');
            }
            TeachersConfig.$inject = ['$stateProvider'];
            return TeachersConfig;
        })();
        Teacher.TeachersConfig = TeachersConfig;
        angular.module('onesnap.teachers').config(TeachersConfig);
    })(Teacher = Onesnap.Teacher || (Onesnap.Teacher = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5UZWFjaGVyIiwiT25lc25hcC5UZWFjaGVyLlRlYWNoZXJzQ29uZmlnIiwiT25lc25hcC5UZWFjaGVyLlRlYWNoZXJzQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFFbEQsSUFBTyxPQUFPLENBNkNiO0FBN0NELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxPQUFPQSxDQTZDckJBO0lBN0NjQSxXQUFBQSxPQUFPQSxFQUFDQSxDQUFDQTtRQUV2QkMsSUFBYUEsY0FBY0E7WUFFeEJDLFNBRlVBLGNBQWNBLENBRVpBLGNBQW9DQTtnQkFDOUNDLGNBQWNBLENBQ1hBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBO29CQUNyQkEsUUFBUUEsRUFBRUEsSUFBSUE7b0JBQ2RBLEdBQUdBLEVBQUVBLFdBQVdBO29CQUNoQkEsT0FBT0EsRUFBRUE7d0JBQ1BBLFNBQVNBLEVBQUVBOzRCQUNUQSxXQUFXQSxFQUFFQSw2Q0FBNkNBO3lCQUMzREE7cUJBQ0ZBO2lCQUNGQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBO29CQUMxQkEsR0FBR0EsRUFBRUEsT0FBT0E7b0JBQ1pBLFdBQVdBLEVBQUVBLHlDQUF5Q0E7b0JBQ3REQSxVQUFVQSxFQUFFQSx3QkFBd0JBO29CQUNwQ0EsWUFBWUEsRUFBRUEsSUFBSUE7aUJBQ25CQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxxQkFBcUJBLEVBQUVBO29CQUM1QkEsR0FBR0EsRUFBRUEsU0FBU0E7b0JBQ2RBLFdBQVdBLEVBQUVBLDJDQUEyQ0E7b0JBQ3hEQSxVQUFVQSxFQUFFQSx5QkFBeUJBO29CQUNyQ0EsWUFBWUEsRUFBR0EsSUFBSUE7aUJBQ3BCQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBO29CQUMxQkEsR0FBR0EsRUFBRUEsV0FBV0E7b0JBQ2hCQSxXQUFXQSxFQUFFQSwyQ0FBMkNBO29CQUN4REEsVUFBVUEsRUFBRUEseUJBQXlCQTtvQkFDckNBLFlBQVlBLEVBQUdBLElBQUlBO2lCQUNwQkEsQ0FBQ0EsQ0FBQUE7Z0JBRUpBLHlEQUF5REE7WUFFM0RBLENBQUNBO1lBcENRRCxzQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFxQ3ZEQSxxQkFBQ0E7UUFBREEsQ0F0Q0RELEFBc0NFQyxJQUFBRDtRQXRDV0Esc0JBQWNBLEdBQWRBLGNBc0NYQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQy9CQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtJQUU1QkEsQ0FBQ0EsRUE3Q2NELE9BQU9BLEdBQVBBLGVBQU9BLEtBQVBBLGVBQU9BLFFBNkNyQkE7QUFBREEsQ0FBQ0EsRUE3Q00sT0FBTyxLQUFQLE9BQU8sUUE2Q2IiLCJmaWxlIjoidGVhY2hlcnMvdGVhY2hlcnMucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuVGVhY2hlciB7XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIFRlYWNoZXJzQ29uZmlnIHtcclxuICAgIFx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcikge1xyXG4gICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLnRlYWNoZXJzJywge1xyXG4gICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICB1cmw6ICcvdGVhY2hlcnMnLFxyXG4gICAgICAgICAgJ3ZpZXdzJzoge1xyXG4gICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvYXBwL3RlYWNoZXJzL3RlYWNoZXJzLmFic3RyYWN0Lmh0bWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuc3RhdGUoJ2FwcC50ZWFjaGVycy5saXN0Jywge1xyXG4gICAgICAgICAgdXJsOiAnL2xpc3QnLFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC90ZWFjaGVycy90ZWFjaGVycy5saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogJ1RlYWNoZXJzTGlzdENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ2FwcC50ZWFjaGVycy5jcmVhdGUnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvdGVhY2hlcnMvdGVhY2hlcnMuZWRpdG9yLmh0bWwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogJ1RlYWNoZXJFZGl0b3JDb250cm9sbGVyJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXJBcyA6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLnRlYWNoZXJzLmVkaXQnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvZWRpdC86aWQnLFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC90ZWFjaGVycy90ZWFjaGVycy5lZGl0b3IuaHRtbCcsXHJcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGVhY2hlckVkaXRvckNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgY29udHJvbGxlckFzIDogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAvLyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnYXBwL2NvdXJzZXMnKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFuZ3VsYXIubW9kdWxlKCdvbmVzbmFwLnRlYWNoZXJzJylcclxuICAgIC5jb25maWcoVGVhY2hlcnNDb25maWcpO1xyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9