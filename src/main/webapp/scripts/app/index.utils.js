/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var TemplateUtils = (function () {
        function TemplateUtils($compile) {
            this.$compile = $compile;
            this.TableActionButtons = function (data, type, full, meta) {
                return '<a  class="md-fab md-mini md-accent" ui-sref="app.teachers.edit({id :' + data.id + '})">' + 'Editar' + '</a>';
            };
        }
        return TemplateUtils;
    })();
    Onesnap.TemplateUtils = TemplateUtils;
    angular.module('springTestApp').service('TemplateUtils', TemplateUtils);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnV0aWxzLnRzIl0sIm5hbWVzIjpbIk9uZXNuYXAiLCJPbmVzbmFwLlRlbXBsYXRlVXRpbHMiLCJPbmVzbmFwLlRlbXBsYXRlVXRpbHMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUUvQyxJQUFPLE9BQU8sQ0FlYjtBQWZELFdBQU8sT0FBTyxFQUFDLENBQUM7SUFDZkEsSUFBYUEsYUFBYUE7UUFFekJDLFNBRllBLGFBQWFBLENBRUxBLFFBQTRCQTtZQUE1QkMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBb0JBO1lBRWhEQSx1QkFBa0JBLEdBQUdBLFVBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBO2dCQUMzQ0EsTUFBTUEsQ0FBQ0EsdUVBQXVFQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxNQUFNQSxHQUM5RkEsUUFBUUEsR0FDSUEsTUFBTUEsQ0FBQ0E7WUFDdkJBLENBQUNBLENBQUFBO1FBTm9EQSxDQUFDQTtRQVF2REQsb0JBQUNBO0lBQURBLENBVkFELEFBVUNDLElBQUFEO0lBVllBLHFCQUFhQSxHQUFiQSxhQVVaQSxDQUFBQTtJQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUM3QkEsT0FBT0EsQ0FBQ0EsZUFBZUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7QUFDM0NBLENBQUNBLEVBZk0sT0FBTyxLQUFQLE9BQU8sUUFlYiIsImZpbGUiOiJpbmRleC51dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPbmVzbmFwIHtcclxuXHRleHBvcnQgY2xhc3MgVGVtcGxhdGVVdGlscyB7XHJcblx0XHRcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGNvbXBpbGUgOm5nLklDb21waWxlU2VydmljZSkge1x0XHR9XHJcblx0XHRcclxuXHRcdFRhYmxlQWN0aW9uQnV0dG9ucyA9IChkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSA9PiB7XHJcblx0XHRcdHJldHVybiAnPGEgIGNsYXNzPVwibWQtZmFiIG1kLW1pbmkgbWQtYWNjZW50XCIgdWktc3JlZj1cImFwcC50ZWFjaGVycy5lZGl0KHtpZCA6JyArIGRhdGEuaWQgKyAnfSlcIj4nXHJcblx0XHRcdFx0KyAnRWRpdGFyJ1xyXG4gICAgICAgICAgICAgICAgKyAnPC9hPic7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnc3ByaW5nVGVzdEFwcCcpXHJcblx0XHQuc2VydmljZSgnVGVtcGxhdGVVdGlscycsIFRlbXBsYXRlVXRpbHMpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9