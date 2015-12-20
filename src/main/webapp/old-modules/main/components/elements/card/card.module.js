(function ()
{
    'use strict';

    angular
        .module('app.components.elements.card', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_card', {
            url  : '/components/elements/card',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/card/card.html',
                    controller : 'CardController as vm'
                }
            }
        });
    }

})();