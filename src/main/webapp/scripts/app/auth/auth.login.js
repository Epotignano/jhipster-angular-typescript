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
                    username: this.credentials.username,
                    password: this.credentials.password,
                    rememberMe: this.credentials.rememberMe
                }).then(function (result) {
                    _this.$state.go('app.dashboard');
                }).catch(function (err) {
                    _this.err = err;
                });
            };
            LoginController.$inject = ['Auth', '$state'];
            return LoginController;
        })();
        _Auth.LoginController = LoginController;
        angular.module('onesnap.auth').controller('OnesnapLoginController', LoginController);
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5sb2dpbi50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5BdXRoIiwiT25lc25hcC5BdXRoLkxvZ2luQ29udHJvbGxlciIsIk9uZXNuYXAuQXV0aC5Mb2dpbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguTG9naW5Db250cm9sbGVyLnNpZ25JbiJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xELHdDQUF3QztBQUV4QyxJQUFPLE9BQU8sQ0FtQ2I7QUFuQ0QsV0FBTyxPQUFPO0lBQUNBLElBQUFBLElBQUlBLENBbUNsQkE7SUFuQ2NBLFdBQUFBLEtBQUlBLEVBQUNBLENBQUNBO1FBQ3BCQyxZQUFZQSxDQUFDQTtRQU9iQSxJQUFhQSxlQUFlQTtZQUszQkMsU0FMWUEsZUFBZUEsQ0FLUEEsSUFBSUEsRUFBVUEsTUFBNEJBO2dCQUExQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBQUE7Z0JBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQXNCQTtZQUFHQSxDQUFDQTtZQUVsRUQsZ0NBQU1BLEdBQU5BO2dCQUFBRSxpQkFhQ0E7Z0JBWkFBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO29CQUNmQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQTtvQkFDbkNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBO29CQUNuQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsVUFBVUE7aUJBQ3ZDQSxDQUFDQSxDQUNEQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFNQTtvQkFDWkEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQSxDQUFDQSxDQUVEQSxLQUFLQSxDQUFDQSxVQUFDQSxHQUFHQTtvQkFDVkEsS0FBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0E7Z0JBQ2hCQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUNIQSxDQUFDQTtZQW5CTUYsdUJBQU9BLEdBQWtCQSxDQUFDQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtZQXFCcERBLHNCQUFDQTtRQUFEQSxDQXRCQUQsQUFzQkNDLElBQUFEO1FBdEJZQSxxQkFBZUEsR0FBZkEsZUFzQlpBLENBQUFBO1FBRURBLE9BQU9BLENBQ0xBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQ3RCQSxVQUFVQSxDQUFDQSx3QkFBd0JBLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQSxFQW5DY0QsSUFBSUEsR0FBSkEsWUFBSUEsS0FBSkEsWUFBSUEsUUFtQ2xCQTtBQUFEQSxDQUFDQSxFQW5DTSxPQUFPLEtBQVAsT0FBTyxRQW1DYiIsImZpbGUiOiJhdXRoL2F1dGgubG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhdXRoLmNsYXNzZXMudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQXV0aCB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpbnRlcmZhY2UgSUxvZ2luQ29udHJvbGxlciB7XHJcblx0XHRzaWduSW4oY3JlZGVudGlhbHMpOnZvaWQ7XHJcblx0fVxyXG5cclxuXHJcblx0ZXhwb3J0IGNsYXNzIExvZ2luQ29udHJvbGxlciBpbXBsZW1lbnRzIElMb2dpbkNvbnRyb2xsZXIge1xyXG5cdFx0c3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbJ0F1dGgnLCAnJHN0YXRlJ107XHJcblx0XHRwdWJsaWMgY3JlZGVudGlhbHMgOiBMb2dpbkNyZWRlbnRpYWxzO1xyXG5cdFx0cHVibGljIGVyciA6IGFueTtcclxuXHRcdFxyXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBBdXRoLCBwcml2YXRlICRzdGF0ZSA6IG5nLnVpLklTdGF0ZVNlcnZpY2UpIHt9XHJcblx0XHRcclxuXHRcdHNpZ25JbigpIHtcclxuXHRcdFx0dGhpcy5BdXRoLmxvZ2luKHtcclxuXHRcdFx0XHR1c2VybmFtZTogdGhpcy5jcmVkZW50aWFscy51c2VybmFtZSxcclxuXHRcdFx0XHRwYXNzd29yZDogdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCxcclxuXHRcdFx0XHRyZW1lbWJlck1lOiB0aGlzLmNyZWRlbnRpYWxzLnJlbWVtYmVyTWVcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJHN0YXRlLmdvKCdhcHAuZGFzaGJvYXJkJyk7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHQuY2F0Y2goKGVycik9PiB7XHJcblx0XHRcdFx0dGhpcy5lcnIgPSBlcnI7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRcdFx0XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdvbmVzbmFwLmF1dGgnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ09uZXNuYXBMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9