'use strict';

angular.module('springTestApp')
	.controller('CourseDeleteController', function($scope, $modalInstance, entity, Course) {

        $scope.course = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Course.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });