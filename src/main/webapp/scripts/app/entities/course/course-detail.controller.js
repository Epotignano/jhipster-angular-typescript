'use strict';

angular.module('springTestApp')
    .controller('CourseDetailController', function ($scope, $rootScope, $stateParams, entity, Course, Student, Teacher) {
        $scope.course = entity;
        $scope.load = function (id) {
            Course.get({id: id}, function(result) {
                $scope.course = result;
            });
        };
        var unsubscribe = $rootScope.$on('springTestApp:courseUpdate', function(event, result) {
            $scope.course = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
