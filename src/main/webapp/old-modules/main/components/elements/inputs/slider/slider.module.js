(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.slider', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_inputs_slider', {
            url  : '/components/elements/inputs/slider',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/inputs/slider/slider.html',
                    controller : 'SliderController as vm'
                }
            }
        });
    }

})();