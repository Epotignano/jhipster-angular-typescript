(function ()
{
    'use strict';

    angular
        .module('app.components.elements.swipe', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_swipe', {
            url  : '/components/elements/swipe',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/swipe/swipe.html',
                    controller : 'SwipeController as vm'
                }
            }
        });
    }

})();