(function ()
{
    'use strict';

    angular
        .module('app.components.elements.menu')
        .controller('MenuController', MenuController);

    function MenuController($mdDialog)
    {
        var vm = this;

        // Data
        vm.notificationsEnabled = true;

        // Methods
        vm.toggleNotifications = toggleNotifications;
        vm.redial = redial;
        vm.checkVoicemail = checkVoicemail;

        //////////

        function toggleNotifications()
        {
            vm.notificationsEnabled = !vm.notificationsEnabled;
        }

        function redial(e)
        {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Suddenly, a redial')
                    .content('You just called someone back. They told you the most amazing story that has ever been told. Have a cookie.')
                    .ok('That was easy')
            );
        }

        function checkVoicemail()
        {
            // This never happens.
        }
    }

})();