(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.autocomplete', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_autocomplete', {
            url  : '/components/elements/inputs/autocomplete',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/autocomplete/autocomplete.html',
                    controller : 'AutocompleteController as vm'
                }
            }
        });
    }

})();