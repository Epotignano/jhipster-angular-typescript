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
                    controller: 'TeacherEditorController',
                    controllerAs: 'vm'
                }).state('app.teachers.create', {
                    url: '/create',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5UZWFjaGVyIiwiT25lc25hcC5UZWFjaGVyLlRlYWNoZXJzQ29uZmlnIiwiT25lc25hcC5UZWFjaGVyLlRlYWNoZXJzQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFFbEQsSUFBTyxPQUFPLENBc0NiO0FBdENELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxPQUFPQSxDQXNDckJBO0lBdENjQSxXQUFBQSxPQUFPQSxFQUFDQSxDQUFDQTtRQUV2QkMsSUFBYUEsY0FBY0E7WUFFeEJDLFNBRlVBLGNBQWNBLENBRVpBLGNBQW9DQTtnQkFDOUNDLGNBQWNBLENBQ1hBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBO29CQUNyQkEsUUFBUUEsRUFBRUEsSUFBSUE7b0JBQ2RBLEdBQUdBLEVBQUVBLFdBQVdBO29CQUNoQkEsT0FBT0EsRUFBRUE7d0JBQ1BBLFNBQVNBLEVBQUVBOzRCQUNUQSxXQUFXQSxFQUFFQSw2Q0FBNkNBO3lCQUMzREE7cUJBQ0ZBO2lCQUNGQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBO29CQUMxQkEsR0FBR0EsRUFBRUEsT0FBT0E7b0JBQ1pBLFdBQVdBLEVBQUVBLHlDQUF5Q0E7b0JBQ3REQSxVQUFVQSxFQUFFQSx5QkFBeUJBO29CQUNyQ0EsWUFBWUEsRUFBRUEsSUFBSUE7aUJBQ25CQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxxQkFBcUJBLEVBQUVBO29CQUM1QkEsR0FBR0EsRUFBRUEsU0FBU0E7b0JBQ2RBLFdBQVdBLEVBQUVBLDJDQUEyQ0E7b0JBQ3hEQSxVQUFVQSxFQUFFQSx5QkFBeUJBO29CQUNyQ0EsWUFBWUEsRUFBR0EsSUFBSUE7aUJBQ3BCQSxDQUFDQSxDQUFBQTtnQkFFSkEseURBQXlEQTtZQUUzREEsQ0FBQ0E7WUE3QlFELHNCQUFPQSxHQUFrQkEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQThCdkRBLHFCQUFDQTtRQUFEQSxDQS9CREQsQUErQkVDLElBQUFEO1FBL0JXQSxzQkFBY0EsR0FBZEEsY0ErQlhBLENBQUFBO1FBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FDL0JBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0lBRTVCQSxDQUFDQSxFQXRDY0QsT0FBT0EsR0FBUEEsZUFBT0EsS0FBUEEsZUFBT0EsUUFzQ3JCQTtBQUFEQSxDQUFDQSxFQXRDTSxPQUFPLEtBQVAsT0FBTyxRQXNDYiIsImZpbGUiOiJ0ZWFjaGVycy90ZWFjaGVycy5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcC5UZWFjaGVyIHtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgVGVhY2hlcnNDb25maWcge1xyXG4gICAgXHRcdHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWyckc3RhdGVQcm92aWRlciddO1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAudGVhY2hlcnMnLCB7XHJcbiAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgIHVybDogJy90ZWFjaGVycycsXHJcbiAgICAgICAgICAndmlld3MnOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50Jzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvdGVhY2hlcnMvdGVhY2hlcnMuYWJzdHJhY3QuaHRtbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLnRlYWNoZXJzLmxpc3QnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvbGlzdCcsXHJcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvYXBwL3RlYWNoZXJzL3RlYWNoZXJzLmxpc3QuaHRtbCcsXHJcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGVhY2hlckVkaXRvckNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ2FwcC50ZWFjaGVycy5jcmVhdGUnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvY3JlYXRlJyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvdGVhY2hlcnMvdGVhY2hlcnMuZWRpdG9yLmh0bWwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogJ1RlYWNoZXJFZGl0b3JDb250cm9sbGVyJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXJBcyA6ICd2bSdcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgLy8kdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ2FwcC9jb3Vyc2VzJyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhbmd1bGFyLm1vZHVsZSgnb25lc25hcC50ZWFjaGVycycpXHJcbiAgICAuY29uZmlnKFRlYWNoZXJzQ29uZmlnKTtcclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==