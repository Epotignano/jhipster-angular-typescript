(function ()
{
    'use strict';

    angular
        .module('app.components.elements.sidenav', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_sidenav', {
            url  : '/components/elements/sidenav',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/sidenav/sidenav.html',
                    controller : 'SidenavController as vm'
                }
            }
        });
    }

})();