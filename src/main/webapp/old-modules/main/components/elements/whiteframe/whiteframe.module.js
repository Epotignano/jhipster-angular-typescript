(function ()
{
    'use strict';

    angular
        .module('app.components.elements.whiteframe', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_whiteframe', {
            url  : '/components/elements/whiteframe',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/whiteframe/whiteframe.html'
                }
            }
        });
    }

})();