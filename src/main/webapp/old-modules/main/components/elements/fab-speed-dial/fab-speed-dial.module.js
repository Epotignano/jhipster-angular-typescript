(function ()
{
    'use strict';

    angular
        .module('app.components.elements.fab-speed-dial', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_fab-speed-dial', {
            url  : '/components/elements/fab-speed-dial',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/fab-speed-dial/fab-speed-dial.html',
                    controller : 'FabSpeedDialController as vm'
                }
            }
        });
    }

})();