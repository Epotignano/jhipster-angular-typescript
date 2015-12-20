(function ()
{
    'use strict';

    angular
        .module('app.components.elements.progress-linear', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_progress-linear', {
            url  : '/components/elements/progress-linear',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/progress-linear/progress-linear.html',
                    controller : 'ProgressLinearController as vm'
                }
            }
        });
    }

})();