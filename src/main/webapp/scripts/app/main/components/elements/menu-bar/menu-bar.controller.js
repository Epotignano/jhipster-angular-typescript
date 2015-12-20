(function ()
{
    'use strict';

    angular
        .module('app.components.elements.menu-bar')
        .filter('keyboardShortcut', keyboardShortcut)
        .controller('ElementMenuBarController', ElementMenuBarController);


    function keyboardShortcut($window)
    {
        return function (str)
        {
            if ( !str )
            {
                return;
            }
            var keys = str.split('-');
            var isOSX = /Mac OS X/.test($window.navigator.userAgent);
            var seperator = (!isOSX || keys.length > 2) ? '+' : '';
            var abbreviations = {
                M: isOSX ? '⌘' : 'Ctrl',
                A: isOSX ? 'Option' : 'Alt',
                S: 'Shift'
            };
            return keys.map(function (key, index)
            {
                var last = index === keys.length - 1;
                return last ? key : abbreviations[key];
            }).join(seperator);
        };
    }

    function ElementMenuBarController($mdDialog)
    {
        var vm = this;
        vm.sampleAction = sampleAction;
        // Data
        vm.settings = {
            printLayout            : true,
            showRuler              : true,
            showSpellingSuggestions: true,
            presentationMode       : 'edit'
        };

        // Methods

        //////////


        function sampleAction(name, ev)
        {
            $mdDialog.show($mdDialog.alert()
                .title(name)
                .content('You triggered the "' + name + '" action')
                .ok('Great')
                .targetEvent(ev)
            );
        }
    }

})();