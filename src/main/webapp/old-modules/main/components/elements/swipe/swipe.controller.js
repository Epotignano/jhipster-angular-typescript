(function ()
{
    'use strict';

    angular
        .module('app.components.elements.swipe')
        .controller('SwipeController', SwipeController);

    /** @ngInject */
    function SwipeController($mdDialog)
    {
        var vm = this;
        vm.swipeAction = swipeAction;

        // Data

        // Methods

        //////////

        function swipeAction(direction, ev)
        {
            console.log('asdasd');
            $mdDialog.show($mdDialog.alert()
                    .content('You swiped ' + direction + ' !!')
                    .ok('Great')
                    .targetEvent(ev)
            );
        }

    }

})();