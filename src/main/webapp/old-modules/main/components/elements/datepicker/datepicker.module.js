(function ()
{
    'use strict';

    angular
        .module('app.components.elements.datepicker', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_datepicker', {
            url  : '/components/elements/datepicker',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/datepicker/datepicker.html',
                    controller : 'DatepickerController as vm'
                }
            }
        });
    }

})();