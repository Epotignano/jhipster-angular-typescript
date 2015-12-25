/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="commons/toaster.service.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                abstract: true,
                resolve: {
                    servicesDependencies: ['ToasterService', function (ToasterService) {
                        console.log(ToasterService);
                        return true;
                    }],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLG1EQUFtRDtBQUVuRCxJQUFPLE9BQU8sQ0F5Q2I7QUF6Q0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFhQSxZQUFZQTtRQUN2QkMsZ0JBQWdCQTtRQUNoQkEsU0FGV0EsWUFBWUEsQ0FFWEEsY0FBb0NBLEVBQ3BDQSxrQkFBNENBO1lBQ3hEQyxjQUFjQSxDQUNUQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQTtnQkFDWkEsUUFBUUEsRUFBRUEsSUFBSUE7Z0JBQ2RBLE9BQU9BLEVBQUVBO29CQUNQQSxvQkFBb0JBLEVBQUdBLENBQUNBLGdCQUFnQkEsRUFBRUEsVUFBVUEsY0FBdUNBO3dCQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO3dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUMsQ0FBQ0E7aUJBQ0hBO2dCQUNEQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsS0FBS0EsRUFBS0E7b0JBQ1JBLE9BQU9BLEVBQVdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsdUNBQXVDQTtxQkFDckRBO29CQUNEQSxhQUFhQSxFQUFFQTt3QkFDYkEsV0FBV0EsRUFBRUEseUNBQXlDQTt3QkFDdERBLFVBQVVBLEVBQUdBLHlCQUF5QkE7cUJBQ3ZDQTtvQkFDREEsZ0JBQWdCQSxFQUFFQTt3QkFDaEJBLFdBQVdBLEVBQUVBLHVEQUF1REE7d0JBQ3BFQSxVQUFVQSxFQUFHQSw0QkFBNEJBO3FCQUMxQ0E7aUJBQ0ZBO2FBQ0ZBLENBQUNBLENBQUNBO1lBR0xBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtRQUVqREEsQ0FBQ0E7UUFFSEQsbUJBQUNBO0lBQURBLENBbENBRCxBQWtDQ0MsSUFBQUQ7SUFsQ1lBLG9CQUFZQSxHQUFaQSxZQWtDWkEsQ0FBQUE7SUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FDNUJBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0FBQzFCQSxDQUFDQSxFQXpDTSxPQUFPLEtBQVAsT0FBTyxRQXlDYiIsImZpbGUiOiJpbmRleC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb21tb25zL3RvYXN0ZXIuc2VydmljZS50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcCB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcixcclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlcjogbmcudWkuSVVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzRGVwZW5kZW5jaWVzIDogWydUb2FzdGVyU2VydmljZScsIGZ1bmN0aW9uKCBUb2FzdGVyU2VydmljZSA6IE9uZXNuYXAuVG9hc3RlclNlcnZpY2UgKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUb2FzdGVyU2VydmljZSlcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfV0gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVybDogJy9hcHAnLFxyXG4gICAgICAgICAgdmlld3MgICA6IHtcclxuICAgICAgICAgICAgJ21haW5AJyAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvY29yZS9sYXlvdXRzL2RlZmF1bHQuaHRtbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Rvb2xiYXJAYXBwJzoge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ1Rvb2xiYXJDb250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvbXBvbmVudHMvc2lkZW5hdi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdOYXZpZ2F0aW9uQ29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9hcHAvZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3NwcmluZ1Rlc3RBcHAnKVxyXG4gICAgLmNvbmZpZyhSb3V0ZXJDb25maWcpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==