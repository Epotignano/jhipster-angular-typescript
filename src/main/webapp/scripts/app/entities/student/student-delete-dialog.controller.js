'use strict';

angular.module('springTestApp')
	.controller('StudentDeleteController', function($scope, $modalInstance, entity, Student) {

        $scope.student = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Student.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });