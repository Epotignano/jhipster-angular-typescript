(function ()
{
    'use strict';

    angular
        .module('app.components.elements.fab-toolbar', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_fab-toolbar', {
            url  : '/components/elements/fab-toolbar',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/fab-toolbar/fab-toolbar.html',
                    controller : 'FabToolbarController as vm'
                }
            }
        });
    }

})();