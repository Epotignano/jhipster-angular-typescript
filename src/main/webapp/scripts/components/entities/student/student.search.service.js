'use strict';

angular.module('springTestApp')
    .factory('StudentSearch', function ($resource) {
        return $resource('api/_search/students/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
