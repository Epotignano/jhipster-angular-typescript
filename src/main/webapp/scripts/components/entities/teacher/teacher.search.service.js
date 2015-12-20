'use strict';

angular.module('springTestApp')
    .factory('TeacherSearch', function ($resource) {
        return $resource('api/_search/teachers/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
