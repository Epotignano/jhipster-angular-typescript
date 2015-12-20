'use strict';

angular.module('springTestApp')
    .controller('StudentDetailController', function ($scope, $rootScope, $stateParams, entity, Student) {
        $scope.student = entity;
        $scope.load = function (id) {
            Student.get({id: id}, function(result) {
                $scope.student = result;
            });
        };
        var unsubscribe = $rootScope.$on('springTestApp:studentUpdate', function(event, result) {
            $scope.student = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
