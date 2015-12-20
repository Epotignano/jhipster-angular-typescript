(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.checkbox', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_checkbox', {
            url  : '/components/elements/inputs/checkbox',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/checkbox/checkbox.html',
                    controller : 'CheckboxController as vm'
                }
            }
        });
    }

})();