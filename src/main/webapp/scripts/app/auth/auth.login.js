/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (_Auth) {
        'use strict';
        var LoginController = (function () {
            function LoginController(Auth, $state) {
                this.Auth = Auth;
                this.$state = $state;
            }
            LoginController.prototype.signIn = function () {
                var _this = this;
                this.Auth.login({
                    email: this.credentials.email,
                    password: this.credentials.password,
                    rememberMe: this.credentials.rememberMe
                }).then(function (result) {
                    _this.$state.go('app.dashboard');
                }).catch(function (err) {
                    _this.err = err.data;
                });
            };
            LoginController.$inject = ['Auth', '$state'];
            return LoginController;
        })();
        _Auth.LoginController = LoginController;
        angular.module('onesnap.auth').controller('OnesnapLoginController', LoginController);
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5sb2dpbi50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5BdXRoIiwiT25lc25hcC5BdXRoLkxvZ2luQ29udHJvbGxlciIsIk9uZXNuYXAuQXV0aC5Mb2dpbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguTG9naW5Db250cm9sbGVyLnNpZ25JbiJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xELHdDQUF3QztBQUV4QyxJQUFPLE9BQU8sQ0FtQ2I7QUFuQ0QsV0FBTyxPQUFPO0lBQUNBLElBQUFBLElBQUlBLENBbUNsQkE7SUFuQ2NBLFdBQUFBLEtBQUlBLEVBQUNBLENBQUNBO1FBQ3BCQyxZQUFZQSxDQUFDQTtRQU9iQSxJQUFhQSxlQUFlQTtZQUszQkMsU0FMWUEsZUFBZUEsQ0FLUEEsSUFBSUEsRUFBVUEsTUFBNEJBO2dCQUExQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBQUE7Z0JBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQXNCQTtZQUFHQSxDQUFDQTtZQUVsRUQsZ0NBQU1BLEdBQU5BO2dCQUFBRSxpQkFhQ0E7Z0JBWkFBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO29CQUNmQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQTtvQkFDN0JBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBO29CQUNuQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsVUFBVUE7aUJBQ3ZDQSxDQUFDQSxDQUNEQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFNQTtvQkFDWkEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxVQUFDQSxHQUFHQTtvQkFDVkEsS0FBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUNIQSxDQUFDQTtZQW5CTUYsdUJBQU9BLEdBQWtCQSxDQUFDQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtZQXFCcERBLHNCQUFDQTtRQUFEQSxDQXRCQUQsQUFzQkNDLElBQUFEO1FBdEJZQSxxQkFBZUEsR0FBZkEsZUFzQlpBLENBQUFBO1FBRURBLE9BQU9BLENBQ0xBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQ3RCQSxVQUFVQSxDQUFDQSx3QkFBd0JBLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQSxFQW5DY0QsSUFBSUEsR0FBSkEsWUFBSUEsS0FBSkEsWUFBSUEsUUFtQ2xCQTtBQUFEQSxDQUFDQSxFQW5DTSxPQUFPLEtBQVAsT0FBTyxRQW1DYiIsImZpbGUiOiJhdXRoL2F1dGgubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhdXRoLmNsYXNzZXMudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpbnRlcmZhY2UgSUxvZ2luQ29udHJvbGxlciB7XHJcblx0XHRzaWduSW4oY3JlZGVudGlhbHMgOiBMb2dpbkNyZWRlbnRpYWxzKTtcclxuXHR9XHJcblxyXG5cclxuXHRleHBvcnQgY2xhc3MgTG9naW5Db250cm9sbGVyIGltcGxlbWVudHMgSUxvZ2luQ29udHJvbGxlciB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnQXV0aCcsICckc3RhdGUnXTtcclxuXHRcdHB1YmxpYyBjcmVkZW50aWFscyA6IExvZ2luQ3JlZGVudGlhbHM7XHJcblx0XHRwdWJsaWMgZXJyIDogYW55O1xyXG5cdFx0XHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIEF1dGgsIHByaXZhdGUgJHN0YXRlIDogbmcudWkuSVN0YXRlU2VydmljZSkge31cclxuXHRcdFxyXG5cdFx0c2lnbkluKCkge1xyXG5cdFx0XHR0aGlzLkF1dGgubG9naW4oe1xyXG5cdFx0XHRcdGVtYWlsOiB0aGlzLmNyZWRlbnRpYWxzLmVtYWlsLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG5cdFx0XHRcdHJlbWVtYmVyTWU6IHRoaXMuY3JlZGVudGlhbHMucmVtZW1iZXJNZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy4kc3RhdGUuZ28oJ2FwcC5kYXNoYm9hcmQnKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdC5jYXRjaCgoZXJyKT0+IHtcclxuXHRcdFx0XHR0aGlzLmVyciA9IGVyci5kYXRhO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0XHRcdFxyXG5cdH1cclxuXHJcblx0YW5ndWxhclxyXG5cdFx0Lm1vZHVsZSgnb25lc25hcC5hdXRoJylcclxuXHRcdC5jb250cm9sbGVyKCdPbmVzbmFwTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==