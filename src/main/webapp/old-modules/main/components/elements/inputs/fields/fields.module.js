(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.fields', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_fields', {
            url  : '/components/elements/inputs/fields',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/fields/fields.html',
                    controller : 'FieldsController as vm'
                }
            }
        });
    }

})();