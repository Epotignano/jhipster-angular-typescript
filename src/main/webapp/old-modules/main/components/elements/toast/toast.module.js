(function ()
{
    'use strict';

    angular
        .module('app.components.elements.toast', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_toast', {
            url  : '/components/elements/toast',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/toast/toast.html',
                    controller : 'ToastController as vm'
                }
            }
        });
    }

})();