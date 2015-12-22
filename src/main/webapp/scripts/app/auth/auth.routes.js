/**
 * Created by mmasuyama on 10/21/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (Auth) {
        'use strict';
        var RouterConfig = (function () {
            /** @ngInject */
            function RouterConfig($stateProvider, $translatePartialLoaderProvider) {
                $stateProvider.state('access', {
                    abstract: true,
                    url: '/access',
                    views: {
                        'main@': {
                            templateUrl: 'scripts/app/core/layouts/basic.html'
                        }
                    }
                });
                $stateProvider.state('access.pages_auth_login', {
                    url: '/login',
                    views: {
                        'content': {
                            templateUrl: 'scripts/app/auth/auth.login.html',
                            controller: 'OnesnapLoginController',
                            controllerAs: 'vm'
                        }
                    }
                });
                $stateProvider.state('access.pages_auth_register', {
                    url: '/register',
                    views: {
                        'content': {
                            templateUrl: 'scripts/app/auth/auth.register.html',
                            controller: 'OnesnapRegisterController',
                            controllerAs: 'vm'
                        }
                    }
                });
                //$translatePartialLoaderProvider.addPart('app/auth');
            }
            return RouterConfig;
        })();
        Auth.RouterConfig = RouterConfig;
        angular.module('onesnap.auth').config(RouterConfig);
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5yb3V0ZXMudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQXV0aCIsIk9uZXNuYXAuQXV0aC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkF1dGguUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILEFBRUEsa0RBRmtEO0FBRWxELElBQU8sT0FBTyxDQWdEYjtBQWhERCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsSUFBSUEsQ0FnRGxCQTtJQWhEY0EsV0FBQUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7UUFDbkJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLFlBQVlBO1lBQ3ZCQyxnQkFBZ0JBO1lBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFBRUEsK0JBQStCQTtnQkFFL0VDLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBO29CQUM3QkEsUUFBUUEsRUFBRUEsSUFBSUE7b0JBQ2RBLEdBQUdBLEVBQUVBLFNBQVNBO29CQUNkQSxLQUFLQSxFQUFFQTt3QkFDTEEsT0FBT0EsRUFBRUE7NEJBQ1BBLFdBQVdBLEVBQUVBLHFDQUFxQ0E7eUJBQ25EQTtxQkFDRkE7aUJBQ0ZBLENBQUNBLENBQUNBO2dCQUdIQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSx5QkFBeUJBLEVBQUVBO29CQUM5Q0EsR0FBR0EsRUFBRUEsUUFBUUE7b0JBQ2JBLEtBQUtBLEVBQUVBO3dCQUNMQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEsa0NBQWtDQTs0QkFDL0NBLFVBQVVBLEVBQUVBLHdCQUF3QkE7NEJBQ3BDQSxZQUFZQSxFQUFFQSxJQUFJQTt5QkFDbkJBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLDRCQUE0QkEsRUFBRUE7b0JBQ2pEQSxHQUFHQSxFQUFFQSxXQUFXQTtvQkFDaEJBLEtBQUtBLEVBQUVBO3dCQUNMQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEscUNBQXFDQTs0QkFDbERBLFVBQVVBLEVBQUVBLDJCQUEyQkE7NEJBQ3ZDQSxZQUFZQSxFQUFFQSxJQUFJQTt5QkFDbkJBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7Z0JBRUhBLHNEQUFzREE7WUFFeERBLENBQUNBO1lBRUhELG1CQUFDQTtRQUFEQSxDQXpDQUQsQUF5Q0NDLElBQUFEO1FBekNZQSxpQkFBWUEsR0FBWkEsWUF5Q1pBLENBQUFBO1FBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQzNCQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFBQTtJQUN6QkEsQ0FBQ0EsRUFoRGNELElBQUlBLEdBQUpBLFlBQUlBLEtBQUpBLFlBQUlBLFFBZ0RsQkE7QUFBREEsQ0FBQ0EsRUFoRE0sT0FBTyxLQUFQLE9BQU8sUUFnRGIiLCJmaWxlIjoiYXV0aC9hdXRoLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMC8yMS8yMDE1LlxyXG4gKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwLkF1dGgge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIsICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhY2Nlc3MnLCB7XHJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgdXJsOiAnL2FjY2VzcycsXHJcbiAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICdtYWluQCc6IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9jb3JlL2xheW91dHMvYmFzaWMuaHRtbCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhY2Nlc3MucGFnZXNfYXV0aF9sb2dpbicsIHtcclxuICAgICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9hdXRoL2F1dGgubG9naW4uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPbmVzbmFwTG9naW5Db250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhY2Nlc3MucGFnZXNfYXV0aF9yZWdpc3RlcicsIHtcclxuICAgICAgICB1cmw6ICcvcmVnaXN0ZXInLFxyXG4gICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAnY29udGVudCc6IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzY3JpcHRzL2FwcC9hdXRoL2F1dGgucmVnaXN0ZXIuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdPbmVzbmFwUmVnaXN0ZXJDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdhcHAvYXV0aCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBhbmd1bGFyLm1vZHVsZSgnb25lc25hcC5hdXRoJylcclxuICAgIC5jb25maWcoUm91dGVyQ29uZmlnKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==