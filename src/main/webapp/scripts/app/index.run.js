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
                this.$rootScope.toState = toState;
                this.$rootScope.toStateParams = toStateParams;
                if (Principal.isIdentityResolved()) {
                }
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                var titleKey = 'global.title';
                // Remember previous state unless we've been redirected to login or we've just
                // reset the state memory after logout. If we're redirected to login, our
                // previousState is already set in the authExpiredInterceptor. If we're going
                // to login directly, we don't want to be sent to some previous state anyway
                if (toState.name != 'login' && this.$rootScope.previousStateName) {
                    this.$rootScope.previousStateName = fromState.name;
                    this.$rootScope.previousStateParams = fromParams;
                }
                // Set the page title key to the one configured in state or use default one
                /*if (toState.data.pageTitle) {
                    titleKey = toState.data.pageTitle;
                }*/
            });
        }
        RunConfiguration.$inject = ['$rootScope', '$state', 'Principal', 'Auth'];
        return RunConfiguration;
    })();
    Onesnap.RunConfiguration = RunConfiguration;
    angular.module('springTestApp').run(RunConfiguration);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5SdW5Db25maWd1cmF0aW9uIiwiT25lc25hcC5SdW5Db25maWd1cmF0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxBQUNBLCtDQUQrQztBQUMvQyxJQUFPLE9BQU8sQ0EyQ2I7QUEzQ0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVmQSxJQUFhQSxnQkFBZ0JBO1FBRzVCQyxTQUhZQSxnQkFBZ0JBLENBSW5CQSxVQUFnQ0EsRUFDaENBLE1BQTJCQSxFQUMzQkEsU0FBU0EsRUFBVUEsSUFBSUE7WUFGdkJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQXNCQTtZQUNoQ0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBcUJBO1lBQzNCQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFBQTtZQUFVQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtZQUcvQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxVQUFVQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxhQUFhQTtnQkFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Z0JBRTlDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFckMsQ0FBQztZQUVLLENBQUMsQ0FBQ0EsQ0FBQ0E7WUFFTEEsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxFQUFHQSxVQUFTQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxVQUFVQTtnQkFDM0YsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFFO2dCQUUvQixBQUlBLDhFQUo4RTtnQkFDOUUseUVBQXlFO2dCQUN6RSw2RUFBNkU7Z0JBQzdFLDRFQUE0RTtnQkFDNUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQsMkVBQTJFO2dCQUMzRTs7bUJBRUc7WUFDUCxDQUFDLENBQUNBLENBQUNBO1FBQ1RBLENBQUNBO1FBbkNNRCx3QkFBT0EsR0FBa0JBLENBQUNBLFlBQVlBLEVBQUVBLFFBQVFBLEVBQUVBLFdBQVdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBb0MvRUEsdUJBQUNBO0lBQURBLENBckNBRCxBQXFDQ0MsSUFBQUQ7SUFyQ1lBLHdCQUFnQkEsR0FBaEJBLGdCQXFDWkEsQ0FBQUE7SUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FDN0JBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7QUFDekJBLENBQUNBLEVBM0NNLE9BQU8sS0FBUCxPQUFPLFFBMkNiIiwiZmlsZSI6ImluZGV4LnJ1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIE9uZXNuYXAge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnUHJpbmNpcGFsJywgJ0F1dGgnXTtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcihcclxuXHRcdFx0cHJpdmF0ZSAkcm9vdFNjb3BlOiBuZy5JUm9vdFNjb3BlU2VydmljZSxcclxuXHRcdFx0cHJpdmF0ZSAkc3RhdGU6IG5nLnVpLklTdGF0ZVNlcnZpY2UsXHJcblx0XHRcdHByaXZhdGUgUHJpbmNpcGFsLCBwcml2YXRlIEF1dGhcclxuXHRcdCkge1xyXG5cclxuXHRcdFx0dGhpcy4kcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvU3RhdGVQYXJhbXMpIHtcclxuXHRcdFx0XHR0aGlzLiRyb290U2NvcGUudG9TdGF0ZSA9IHRvU3RhdGU7XHJcblx0XHRcdFx0dGhpcy4kcm9vdFNjb3BlLnRvU3RhdGVQYXJhbXMgPSB0b1N0YXRlUGFyYW1zO1xyXG5cdFxyXG5cdFx0XHRcdGlmIChQcmluY2lwYWwuaXNJZGVudGl0eVJlc29sdmVkKCkpIHtcclxuXHRcdFx0XHRcdC8vQXV0aC5hdXRob3JpemUoKTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICBcdFx0ICB9KTtcclxuXHJcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuICAgICAgICAgICAgdmFyIHRpdGxlS2V5ID0gJ2dsb2JhbC50aXRsZScgO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtZW1iZXIgcHJldmlvdXMgc3RhdGUgdW5sZXNzIHdlJ3ZlIGJlZW4gcmVkaXJlY3RlZCB0byBsb2dpbiBvciB3ZSd2ZSBqdXN0XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZSBtZW1vcnkgYWZ0ZXIgbG9nb3V0LiBJZiB3ZSdyZSByZWRpcmVjdGVkIHRvIGxvZ2luLCBvdXJcclxuICAgICAgICAgICAgLy8gcHJldmlvdXNTdGF0ZSBpcyBhbHJlYWR5IHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvci4gSWYgd2UncmUgZ29pbmdcclxuICAgICAgICAgICAgLy8gdG8gbG9naW4gZGlyZWN0bHksIHdlIGRvbid0IHdhbnQgdG8gYmUgc2VudCB0byBzb21lIHByZXZpb3VzIHN0YXRlIGFueXdheVxyXG4gICAgICAgICAgICBpZiAodG9TdGF0ZS5uYW1lICE9ICdsb2dpbicgJiYgdGhpcy4kcm9vdFNjb3BlLnByZXZpb3VzU3RhdGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcm9vdFNjb3BlLnByZXZpb3VzU3RhdGVOYW1lID0gZnJvbVN0YXRlLm5hbWU7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcm9vdFNjb3BlLnByZXZpb3VzU3RhdGVQYXJhbXMgPSBmcm9tUGFyYW1zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHBhZ2UgdGl0bGUga2V5IHRvIHRoZSBvbmUgY29uZmlndXJlZCBpbiBzdGF0ZSBvciB1c2UgZGVmYXVsdCBvbmVcclxuICAgICAgICAgICAgLyppZiAodG9TdGF0ZS5kYXRhLnBhZ2VUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVLZXkgPSB0b1N0YXRlLmRhdGEucGFnZVRpdGxlO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ3NwcmluZ1Rlc3RBcHAnKVxyXG5cdFx0LnJ1bihSdW5Db25maWd1cmF0aW9uKTtcclxufVx0Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9