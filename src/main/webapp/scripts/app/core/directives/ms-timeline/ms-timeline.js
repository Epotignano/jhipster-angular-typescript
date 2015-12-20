(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msTimeline', msTimelineDirective);

    /** @ngInject */
    function msTimelineDirective()
    {
        return {
            scope  : true,
            compile: function (tElement)
            {
                tElement.addClass('ms-timeline');

                return function postLink(scope, iElement)
                {
                    var scrollEl = angular.element('#content > md-content');

                    // Set the timelineItemLimit
                    scope.timelineItemLimit = 1;

                    scope.$on('msCard::cardTemplateLoaded', function (event, args)
                    {
                        var cardEl = angular.element(args[0]);

                        // Test the cardEl for the existence of an image element(s)
                        var imageEl = cardEl.find('img');

                        // If there are images, wait for them to load before doing anything else
                        if ( imageEl.length > 0 )
                        {
                            imageEl.on('load', function ()
                            {
                                // Increase the limit if needed
                                if ( shouldIncreaseLimit() )
                                {
                                    scope.$evalAsync(function ()
                                    {
                                        scope.timelineItemLimit++;
                                    });
                                }
                            });

                            // Cleanup
                            scope.$on('$destroy', function ()
                            {
                                imageEl.off('load');
                            });
                        }
                        else
                        {
                            // Increase the limit if needed
                            if ( shouldIncreaseLimit() )
                            {
                                scope.$evalAsync(function ()
                                {
                                    scope.timelineItemLimit++;
                                });
                            }
                        }
                    });

                    // Increase the limit onScroll if needed
                    scrollEl.on('scroll', function ()
                    {

                        if ( Math.ceil(scrollEl.scrollTop() + scrollEl.height()) >= iElement.outerHeight() )
                        {
                            scope.$evalAsync(function ()
                            {
                                scope.timelineItemLimit++;
                            });
                        }
                    });

                    /**
                     * Test if the limit should be increased
                     *
                     * @returns {boolean}
                     */
                    function shouldIncreaseLimit()
                    {
                        return (iElement.outerHeight() <= scrollEl.height());
                    }

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        scrollEl.off('scroll');
                    });
                };
            }
        };
    }
})();