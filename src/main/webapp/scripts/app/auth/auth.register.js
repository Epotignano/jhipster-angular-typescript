/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="auth.classes.ts" />
var Onesnap;
(function (Onesnap) {
    var Auth;
    (function (_Auth) {
        var RegisterController = (function () {
            function RegisterController(Auth) {
                this.Auth = Auth;
            }
            RegisterController.prototype.signUp = function (userCredentials) {
                this.Auth.createAccount(userCredentials).then(function (result) {
                    alert('OK!');
                }).catch(function (err) {
                    console.log(err);
                });
            };
            return RegisterController;
        })();
        _Auth.RegisterController = RegisterController;
        angular.module('onesnap.auth').controller('OnesnapRegisterController', RegisterController);
    })(Auth = Onesnap.Auth || (Onesnap.Auth = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5yZWdpc3Rlci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5BdXRoIiwiT25lc25hcC5BdXRoLlJlZ2lzdGVyQ29udHJvbGxlciIsIk9uZXNuYXAuQXV0aC5SZWdpc3RlckNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJPbmVzbmFwLkF1dGguUmVnaXN0ZXJDb250cm9sbGVyLnNpZ25VcCJdLCJtYXBwaW5ncyI6IkFBQUEsQUFFQSxrREFGa0Q7QUFDbEQsd0NBQXdDO0FBQ3hDLElBQU8sT0FBTyxDQXVCYjtBQXZCRCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsSUFBSUEsQ0F1QmxCQTtJQXZCY0EsV0FBQUEsS0FBSUEsRUFBQ0EsQ0FBQ0E7UUFNcEJDLElBQWFBLGtCQUFrQkE7WUFDOUJDLFNBRFlBLGtCQUFrQkEsQ0FDVkEsSUFBSUE7Z0JBQUpDLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO1lBQUlBLENBQUNBO1lBQzdCRCxtQ0FBTUEsR0FBTkEsVUFBT0EsZUFBZ0NBO2dCQUN0Q0UsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FDdENBLElBQUlBLENBQUNBLFVBQUNBLE1BQU1BO29CQUNaQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDZEEsQ0FBQ0EsQ0FBQ0EsQ0FDREEsS0FBS0EsQ0FBQ0EsVUFBQ0EsR0FBR0E7b0JBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFDSkEsQ0FBQ0E7WUFFRkYseUJBQUNBO1FBQURBLENBWkFELEFBWUNDLElBQUFEO1FBWllBLHdCQUFrQkEsR0FBbEJBLGtCQVlaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUNMQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUN0QkEsVUFBVUEsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO0lBQy9EQSxDQUFDQSxFQXZCY0QsSUFBSUEsR0FBSkEsWUFBSUEsS0FBSkEsWUFBSUEsUUF1QmxCQTtBQUFEQSxDQUFDQSxFQXZCTSxPQUFPLEtBQVAsT0FBTyxRQXVCYiIsImZpbGUiOiJhdXRoL2F1dGgucmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJhdXRoLmNsYXNzZXMudHNcIiAvPlxyXG5tb2R1bGUgT25lc25hcC5BdXRoIHtcclxuXHJcblx0aW50ZXJmYWNlIElSZWdpc3RlciB7XHJcblx0XHRzaWduVXAodXNlckNyZWRlbnRpYWxzOiBVc2VyQ3JlZGVudGlhbHMpXHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVnaXN0ZXJDb250cm9sbGVyIGltcGxlbWVudHMgSVJlZ2lzdGVyIHtcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgQXV0aCkgeyB9XHJcblx0XHRzaWduVXAodXNlckNyZWRlbnRpYWxzOiBVc2VyQ3JlZGVudGlhbHMpIHtcclxuXHRcdFx0dGhpcy5BdXRoLmNyZWF0ZUFjY291bnQodXNlckNyZWRlbnRpYWxzKVxyXG5cdFx0XHRcdC50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGFsZXJ0KCdPSyEnKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRcclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdvbmVzbmFwLmF1dGgnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ09uZXNuYXBSZWdpc3RlckNvbnRyb2xsZXInLCBSZWdpc3RlckNvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9