(function ()
{
    'use strict';

    angular
        .module('app.components.elements.buttons', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_buttons', {
            url  : '/components/elements/buttons',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/buttons/buttons.html',
                    controller : 'ButtonsController as vm'
                }
            }
        });
    }

})();