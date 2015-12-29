/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Students;
    (function (Students) {
        var StudentsConfig = (function () {
            function StudentsConfig($stateProvider) {
                $stateProvider.state('app.students', {
                    abstract: true,
                    url: '/students',
                    'views': {
                        'content': {
                            templateUrl: 'scripts/app/students/students.abstract.html'
                        }
                    }
                }).state('app.students.list', {
                    url: '/list',
                    templateUrl: 'scripts/app/students/students.list.html',
                    controller: 'StudentsListController',
                    controllerAs: 'vm'
                }).state('app.students.create', {
                    url: '/create',
                    templateUrl: 'scripts/app/students/students.editor.html',
                    controller: 'StudentEditorController',
                    controllerAs: 'vm'
                }).state('app.students.edit', {
                    url: '/edit/:id',
                    templateUrl: 'scripts/app/students/students.editor.html',
                    controller: 'StudentEditorController',
                    controllerAs: 'vm'
                });
                //$translatePartialLoaderProvider.addPart('app/courses');
            }
            StudentsConfig.$inject = ['$stateProvider'];
            return StudentsConfig;
        })();
        Students.StudentsConfig = StudentsConfig;
        angular.module('onesnap.students').config(StudentsConfig);
    })(Students = Onesnap.Students || (Onesnap.Students = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzL3N0dWRlbnRzLnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5TdHVkZW50cyIsIk9uZXNuYXAuU3R1ZGVudHMuU3R1ZGVudHNDb25maWciLCJPbmVzbmFwLlN0dWRlbnRzLlN0dWRlbnRzQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFFbEQsSUFBTyxPQUFPLENBNkNiO0FBN0NELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxRQUFRQSxDQTZDdEJBO0lBN0NjQSxXQUFBQSxRQUFRQSxFQUFDQSxDQUFDQTtRQUV4QkMsSUFBYUEsY0FBY0E7WUFFeEJDLFNBRlVBLGNBQWNBLENBRVpBLGNBQW9DQTtnQkFDOUNDLGNBQWNBLENBQ1hBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBO29CQUNyQkEsUUFBUUEsRUFBRUEsSUFBSUE7b0JBQ2RBLEdBQUdBLEVBQUVBLFdBQVdBO29CQUNoQkEsT0FBT0EsRUFBRUE7d0JBQ1BBLFNBQVNBLEVBQUVBOzRCQUNUQSxXQUFXQSxFQUFFQSw2Q0FBNkNBO3lCQUMzREE7cUJBQ0ZBO2lCQUNGQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBO29CQUMxQkEsR0FBR0EsRUFBRUEsT0FBT0E7b0JBQ1pBLFdBQVdBLEVBQUVBLHlDQUF5Q0E7b0JBQ3REQSxVQUFVQSxFQUFFQSx3QkFBd0JBO29CQUNwQ0EsWUFBWUEsRUFBRUEsSUFBSUE7aUJBQ25CQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxxQkFBcUJBLEVBQUVBO29CQUM1QkEsR0FBR0EsRUFBRUEsU0FBU0E7b0JBQ2RBLFdBQVdBLEVBQUVBLDJDQUEyQ0E7b0JBQ3hEQSxVQUFVQSxFQUFFQSx5QkFBeUJBO29CQUNyQ0EsWUFBWUEsRUFBR0EsSUFBSUE7aUJBQ3BCQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBO29CQUMxQkEsR0FBR0EsRUFBRUEsV0FBV0E7b0JBQ2hCQSxXQUFXQSxFQUFFQSwyQ0FBMkNBO29CQUN4REEsVUFBVUEsRUFBRUEseUJBQXlCQTtvQkFDckNBLFlBQVlBLEVBQUdBLElBQUlBO2lCQUNwQkEsQ0FBQ0EsQ0FBQUE7Z0JBRUpBLHlEQUF5REE7WUFFM0RBLENBQUNBO1lBcENRRCxzQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFxQ3ZEQSxxQkFBQ0E7UUFBREEsQ0F0Q0RELEFBc0NFQyxJQUFBRDtRQXRDV0EsdUJBQWNBLEdBQWRBLGNBc0NYQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQy9CQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtJQUU1QkEsQ0FBQ0EsRUE3Q2NELFFBQVFBLEdBQVJBLGdCQUFRQSxLQUFSQSxnQkFBUUEsUUE2Q3RCQTtBQUFEQSxDQUFDQSxFQTdDTSxPQUFPLEtBQVAsT0FBTyxRQTZDYiIsImZpbGUiOiJzdHVkZW50cy9zdHVkZW50cy5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5TdHVkZW50cyB7XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIFN0dWRlbnRzQ29uZmlnIHtcclxuICAgIFx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcikge1xyXG4gICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLnN0dWRlbnRzJywge1xyXG4gICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICB1cmw6ICcvc3R1ZGVudHMnLFxyXG4gICAgICAgICAgJ3ZpZXdzJzoge1xyXG4gICAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvYXBwL3N0dWRlbnRzL3N0dWRlbnRzLmFic3RyYWN0Lmh0bWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAuc3RhdGUoJ2FwcC5zdHVkZW50cy5saXN0Jywge1xyXG4gICAgICAgICAgdXJsOiAnL2xpc3QnLFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9zdHVkZW50cy9zdHVkZW50cy5saXN0Lmh0bWwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogJ1N0dWRlbnRzTGlzdENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ2FwcC5zdHVkZW50cy5jcmVhdGUnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvc3R1ZGVudHMvc3R1ZGVudHMuZWRpdG9yLmh0bWwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogJ1N0dWRlbnRFZGl0b3JDb250cm9sbGVyJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXJBcyA6ICd2bSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLnN0dWRlbnRzLmVkaXQnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvZWRpdC86aWQnLFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9zdHVkZW50cy9zdHVkZW50cy5lZGl0b3IuaHRtbCcsXHJcbiAgICAgICAgICBjb250cm9sbGVyOiAnU3R1ZGVudEVkaXRvckNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgY29udHJvbGxlckFzIDogJ3ZtJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAvLyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnYXBwL2NvdXJzZXMnKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFuZ3VsYXIubW9kdWxlKCdvbmVzbmFwLnN0dWRlbnRzJylcclxuICAgIC5jb25maWcoU3R1ZGVudHNDb25maWcpO1xyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9