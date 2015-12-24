/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                abstract: true,
                resolve: {
                    servicesDependencies: function (ToasterService) {
                        return true;
                    },
                },
                url: '/app',
                views: {
                    'main@': {
                        templateUrl: 'scripts/app/core/layouts/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'scripts/components/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'scripts/components/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    }
                }
            });
            $urlRouterProvider.otherwise('/app/dashboard');
        }
        return RouterConfig;
    })();
    Onesnap.RouterConfig = RouterConfig;
    angular.module('springTestApp').config(RouterConfig);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sT0FBTyxDQXdDYjtBQXhDRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBQ2RBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLFlBQVlBO1FBQ3ZCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFDcENBLGtCQUE0Q0E7WUFDeERDLGNBQWNBLENBQ1RBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO2dCQUNaQSxRQUFRQSxFQUFFQSxJQUFJQTtnQkFDZEEsT0FBT0EsRUFBRUE7b0JBQ1BBLG9CQUFvQkEsRUFBR0EsVUFBU0EsY0FBY0E7d0JBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztpQkFDRkE7Z0JBQ0RBLEdBQUdBLEVBQUVBLE1BQU1BO2dCQUNYQSxLQUFLQSxFQUFLQTtvQkFDUkEsT0FBT0EsRUFBV0E7d0JBQ2hCQSxXQUFXQSxFQUFFQSx1Q0FBdUNBO3FCQUNyREE7b0JBQ0RBLGFBQWFBLEVBQUVBO3dCQUNiQSxXQUFXQSxFQUFFQSx5Q0FBeUNBO3dCQUN0REEsVUFBVUEsRUFBR0EseUJBQXlCQTtxQkFDdkNBO29CQUNEQSxnQkFBZ0JBLEVBQUVBO3dCQUNoQkEsV0FBV0EsRUFBRUEsdURBQXVEQTt3QkFDcEVBLFVBQVVBLEVBQUdBLDRCQUE0QkE7cUJBQzFDQTtpQkFDRkE7YUFDRkEsQ0FBQ0EsQ0FBQ0E7WUFHTEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBRWpEQSxDQUFDQTtRQUVIRCxtQkFBQ0E7SUFBREEsQ0FqQ0FELEFBaUNDQyxJQUFBRDtJQWpDWUEsb0JBQVlBLEdBQVpBLFlBaUNaQSxDQUFBQTtJQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUM1QkEsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7QUFDMUJBLENBQUNBLEVBeENNLE9BQU8sS0FBUCxPQUFPLFFBd0NiIiwiZmlsZSI6ImluZGV4LnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOiBuZy51aS5JVXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgc2VydmljZXNEZXBlbmRlbmNpZXMgOiBmdW5jdGlvbihUb2FzdGVyU2VydmljZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVybDogJy9hcHAnLFxyXG4gICAgICAgICAgdmlld3MgICA6IHtcclxuICAgICAgICAgICAgJ21haW5AJyAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ1Rvb2xiYXJDb250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvbXBvbmVudHMvc2lkZW5hdi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdOYXZpZ2F0aW9uQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3NwcmluZ1Rlc3RBcHAnKVxyXG4gICAgLmNvbmZpZyhSb3V0ZXJDb25maWcpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==