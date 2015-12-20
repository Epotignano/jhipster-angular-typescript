(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.chips', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_chips', {
            url  : '/components/elements/inputs/chips',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/chips/chips.html',
                    controller : 'ChipsController as vm'
                }
            }
        });
    }

})();