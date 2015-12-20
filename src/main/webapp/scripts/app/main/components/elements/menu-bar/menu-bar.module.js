(function ()
{
    'use strict';

    angular
        .module('app.components.elements.menu-bar', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_menu_bar', {
            url  : '/components/elements/menu-bar',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/menu-bar/menu-bar.html',
                    controller : 'ElementMenuBarController as vm'
                }
            }
        });
    }

})();