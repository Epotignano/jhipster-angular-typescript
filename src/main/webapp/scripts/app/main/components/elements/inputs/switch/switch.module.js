(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.switch', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_switch', {
            url  : '/components/elements/inputs/switch',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/switch/switch.html',
                    controller : 'SwitchController as vm'
                }
            }
        });
    }

})();