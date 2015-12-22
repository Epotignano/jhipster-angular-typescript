/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var RunConfiguration = (function () {
        function RunConfiguration($rootScope, $state, Principal, Auth) {
            this.$rootScope = $rootScope;
            this.$state = $state;
            this.Principal = Principal;
            this.Auth = Auth;
            this.$rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
                if (Principal.isIdentityResolved()) {
                    Auth.authorize();
                }
            });
        }
        RunConfiguration.$inject = ['$rootScope', '$state', 'Principal', 'Auth'];
        return RunConfiguration;
    })();
    Onesnap.RunConfiguration = RunConfiguration;
    angular.module('springTestApp').run(RunConfiguration);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5SdW5Db25maWd1cmF0aW9uIiwiT25lc25hcC5SdW5Db25maWd1cmF0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxBQUNBLCtDQUQrQztBQUMvQyxJQUFPLE9BQU8sQ0FxQmI7QUFyQkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVmQSxJQUFhQSxnQkFBZ0JBO1FBRzVCQyxTQUhZQSxnQkFBZ0JBLENBSW5CQSxVQUFnQ0EsRUFDaENBLE1BQTJCQSxFQUMzQkEsU0FBU0EsRUFBVUEsSUFBSUE7WUFGdkJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQXNCQTtZQUNoQ0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBcUJBO1lBQzNCQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFBQTtZQUFVQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtZQUcvQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxVQUFTQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxhQUFhQTtnQkFDOUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7WUFDRixDQUFDLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBYk1ELHdCQUFPQSxHQUFrQkEsQ0FBQ0EsWUFBWUEsRUFBRUEsUUFBUUEsRUFBRUEsV0FBV0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFjL0VBLHVCQUFDQTtJQUFEQSxDQWZBRCxBQWVDQyxJQUFBRDtJQWZZQSx3QkFBZ0JBLEdBQWhCQSxnQkFlWkEsQ0FBQUE7SUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FDN0JBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7QUFDekJBLENBQUNBLEVBckJNLE9BQU8sS0FBUCxPQUFPLFFBcUJiIiwiZmlsZSI6ImluZGV4LnJ1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIE9uZXNuYXAge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnUHJpbmNpcGFsJywgJ0F1dGgnXTtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcihcclxuXHRcdFx0cHJpdmF0ZSAkcm9vdFNjb3BlOiBuZy5JUm9vdFNjb3BlU2VydmljZSxcclxuXHRcdFx0cHJpdmF0ZSAkc3RhdGU6IG5nLnVpLklTdGF0ZVNlcnZpY2UsXHJcblx0XHRcdHByaXZhdGUgUHJpbmNpcGFsLCBwcml2YXRlIEF1dGhcclxuXHRcdCkge1xyXG5cclxuXHRcdFx0dGhpcy4kcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9TdGF0ZVBhcmFtcykge1xyXG5cdFx0XHRcdGlmIChQcmluY2lwYWwuaXNJZGVudGl0eVJlc29sdmVkKCkpIHtcclxuXHRcdFx0XHRcdEF1dGguYXV0aG9yaXplKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ3NwcmluZ1Rlc3RBcHAnKVxyXG5cdFx0LnJ1bihSdW5Db25maWd1cmF0aW9uKTtcclxufVx0Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9