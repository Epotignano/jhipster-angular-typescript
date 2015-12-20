(function ()
{
    'use strict';

    angular
        .module('app.components.elements.progress-circular', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_progress-circular', {
            url  : '/components/elements/progress-circular',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/progress-circular/progress-circular.html',
                    controller : 'ProgressCircularController as vm'
                }
            }
        });
    }

})();