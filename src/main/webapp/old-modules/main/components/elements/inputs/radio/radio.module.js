(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.radio', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_radio', {
            url  : '/components/elements/inputs/radio',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/radio/radio.html',
                    controller : 'RadioController as vm'
                }
            }
        });
    }

})();