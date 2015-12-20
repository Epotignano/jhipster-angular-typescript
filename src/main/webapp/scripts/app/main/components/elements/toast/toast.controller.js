(function ()
{
    'use strict';

    angular
        .module('app.components.elements.toast')
        .controller('ToastController', ToastController);

    /** @ngInject */
    function ToastController($mdToast)
    {
        var vm = this;

        // Data

        // Methods
        vm.showSimpleToast = showSimpleToast;
        vm.showActionToast = showActionToast;
        vm.showCustomToast = showCustomToast;

        //////////
        function showSimpleToast()
        {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .position('top right')
                    .hideDelay(3000)
            );
        }

        function showActionToast()
        {
            var toast = $mdToast.simple()
                .content('Action Toast!')
                .action('OK')
                .highlightAction(false)
                .position('top left');
            $mdToast.show(toast).then(function ()
            {
                alert('You clicked \'OK\'.');
            });
        }

        function showCustomToast()
        {
            $mdToast.show({
                controller : ToastCtrl,
                templateUrl: 'toast-template.html',
                hideDelay  : 6000,
                position   : 'bottom right'
            });
        }

        function ToastCtrl($scope, $mdToast)
        {
            $scope.closeToast = function ()
            {
                $mdToast.hide();
            };
        }
    }

})();