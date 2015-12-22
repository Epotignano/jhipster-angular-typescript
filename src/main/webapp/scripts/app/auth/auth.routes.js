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
                //$translatePartialLoaderProvider.addPart('app/auth');
            }
            return RouterConfig;
        })();
        Auth.RouterConfig = RouterConfig;
        angular.module('onesnap.auth').config(RouterConfig);
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5yb3V0ZXMudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQXV0aCIsIk9uZXNuYXAuQXV0aC5Sb3V0ZXJDb25maWciLCJPbmVzbmFwLkF1dGguUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILEFBRUEsa0RBRmtEO0FBRWxELElBQU8sT0FBTyxDQXFDYjtBQXJDRCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsSUFBSUEsQ0FxQ2xCQTtJQXJDY0EsV0FBQUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7UUFDbkJDLFlBQVlBLENBQUNBO1FBRWJBLElBQWFBLFlBQVlBO1lBQ3ZCQyxnQkFBZ0JBO1lBQ2hCQSxTQUZXQSxZQUFZQSxDQUVYQSxjQUFvQ0EsRUFBRUEsK0JBQStCQTtnQkFFL0VDLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBO29CQUM3QkEsUUFBUUEsRUFBR0EsSUFBSUE7b0JBQ2ZBLEdBQUdBLEVBQUVBLFNBQVNBO29CQUNkQSxLQUFLQSxFQUFFQTt3QkFDTEEsT0FBT0EsRUFBeUJBOzRCQUM5QkEsV0FBV0EsRUFBRUEscUNBQXFDQTt5QkFDbkRBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7Z0JBR0hBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLHlCQUF5QkEsRUFBRUE7b0JBQzlDQSxHQUFHQSxFQUFJQSxRQUFRQTtvQkFDZkEsS0FBS0EsRUFBRUE7d0JBQ0xBLFNBQVNBLEVBQUVBOzRCQUNUQSxXQUFXQSxFQUFFQSxrQ0FBa0NBOzRCQUMvQ0EsVUFBVUEsRUFBRUEsd0JBQXdCQTs0QkFDcENBLFlBQVlBLEVBQUVBLElBQUlBO3lCQUNuQkE7cUJBQ0ZBO2lCQUNGQSxDQUFDQSxDQUFDQTtnQkFFSEEsc0RBQXNEQTtZQUV4REEsQ0FBQ0E7WUFFSEQsbUJBQUNBO1FBQURBLENBOUJBRCxBQThCQ0MsSUFBQUQ7UUE5QllBLGlCQUFZQSxHQUFaQSxZQThCWkEsQ0FBQUE7UUFFQUEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FDOUJBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUFBO0lBQ3ZCQSxDQUFDQSxFQXJDY0QsSUFBSUEsR0FBSkEsWUFBSUEsS0FBSkEsWUFBSUEsUUFxQ2xCQTtBQUFEQSxDQUFDQSxFQXJDTSxPQUFPLEtBQVAsT0FBTyxRQXFDYiIsImZpbGUiOiJhdXRoL2F1dGgucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDEwLzIxLzIwMTUuXHJcbiAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlciwgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FjY2VzcycsIHtcclxuICAgICAgICBhYnN0cmFjdCA6IHRydWUsXHJcbiAgICAgICAgdXJsOiAnL2FjY2VzcycsXHJcbiAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICdtYWluQCcgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NjcmlwdHMvYXBwL2NvcmUvbGF5b3V0cy9iYXNpYy5odG1sJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FjY2Vzcy5wYWdlc19hdXRoX2xvZ2luJywge1xyXG4gICAgICAgIHVybCAgOiAnL2xvZ2luJyxcclxuICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NyaXB0cy9hcHAvYXV0aC9hdXRoLmxvZ2luLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnT25lc25hcExvZ2luQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnYXBwL2F1dGgnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBcdGFuZ3VsYXIubW9kdWxlKCdvbmVzbmFwLmF1dGgnKVxyXG5cdFx0LmNvbmZpZyhSb3V0ZXJDb25maWcpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9