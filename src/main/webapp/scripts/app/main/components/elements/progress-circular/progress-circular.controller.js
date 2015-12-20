(function ()
{
    'use strict';

    angular
        .module('app.components.elements.progress-circular')
        .controller('ProgressCircularController', ProgressCircularController);

    /** @ngInject */
    function ProgressCircularController($interval)
    {
        var vm = this;

        // Data
        vm.determinateValue = 33;

        // Methods

        //////////

        $interval(function ()
        {
            vm.determinateValue += 1;

            if ( vm.determinateValue > 100 )
            {
                vm.determinateValue = 33;
            }
        }, 100, 0, true);
    }

})();