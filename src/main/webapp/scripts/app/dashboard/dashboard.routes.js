/**
 * Created by mmasuyama on 11/5/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Dashboard;
    (function (Dashboard) {
        'use strict';
        var DashboardRouterConfig = (function () {
            /** @ngInject */
            function DashboardRouterConfig($stateProvider) {
                $stateProvider.state('app.dashboard', {
                    url: '/dashboard',
                    views: {
                        'content': {
                            templateUrl: 'app/dashboard/dashboard.html'
                        }
                    }
                });
            }
            return DashboardRouterConfig;
        })();
        Dashboard.DashboardRouterConfig = DashboardRouterConfig;
        angular.module('onesnap.dashboard').config(DashboardRouterConfig);
    })(Dashboard = Onesnap.Dashboard || (Onesnap.Dashboard = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLkRhc2hib2FyZCIsIk9uZXNuYXAuRGFzaGJvYXJkLkRhc2hib2FyZFJvdXRlckNvbmZpZyIsIk9uZXNuYXAuRGFzaGJvYXJkLkRhc2hib2FyZFJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxrREFBa0Q7QUFFbEQsSUFBTyxPQUFPLENBc0JiO0FBdEJELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxTQUFTQSxDQXNCdkJBO0lBdEJjQSxXQUFBQSxTQUFTQSxFQUFDQSxDQUFDQTtRQUN4QkMsWUFBWUEsQ0FBQ0E7UUFFYkEsSUFBYUEscUJBQXFCQTtZQUNoQ0MsZ0JBQWdCQTtZQUNoQkEsU0FGV0EscUJBQXFCQSxDQUVwQkEsY0FBb0NBO2dCQUM5Q0MsY0FBY0EsQ0FDWEEsS0FBS0EsQ0FBQ0EsZUFBZUEsRUFBRUE7b0JBQ3RCQSxHQUFHQSxFQUFFQSxZQUFZQTtvQkFDakJBLEtBQUtBLEVBQUdBO3dCQUNOQSxTQUFTQSxFQUFFQTs0QkFDVEEsV0FBV0EsRUFBRUEsOEJBQThCQTt5QkFDNUNBO3FCQUNGQTtpQkFDRkEsQ0FBQ0EsQ0FBQ0E7WUFFUEEsQ0FBQ0E7WUFFSEQsNEJBQUNBO1FBQURBLENBZkFELEFBZUNDLElBQUFEO1FBZllBLCtCQUFxQkEsR0FBckJBLHFCQWVaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQ2pDQSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQSxFQXRCY0QsU0FBU0EsR0FBVEEsaUJBQVNBLEtBQVRBLGlCQUFTQSxRQXNCdkJBO0FBQURBLENBQUNBLEVBdEJNLE9BQU8sS0FBUCxPQUFPLFFBc0JiIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG1tYXN1eWFtYSBvbiAxMS81LzIwMTUuXG4gKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxubW9kdWxlIE9uZXNuYXAuRGFzaGJvYXJkIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBjbGFzcyBEYXNoYm9hcmRSb3V0ZXJDb25maWcge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQcm92aWRlcjogbmcudWkuSVN0YXRlUHJvdmlkZXIpIHtcbiAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmRhc2hib2FyZCcsIHtcbiAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICB2aWV3cyA6IHtcbiAgICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICB9XG4gIFxuICBhbmd1bGFyLm1vZHVsZSgnb25lc25hcC5kYXNoYm9hcmQnKVxuICAgLmNvbmZpZyhEYXNoYm9hcmRSb3V0ZXJDb25maWcpO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=