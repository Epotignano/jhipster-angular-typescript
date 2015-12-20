(function ()
{
    'use strict';

    angular
        .module('app.components.elements.dialog', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_dialog', {
            url  : '/components/elements/dialog',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/dialog/dialog.html',
                    controller : 'DialogController as vm'
                }
            }
        });
    }

})();