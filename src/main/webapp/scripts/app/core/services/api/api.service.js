(function ()
{
    'use strict';

    angular
        .module('app.core')
        .factory('api', apiService)
        .factory('apiResolver', apiResolverService);

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};

        api.dataUrl = 'app/core/services/api/data/';

        api.activities = $resource(api.dataUrl + 'notifications/activities.json', null, {
            get: {method: 'get'}
        });

        api.dashboard = {
            project  : $resource(api.dataUrl + 'dashboard/project/data.json', null, {
                get: {method: 'get'}
            }),
            server   : $resource(api.dataUrl + 'dashboard/server/data.json', null, {
                get: {method: 'get'}
            }),
            analytics: $resource(api.dataUrl + 'dashboard/analytics/data.json', null, {
                get: {method: 'get'}
            })
        };

        api.cards = $resource(api.dataUrl + 'cards/cards.json', null, {
            get: {method: 'get'}
        });

        api.contacts = $resource(api.dataUrl + 'notifications/contacts.json', null, {
            get: {method: 'get'}
        });

        api.events = $resource(api.dataUrl + 'notifications/events.json', null, {
            get: {method: 'get'}
        });

        api.fileManager = {
            documents: $resource(api.dataUrl + 'file-manager/documents.json', null, {
                get: {method: 'get'}
            })
        };

        api.icons = $resource('assets/icons/selection.json', null, {
            get: {method: 'get'}
        });

        api.invoice = $resource(api.dataUrl + 'invoice/invoice.json', null, {
            get: {method: 'get'}
        });

        api.mail = {
            inbox: $resource(api.dataUrl + 'mail/inbox.json', null, {
                get: {method: 'get'}
            })
        };

        api.notes = $resource(api.dataUrl + 'notifications/notes.json', null, {
            get: {method: 'get'}
        });

        api.profile = {
            timeline    : $resource(api.dataUrl + 'profile/timeline.json', null, {
                get: {method: 'get'}
            }),
            about       : $resource(api.dataUrl + 'profile/about.json', null, {
                get: {method: 'get'}
            }),
            photosVideos: $resource(api.dataUrl + 'profile/photos-videos.json', null, {
                get: {method: 'get'}
            })
        };

        api.search = {
            classic : $resource(api.dataUrl + 'search/classic.json', null, {
                get: {method: 'get'}
            }),
            mails   : $resource(api.dataUrl + 'search/mails.json', null, {
                get: {method: 'get'}
            }),
            users   : $resource(api.dataUrl + 'search/users.json', null, {
                get: {method: 'get'}
            }),
            contacts: $resource(api.dataUrl + 'search/contacts.json', null, {
                get: {method: 'get'}
            })
        };

        api.tables = {
            employees   : $resource(api.dataUrl + 'tables/employees.json', null, {
                get: {method: 'get'}
            }),
            employees100: $resource(api.dataUrl + 'tables/employees100.json', null, {
                get: {method: 'get'}
            })
        };

        api.timeline = $resource(api.dataUrl + 'timeline/timeline.json', null, {
            get: {method: 'get'}
        });

        api.todo = {
            tasks: $resource(api.dataUrl + 'todo/tasks.json', null, {
                get: {method: 'get'}
            }),
            tags : $resource(api.dataUrl + 'todo/tags.json', null, {
                get: {method: 'get'}
            })
        };

        return api;
    }

    /** @ngInject */
    function apiResolverService($q, api)
    {
        var service = {
            resolve: resolve
        };

        return service;

        //////////
        /**
         * Resolve api
         * @param action
         * @param parameters
         */
        function resolve(action, parameters)
        {
            var actionParts = action.split('@'),
                resource = actionParts[0],
                method = actionParts[1],
                params = parameters || {};

            if ( !resource || !method )
            {
                console.error('apiResolver.resolve requires correct action parameter (ResourceName@methodName)');
                return false;
            }

            // Create a new deferred object
            var deferred = $q.defer();

            // Get the correct api object from api service
            var apiObject = getApiObject(resource);

            if ( !apiObject )
            {
                console.error('Resource "' + resource + '" is not defined in the api service!');
                deferred.reject('Resource "' + resource + '" is not defined in the api service!');
            }
            else
            {
                apiObject[method](params,

                    // Success
                    function (response)
                    {
                        deferred.resolve(response);
                    },

                    // Error
                    function (response)
                    {
                        deferred.reject(response);
                    }
                );
            }

            // Return the promise
            return deferred.promise;
        }

        /**
         * Get correct api object
         *
         * @param resource
         * @returns {*}
         */
        function getApiObject(resource)
        {
            // Split the resource in case if we have a dot notated object
            var resourceParts = resource.split('.'),
                apiObject = api;

            // Loop through the resource parts and go all the way through
            // the api object and return the correct one
            for ( var l = 0; l < resourceParts.length; l++ )
            {
                if ( angular.isUndefined(apiObject[resourceParts[l]]) )
                {
                    console.error('Resource part "' + resourceParts[l] + '" is not defined!');
                    apiObject = false;
                    break;
                }

                apiObject = apiObject[resourceParts[l]];
            }

            if ( !apiObject )
            {
                return false;
            }

            return apiObject;
        }
    }

})();