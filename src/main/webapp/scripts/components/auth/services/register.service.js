'use strict';

angular.module('springTestApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


