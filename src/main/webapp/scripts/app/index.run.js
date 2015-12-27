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
                /*if (toState.name.indexOf('access') === -1) {
                    if (Principal.isIdentityResolved()) {
                        Auth.authorize();
                    } else {
                        this.$state.go('access.pages_auth_login');
                    }
                };*/
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5SdW5Db25maWd1cmF0aW9uIiwiT25lc25hcC5SdW5Db25maWd1cmF0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxBQUNBLCtDQUQrQztBQUMvQyxJQUFPLE9BQU8sQ0E2Q2I7QUE3Q0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVmQSxJQUFhQSxnQkFBZ0JBO1FBRzVCQyxTQUhZQSxnQkFBZ0JBLENBSW5CQSxVQUFnQ0EsRUFDaENBLE1BQTJCQSxFQUMzQkEsU0FBU0EsRUFBVUEsSUFBSUE7WUFGdkJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQXNCQTtZQUNoQ0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBcUJBO1lBQzNCQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFBQTtZQUFVQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtZQUcvQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxVQUFTQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxhQUFhQTtnQkFDOUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Z0JBQzlDOzs7Ozs7b0JBTUk7WUFDTCxDQUFDLENBQUNBLENBQUNBO1lBRUhBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsRUFBRUEsVUFBU0EsS0FBS0EsRUFBRUEsT0FBT0EsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsVUFBVUE7Z0JBQzdGLElBQUksUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFFOUIsQUFJQSw4RUFKOEU7Z0JBQzlFLHlFQUF5RTtnQkFDekUsNkVBQTZFO2dCQUM3RSw0RUFBNEU7Z0JBQzVFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELDJFQUEyRTtnQkFDM0U7O21CQUVHO1lBQ0osQ0FBQyxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQXJDTUQsd0JBQU9BLEdBQWtCQSxDQUFDQSxZQUFZQSxFQUFFQSxRQUFRQSxFQUFFQSxXQUFXQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtRQXNDL0VBLHVCQUFDQTtJQUFEQSxDQXZDQUQsQUF1Q0NDLElBQUFEO0lBdkNZQSx3QkFBZ0JBLEdBQWhCQSxnQkF1Q1pBLENBQUFBO0lBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLENBQzdCQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO0FBQ3pCQSxDQUFDQSxFQTdDTSxPQUFPLEtBQVAsT0FBTyxRQTZDYiIsImZpbGUiOiJpbmRleC5ydW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24ge1xyXG5cdFx0c3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ1ByaW5jaXBhbCcsICdBdXRoJ107XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoXHJcblx0XHRcdHByaXZhdGUgJHJvb3RTY29wZTogbmcuSVJvb3RTY29wZVNlcnZpY2UsXHJcblx0XHRcdHByaXZhdGUgJHN0YXRlOiBuZy51aS5JU3RhdGVTZXJ2aWNlLFxyXG5cdFx0XHRwcml2YXRlIFByaW5jaXBhbCwgcHJpdmF0ZSBBdXRoXHJcblx0XHQpIHtcclxuXHJcblx0XHRcdHRoaXMuJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvU3RhdGVQYXJhbXMpIHtcclxuXHRcdFx0XHR0aGlzLiRyb290U2NvcGUudG9TdGF0ZSA9IHRvU3RhdGU7XHJcblx0XHRcdFx0dGhpcy4kcm9vdFNjb3BlLnRvU3RhdGVQYXJhbXMgPSB0b1N0YXRlUGFyYW1zO1xyXG5cdFx0XHRcdC8qaWYgKHRvU3RhdGUubmFtZS5pbmRleE9mKCdhY2Nlc3MnKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdGlmIChQcmluY2lwYWwuaXNJZGVudGl0eVJlc29sdmVkKCkpIHtcclxuXHRcdFx0XHRcdFx0QXV0aC5hdXRob3JpemUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHN0YXRlLmdvKCdhY2Nlc3MucGFnZXNfYXV0aF9sb2dpbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07Ki9cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblx0XHRcdFx0dmFyIHRpdGxlS2V5ID0gJ2dsb2JhbC50aXRsZSc7XHJcblxyXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHByZXZpb3VzIHN0YXRlIHVubGVzcyB3ZSd2ZSBiZWVuIHJlZGlyZWN0ZWQgdG8gbG9naW4gb3Igd2UndmUganVzdFxyXG5cdFx0XHRcdC8vIHJlc2V0IHRoZSBzdGF0ZSBtZW1vcnkgYWZ0ZXIgbG9nb3V0LiBJZiB3ZSdyZSByZWRpcmVjdGVkIHRvIGxvZ2luLCBvdXJcclxuXHRcdFx0XHQvLyBwcmV2aW91c1N0YXRlIGlzIGFscmVhZHkgc2V0IGluIHRoZSBhdXRoRXhwaXJlZEludGVyY2VwdG9yLiBJZiB3ZSdyZSBnb2luZ1xyXG5cdFx0XHRcdC8vIHRvIGxvZ2luIGRpcmVjdGx5LCB3ZSBkb24ndCB3YW50IHRvIGJlIHNlbnQgdG8gc29tZSBwcmV2aW91cyBzdGF0ZSBhbnl3YXlcclxuXHRcdFx0XHRpZiAodG9TdGF0ZS5uYW1lICE9ICdsb2dpbicgJiYgdGhpcy4kcm9vdFNjb3BlLnByZXZpb3VzU3RhdGVOYW1lKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyb290U2NvcGUucHJldmlvdXNTdGF0ZU5hbWUgPSBmcm9tU3RhdGUubmFtZTtcclxuXHRcdFx0XHRcdHRoaXMuJHJvb3RTY29wZS5wcmV2aW91c1N0YXRlUGFyYW1zID0gZnJvbVBhcmFtcztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFNldCB0aGUgcGFnZSB0aXRsZSBrZXkgdG8gdGhlIG9uZSBjb25maWd1cmVkIGluIHN0YXRlIG9yIHVzZSBkZWZhdWx0IG9uZVxyXG5cdFx0XHRcdC8qaWYgKHRvU3RhdGUuZGF0YS5wYWdlVGl0bGUpIHtcclxuXHRcdFx0XHRcdHRpdGxlS2V5ID0gdG9TdGF0ZS5kYXRhLnBhZ2VUaXRsZTtcclxuXHRcdFx0XHR9Ki9cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyLm1vZHVsZSgnc3ByaW5nVGVzdEFwcCcpXHJcblx0XHQucnVuKFJ1bkNvbmZpZ3VyYXRpb24pO1xyXG59XHQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=