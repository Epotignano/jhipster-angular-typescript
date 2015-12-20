(function ()
{
    'use strict';

    angular
        .module('app.components.elements.bottom-sheet', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_bottom-sheet', {
            url  : '/components/elements/bottom-sheet',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/bottom-sheet/bottom-sheet.html',
                    controller : 'BottomSheetController as vm'
                }
            }
        });
    }

})();