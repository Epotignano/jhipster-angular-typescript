'use strict';

angular.module('springTestApp')
	.controller('TeacherDeleteController', function($scope, $modalInstance, entity, Teacher) {

        $scope.teacher = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Teacher.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });