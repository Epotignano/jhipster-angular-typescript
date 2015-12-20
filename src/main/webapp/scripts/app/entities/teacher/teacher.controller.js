'use strict';

angular.module('springTestApp')
    .controller('TeacherController', function ($scope, $state, $modal, Teacher, TeacherSearch, ParseLinks) {
      
        $scope.teachers = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Teacher.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.teachers = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.search = function () {
            TeacherSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.teachers = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.teacher = {
                name: null,
                id: null
            };
        };
    });
