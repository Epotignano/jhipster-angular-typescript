'use strict';

angular.module('springTestApp')
    .controller('TeacherDetailController', function ($scope, $rootScope, $stateParams, entity, Teacher) {
        $scope.teacher = entity;
        $scope.load = function (id) {
            Teacher.get({id: id}, function(result) {
                $scope.teacher = result;
            });
        };
        var unsubscribe = $rootScope.$on('springTestApp:teacherUpdate', function(event, result) {
            $scope.teacher = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
