 'use strict';

angular.module('springTestApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-springTestApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-springTestApp-params')});
                }
                return response;
            }
        };
    });
