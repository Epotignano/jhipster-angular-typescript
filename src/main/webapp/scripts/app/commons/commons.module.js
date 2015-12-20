/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="subscriptions.service.ts" />
/// <reference path="toaster.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Commons;
    (function (Commons) {
        var Streams;
        (function (Streams) {
            angular.module('onesnap.commons', []).service('StreamsService', Streams.StreamsService).service('ToasterService', Streams.ToasterService);
        })(Streams = Commons.Streams || (Commons.Streams = {}));
    })(Commons = Onesnap.Commons || (Onesnap.Commons = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbnMvY29tbW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuQ29tbW9ucyIsIk9uZXNuYXAuQ29tbW9ucy5TdHJlYW1zIl0sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFDbEQsaURBQWlEO0FBQ2pELDJDQUEyQztBQUUzQyxJQUFPLE9BQU8sQ0FNYjtBQU5ELFdBQU8sT0FBTztJQUFDQSxJQUFBQSxPQUFPQSxDQU1yQkE7SUFOY0EsV0FBQUEsT0FBT0E7UUFBQ0MsSUFBQUEsT0FBT0EsQ0FNN0JBO1FBTnNCQSxXQUFBQSxPQUFPQSxFQUFDQSxDQUFDQTtZQUUvQkMsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUNsQ0EsT0FBT0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxzQkFBY0EsQ0FBQ0EsQ0FDekNBLE9BQU9BLENBQUNBLGdCQUFnQkEsRUFBRUEsc0JBQWNBLENBQUNBLENBQUNBO1FBRTlDQSxDQUFDQSxFQU5zQkQsT0FBT0EsR0FBUEEsZUFBT0EsS0FBUEEsZUFBT0EsUUFNN0JBO0lBQURBLENBQUNBLEVBTmNELE9BQU9BLEdBQVBBLGVBQU9BLEtBQVBBLGVBQU9BLFFBTXJCQTtBQUFEQSxDQUFDQSxFQU5NLE9BQU8sS0FBUCxPQUFPLFFBTWIiLCJmaWxlIjoiY29tbW9ucy9jb21tb25zLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInN1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0b2FzdGVyLnNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuQ29tbW9ucy5TdHJlYW1zIHtcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnb25lc25hcC5jb21tb25zJywgW10pXHJcblx0XHQgLnNlcnZpY2UoJ1N0cmVhbXNTZXJ2aWNlJywgU3RyZWFtc1NlcnZpY2UpXHJcblx0XHQgLnNlcnZpY2UoJ1RvYXN0ZXJTZXJ2aWNlJywgVG9hc3RlclNlcnZpY2UpO1xyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9