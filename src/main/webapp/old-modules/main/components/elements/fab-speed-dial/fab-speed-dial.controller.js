(function ()
{
    'use strict';

    angular
        .module('app.components.elements.fab-speed-dial')
        .controller('FabSpeedDialController', FabSpeedDialController);

    /** @ngInject */
    function FabSpeedDialController()
    {
        var vm = this;

        // Data
        vm.demo = {
            topDirections      : ['left', 'up'],
            bottomDirections   : ['down', 'right'],
            isOpen             : false,
            availableModes     : ['md-fling', 'md-scale'],
            selectedMode       : 'md-fling',
            availableDirections: ['up', 'down', 'left', 'right'],
            selectedDirection  : 'up'
        };

        // Methods

        //////////

    }

})();