(function ()
{
    'use strict';

    angular
        .module('app.navigation')
        .controller('NavigationController', NavigationController);

    /** @ngInject */
    function NavigationController()
    {
        var vm = this;
         //vm.menu = SettingsService.getSideMenu();
        // Data
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods

        //////////
    }

})();


