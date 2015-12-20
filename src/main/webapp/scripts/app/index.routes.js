/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                url: '/app',
                views: {
                    'main@': {
                        templateUrl: 'scripts/core/layouts/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'scripts/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'scripts/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    }
                }
            });
            $urlRouterProvider.otherwise('/app');
            // commons translations
        }
        return RouterConfig;
    })();
    Onesnap.RouterConfig = RouterConfig;
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sT0FBTyxDQWlDYjtBQWpDRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBQ2RBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLFlBQVlBO1FBQ3ZCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFDcENBLGtCQUE0Q0E7WUFDeERDLGNBQWNBLENBQ1RBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO2dCQUNaQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsS0FBS0EsRUFBS0E7b0JBQ1JBLE9BQU9BLEVBQVdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsbUNBQW1DQTtxQkFDakRBO29CQUNEQSxhQUFhQSxFQUFFQTt3QkFDYkEsV0FBV0EsRUFBRUEsOEJBQThCQTt3QkFDM0NBLFVBQVVBLEVBQUdBLHlCQUF5QkE7cUJBQ3ZDQTtvQkFDREEsZ0JBQWdCQSxFQUFFQTt3QkFDaEJBLFdBQVdBLEVBQUVBLDRDQUE0Q0E7d0JBQ3pEQSxVQUFVQSxFQUFHQSw0QkFBNEJBO3FCQUMxQ0E7aUJBQ0ZBO2FBQ0ZBLENBQUNBLENBQUNBO1lBR0xBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFckNBLHVCQUF1QkE7UUFFekJBLENBQUNBO1FBRUhELG1CQUFDQTtJQUFEQSxDQTdCQUQsQUE2QkNDLElBQUFEO0lBN0JZQSxvQkFBWUEsR0FBWkEsWUE2QlpBLENBQUFBO0FBQ0hBLENBQUNBLEVBakNNLE9BQU8sS0FBUCxPQUFPLFFBaUNiIiwiZmlsZSI6ImluZGV4LnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSb3V0ZXJDb25maWcge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOiBuZy51aS5JVXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XHJcbiAgICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICAgIHZpZXdzICAgOiB7XHJcbiAgICAgICAgICAgICdtYWluQCcgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy90b29sYmFyL3Rvb2xiYXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdUb29sYmFyQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ25hdmlnYXRpb25AYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9zaWRlbmF2L25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ05hdmlnYXRpb25Db250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcCcpO1xyXG5cclxuICAgICAgLy8gY29tbW9ucyB0cmFuc2xhdGlvbnNcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=