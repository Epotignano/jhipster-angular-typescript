'use strict';

angular.module('springTestApp').controller('TeacherDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Teacher',
        function($scope, $stateParams, $modalInstance, entity, Teacher) {

        $scope.teacher = entity;
        $scope.load = function(id) {
            Teacher.get({id : id}, function(result) {
                $scope.teacher = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('springTestApp:teacherUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.teacher.id != null) {
                Teacher.update($scope.teacher, onSaveSuccess, onSaveError);
            } else {
                Teacher.save($scope.teacher, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
