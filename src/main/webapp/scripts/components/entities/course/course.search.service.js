'use strict';

angular.module('springTestApp')
    .factory('CourseSearch', function ($resource) {
        return $resource('api/_search/courses/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
