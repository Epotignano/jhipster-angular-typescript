(function ()
{
    'use strict';

    angular
        .module('app.components.elements.menu', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_menu', {
            url  : '/components/elements/menu',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/menu/menu.html',
                    controller : 'MenuController as vm'
                }
            }
        });
    }

})();