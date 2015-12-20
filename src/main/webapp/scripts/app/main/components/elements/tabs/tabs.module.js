(function ()
{
    'use strict';

    angular
        .module('app.components.elements.tabs', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_tabs', {
            url  : '/components/elements/tabs',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/tabs/tabs.html',
                    controller : 'TabsController as vm'
                }
            }
        });
    }

})();