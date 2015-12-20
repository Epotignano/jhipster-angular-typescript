(function ()
{
    'use strict';

    angular
        .module('app.components.elements.sidenav')
        .controller('SidenavController', SidenavController);

    /** @ngInject */
    function SidenavController($mdSidenav)
    {
        var vm = this;

        // Data

        // Methods
        vm.toggleLeftSidenav = toggleLeftSidenav;
        vm.toggleLeftSidenavLocked = toggleLeftSidenavLocked;
        vm.toggleRightSidenav = toggleRightSidenav;

        //////////

        function toggleLeftSidenav()
        {
            $mdSidenav('left-sidenav').toggle();
        }


        function toggleLeftSidenavLocked()
        {
            $mdSidenav('left-sidenav-locked').toggle();
        }

        function toggleRightSidenav()
        {
            $mdSidenav('right-sidenav').toggle();
        }
    }

})();