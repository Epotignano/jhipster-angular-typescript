(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.select', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_select', {
            url  : '/components/elements/inputs/select',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/select/select.html',
                    controller : 'SelectController as vm'
                }
            }
        });
    }

})();