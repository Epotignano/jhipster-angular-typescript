'use strict';

angular.module('springTestApp')
    .controller('StudentController', function ($scope, $state, $modal, Student, StudentSearch, ParseLinks) {
      
        $scope.students = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Student.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.students = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.search = function () {
            StudentSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.students = result;
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
            $scope.student = {
                firstname: null,
                lastname: null,
                id: null
            };
        };
    });
