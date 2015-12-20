'use strict';

angular.module('springTestApp').controller('StudentDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Student',
        function($scope, $stateParams, $modalInstance, entity, Student) {

        $scope.student = entity;
        $scope.load = function(id) {
            Student.get({id : id}, function(result) {
                $scope.student = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('springTestApp:studentUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.student.id != null) {
                Student.update($scope.student, onSaveSuccess, onSaveError);
            } else {
                Student.save($scope.student, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
