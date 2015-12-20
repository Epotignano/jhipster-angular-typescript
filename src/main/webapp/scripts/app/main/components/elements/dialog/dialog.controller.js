(function ()
{
    'use strict';

    angular
        .module('app.components.elements.dialog')
        .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController($mdDialog)
    {
        var vm = this;

        // Data
        vm.alert = '';

        // Methods
        vm.showAdvanced = showAdvanced;
        vm.showAlert = showAlert;
        vm.showConfirm = showConfirm;

        //////////

        function showAlert(ev)
        {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('This is an alert title')
                    .content('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        }

        function showConfirm(ev)
        {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .parent(angular.element(document.body))
                .title('Would you like to delete your debt?')
                .content('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                .ok('Please do it!')
                .cancel('Sounds like a scam')
                .targetEvent(ev);
            $mdDialog.show(confirm).then(function ()
            {
                vm.alert = 'You decided to get rid of your debt.';
            }, function ()
            {
                vm.alert = 'You decided to keep your debt.';
            });
        }

        function showAdvanced(ev)
        {
            $mdDialog.show({
                controller         : function ($scope, $mdDialog)
                {
                    $scope.hide = function ()
                    {
                        $mdDialog.hide();
                    };

                    $scope.cancel = function ()
                    {
                        $mdDialog.cancel();
                    };

                    $scope.answer = function (answer)
                    {
                        $mdDialog.hide(answer);
                    };
                },
                templateUrl        : 'dialog1.tmpl.html',
                parent             : angular.element(document.body),
                targetEvent        : ev,
                clickOutsideToClose: true
            })
                .then(function (answer)
                {
                    vm.alert = 'You said the information was "' + answer + '".';
                }, function ()
                {
                    vm.alert = 'You cancelled the dialog.';
                });
        }
    }

})();