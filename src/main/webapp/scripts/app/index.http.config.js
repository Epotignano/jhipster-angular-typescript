/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var httpConfig = (function () {
        function httpConfig($httpProvider) {
            this.$httpProvider = $httpProvider;
            this.$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
            this.$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
            this.$httpProvider.interceptors.push('errorHandlerInterceptor');
            this.$httpProvider.interceptors.push('authExpiredInterceptor');
            this.$httpProvider.interceptors.push('authInterceptor');
            this.$httpProvider.interceptors.push('rxInterceptorFactory');
        }
        httpConfig.$inject = ['$httpProvider'];
        return httpConfig;
    })();
    Onesnap.httpConfig = httpConfig;
    angular.module('springTestApp').config(httpConfig);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lmh0dHAuY29uZmlnLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLmh0dHBDb25maWciLCJPbmVzbmFwLmh0dHBDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUkvQyxJQUFPLE9BQU8sQ0FxQmI7QUFyQkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNmQSxJQUFhQSxVQUFVQTtRQUd0QkMsU0FIWUEsVUFBVUEsQ0FHRkEsYUFBK0JBO1lBQS9CQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBa0JBO1lBRWxEQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxjQUFjQSxHQUFHQSxZQUFZQSxDQUFDQTtZQUMxREEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7WUFFNURBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLHlCQUF5QkEsQ0FBQ0EsQ0FBQ0E7WUFDaEVBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFHOURBLENBQUNBO1FBYk1ELGtCQUFPQSxHQUFrQkEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFlbkRBLGlCQUFDQTtJQUFEQSxDQWhCQUQsQUFnQkNDLElBQUFEO0lBaEJZQSxrQkFBVUEsR0FBVkEsVUFnQlpBLENBQUFBO0lBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQzdCQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtBQUN0QkEsQ0FBQ0EsRUFyQk0sT0FBTyxLQUFQLE9BQU8sUUFxQmIiLCJmaWxlIjoiaW5kZXguaHR0cC5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5cclxuXHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuXHRleHBvcnQgY2xhc3MgaHR0cENvbmZpZyB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJGh0dHBQcm92aWRlciddO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHBQcm92aWRlcjogbmcuSUh0dHBQcm92aWRlcikge1xyXG5cclxuXHRcdFx0dGhpcy4kaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ0NTUkYtVE9LRU4nO1xyXG5cdFx0XHR0aGlzLiRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGLVRPS0VOJztcclxuXHJcblx0XHRcdHRoaXMuJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnZXJyb3JIYW5kbGVySW50ZXJjZXB0b3InKTtcclxuXHRcdFx0dGhpcy4kaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoRXhwaXJlZEludGVyY2VwdG9yJyk7XHJcblx0XHRcdHRoaXMuJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XHJcblx0XHRcdHRoaXMuJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgncnhJbnRlcmNlcHRvckZhY3RvcnknKTtcclxuXHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ3NwcmluZ1Rlc3RBcHAnKVxyXG5cdFx0LmNvbmZpZyhodHRwQ29uZmlnKTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==