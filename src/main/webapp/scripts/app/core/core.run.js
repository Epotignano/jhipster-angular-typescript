(function ()
{
    'use strict';

    angular
        .module('app.core')
        .run(runBlock);

    /** @ngInject */
    function runBlock(fuseGenerator, fuseConfig, fuseHelper)
    {
        /**
         * Generate extra classes based on registered themes so we
         * can use same colors with non-angular-material elements
         */
        fuseGenerator.generate();

        /**
         * Disable md-ink-ripple effects on mobile
         * if 'disableMdInkRippleOnMobile' config enabled
         */
        if ( fuseConfig.getConfig('disableMdInkRippleOnMobile') && fuseHelper.isMobile() )
        {
            var body = angular.element(document.body);
            body.attr('md-no-ink', true);
        }
    }
})();