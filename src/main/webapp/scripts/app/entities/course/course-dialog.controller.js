'use strict';

angular.module('springTestApp').controller('CourseDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Course', 'Student', 'Teacher',
        function($scope, $stateParams, $modalInstance, entity, Course, Student, Teacher) {

        $scope.course = entity;
        $scope.students = Student.query();
        $scope.teachers = Teacher.query();
        $scope.load = function(id) {
            Course.get({id : id}, function(result) {
                $scope.course = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('springTestApp:courseUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.course.id != null) {
                Course.update($scope.course, onSaveSuccess, onSaveError);
            } else {
                Course.save($scope.course, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
