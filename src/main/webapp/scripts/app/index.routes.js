/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                abstract: true,
                /*resolve: {
                  servicesDependencies : function(toasterService){
                    return true;
                  } ,
                },*/
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlcy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBRS9DLElBQU8sT0FBTyxDQXdDYjtBQXhDRCxXQUFPLE9BQU8sRUFBQyxDQUFDO0lBQ2RBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLFlBQVlBO1FBQ3ZCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFDcENBLGtCQUE0Q0E7WUFDeERDLGNBQWNBLENBQ1RBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBO2dCQUNaQSxRQUFRQSxFQUFFQSxJQUFJQTtnQkFDZEEsQUFLQUE7Ozs7b0JBRElBO2dCQUNKQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsS0FBS0EsRUFBS0E7b0JBQ1JBLE9BQU9BLEVBQVdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsdUNBQXVDQTtxQkFDckRBO29CQUNEQSxhQUFhQSxFQUFFQTt3QkFDYkEsV0FBV0EsRUFBRUEseUNBQXlDQTt3QkFDdERBLFVBQVVBLEVBQUdBLHlCQUF5QkE7cUJBQ3ZDQTtvQkFDREEsZ0JBQWdCQSxFQUFFQTt3QkFDaEJBLFdBQVdBLEVBQUVBLHVEQUF1REE7d0JBQ3BFQSxVQUFVQSxFQUFHQSw0QkFBNEJBO3FCQUMxQ0E7aUJBQ0ZBO2FBQ0ZBLENBQUNBLENBQUNBO1lBR0xBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtRQUVqREEsQ0FBQ0E7UUFFSEQsbUJBQUNBO0lBQURBLENBakNBRCxBQWlDQ0MsSUFBQUQ7SUFqQ1lBLG9CQUFZQSxHQUFaQSxZQWlDWkEsQ0FBQUE7SUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FDNUJBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0FBQzFCQSxDQUFDQSxFQXhDTSxPQUFPLEtBQVAsT0FBTyxRQXdDYiIsImZpbGUiOiJpbmRleC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgT25lc25hcCB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlcixcclxuICAgICAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlcjogbmcudWkuSVVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAvKnJlc29sdmU6IHtcclxuICAgICAgICAgICAgc2VydmljZXNEZXBlbmRlbmNpZXMgOiBmdW5jdGlvbih0b2FzdGVyU2VydmljZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgdXJsOiAnL2FwcCcsXHJcbiAgICAgICAgICB2aWV3cyAgIDoge1xyXG4gICAgICAgICAgICAnbWFpbkAnICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9jb3JlL2xheW91dHMvZGVmYXVsdC5odG1sJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndG9vbGJhckBhcHAnOiB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmh0bWwnLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnVG9vbGJhckNvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQGFwcCc6IHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvY29tcG9uZW50cy9zaWRlbmF2L25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ05hdmlnYXRpb25Db250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9kYXNoYm9hcmQnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBhbmd1bGFyLm1vZHVsZSgnc3ByaW5nVGVzdEFwcCcpXHJcbiAgICAuY29uZmlnKFJvdXRlckNvbmZpZyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9