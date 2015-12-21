/// <reference path="../../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var Settings;
    (function (Settings) {
        var SettingsService = (function () {
            function SettingsService($http) {
                this.$http = $http;
                this.mockMenu = [{
                    label: 'COURSES.SECTION_TITLE',
                    icon: 'icon-tile-four',
                    items: [
                        {
                            label: 'COMMONS.LIST',
                            sref: 'app.courses.list'
                        },
                        {
                            label: 'COMMONS.NEW',
                            sref: 'app.courses.create'
                        }
                    ]
                }, {
                    label: 'TEACHERS.SECTION_TITLE',
                    icon: 'icon-tile-four',
                    items: [
                        {
                            label: 'COMMONS.LIST',
                            sref: 'app.teachers.list'
                        },
                        {
                            label: 'COMMONS.NEW',
                            sref: 'app.teachers.create'
                        }
                    ]
                }, {
                    label: 'STUDENTS.SECTION_TITLE',
                    icon: 'icon-tile-four',
                    items: [
                        {
                            label: 'COMMONS.LIST',
                            sref: 'app.students.list'
                        },
                        {
                            label: 'COMMONS.NEW',
                            sref: 'app.students.create'
                        }
                    ]
                },];
            }
            //TODO Get sidemenu options from an API endpoint;
            SettingsService.prototype.getSideMenu = function () {
                return this.mockMenu;
            };
            return SettingsService;
        })();
        Settings.SettingsService = SettingsService;
        angular.module('onesnap.settings').service('SettingsService', SettingsService);
    })(Settings = Onesnap.Settings || (Onesnap.Settings = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiT25lc25hcCIsIk9uZXNuYXAuU2V0dGluZ3MiLCJPbmVzbmFwLlNldHRpbmdzLlNldHRpbmdzU2VydmljZSIsIk9uZXNuYXAuU2V0dGluZ3MuU2V0dGluZ3NTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiT25lc25hcC5TZXR0aW5ncy5TZXR0aW5nc1NlcnZpY2UuZ2V0U2lkZU1lbnUiXSwibWFwcGluZ3MiOiJBQUFBLEFBQ0Esa0RBRGtEO0FBQ2xELElBQU8sT0FBTyxDQTREYjtBQTVERCxXQUFPLE9BQU87SUFBQ0EsSUFBQUEsUUFBUUEsQ0E0RHRCQTtJQTVEY0EsV0FBQUEsUUFBUUEsRUFBQ0EsQ0FBQ0E7UUFFeEJDLElBQWFBLGVBQWVBO1lBNEMzQkMsU0E1Q1lBLGVBQWVBLENBNENQQSxLQUFzQkE7Z0JBQXRCQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFpQkE7Z0JBM0NsQ0EsYUFBUUEsR0FBR0EsQ0FBQ0E7b0JBQ25CQSxLQUFLQSxFQUFFQSx1QkFBdUJBO29CQUM5QkEsSUFBSUEsRUFBRUEsZ0JBQWdCQTtvQkFDdEJBLEtBQUtBLEVBQUVBO3dCQUNOQTs0QkFDQ0EsS0FBS0EsRUFBRUEsY0FBY0E7NEJBQ3JCQSxJQUFJQSxFQUFFQSxrQkFBa0JBO3lCQUN4QkE7d0JBRURBOzRCQUNDQSxLQUFLQSxFQUFFQSxhQUFhQTs0QkFDcEJBLElBQUlBLEVBQUVBLG9CQUFvQkE7eUJBQzFCQTtxQkFDREE7aUJBQ0RBLEVBQUVBO29CQUNEQSxLQUFLQSxFQUFFQSx3QkFBd0JBO29CQUMvQkEsSUFBSUEsRUFBRUEsZ0JBQWdCQTtvQkFDdEJBLEtBQUtBLEVBQUVBO3dCQUNOQTs0QkFDQ0EsS0FBS0EsRUFBRUEsY0FBY0E7NEJBQ3JCQSxJQUFJQSxFQUFFQSxtQkFBbUJBO3lCQUN6QkE7d0JBRURBOzRCQUNDQSxLQUFLQSxFQUFFQSxhQUFhQTs0QkFDcEJBLElBQUlBLEVBQUVBLHFCQUFxQkE7eUJBQzNCQTtxQkFDREE7aUJBQ0RBLEVBQUVBO29CQUNGQSxLQUFLQSxFQUFFQSx3QkFBd0JBO29CQUMvQkEsSUFBSUEsRUFBRUEsZ0JBQWdCQTtvQkFDdEJBLEtBQUtBLEVBQUVBO3dCQUNOQTs0QkFDQ0EsS0FBS0EsRUFBRUEsY0FBY0E7NEJBQ3JCQSxJQUFJQSxFQUFFQSxtQkFBbUJBO3lCQUN6QkE7d0JBRURBOzRCQUNDQSxLQUFLQSxFQUFFQSxhQUFhQTs0QkFDcEJBLElBQUlBLEVBQUVBLHFCQUFxQkE7eUJBQzNCQTtxQkFDREE7aUJBQ0RBLEVBQUdBLENBQUFBO1lBR0xBLENBQUNBO1lBRURELGlEQUFpREE7WUFDakRBLHFDQUFXQSxHQUFYQTtnQkFDQ0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDdEJBLENBQUNBO1lBRUZGLHNCQUFDQTtRQUFEQSxDQXJEQUQsQUFxRENDLElBQUFEO1FBckRZQSx3QkFBZUEsR0FBZkEsZUFxRFpBLENBQUFBO1FBR0RBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FDaENBLE9BQU9BLENBQUNBLGlCQUFpQkEsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQUE7SUFDOUNBLENBQUNBLEVBNURjRCxRQUFRQSxHQUFSQSxnQkFBUUEsS0FBUkEsZ0JBQVFBLFFBNER0QkE7QUFBREEsQ0FBQ0EsRUE1RE0sT0FBTyxLQUFQLE9BQU8sUUE0RGIiLCJmaWxlIjoic2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxubW9kdWxlIE9uZXNuYXAuU2V0dGluZ3Mge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcclxuXHRcdHByaXZhdGUgbW9ja01lbnUgPSBbe1xyXG5cdFx0XHRsYWJlbDogJ0NPVVJTRVMuU0VDVElPTl9USVRMRScsXHJcblx0XHRcdGljb246ICdpY29uLXRpbGUtZm91cicsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdDT01NT05TLkxJU1QnLFxyXG5cdFx0XHRcdFx0c3JlZjogJ2FwcC5jb3Vyc2VzLmxpc3QnXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdDT01NT05TLk5FVycsXHJcblx0XHRcdFx0XHRzcmVmOiAnYXBwLmNvdXJzZXMuY3JlYXRlJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSwge1xyXG5cdFx0XHRcdGxhYmVsOiAnVEVBQ0hFUlMuU0VDVElPTl9USVRMRScsXHJcblx0XHRcdFx0aWNvbjogJ2ljb24tdGlsZS1mb3VyJyxcclxuXHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0NPTU1PTlMuTElTVCcsXHJcblx0XHRcdFx0XHRcdHNyZWY6ICdhcHAudGVhY2hlcnMubGlzdCdcclxuXHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0NPTU1PTlMuTkVXJyxcclxuXHRcdFx0XHRcdFx0c3JlZjogJ2FwcC50ZWFjaGVycy5jcmVhdGUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bGFiZWw6ICdTVFVERU5UUy5TRUNUSU9OX1RJVExFJyxcclxuXHRcdFx0XHRpY29uOiAnaWNvbi10aWxlLWZvdXInLFxyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnQ09NTU9OUy5MSVNUJyxcclxuXHRcdFx0XHRcdFx0c3JlZjogJ2FwcC5zdHVkZW50cy5saXN0J1xyXG5cdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnQ09NTU9OUy5ORVcnLFxyXG5cdFx0XHRcdFx0XHRzcmVmOiAnYXBwLnN0dWRlbnRzLmNyZWF0ZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sIF1cclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSkge1xyXG5cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9UT0RPIEdldCBzaWRlbWVudSBvcHRpb25zIGZyb20gYW4gQVBJIGVuZHBvaW50O1xyXG5cdFx0Z2V0U2lkZU1lbnUoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm1vY2tNZW51O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ29uZXNuYXAuc2V0dGluZ3MnKVxyXG5cdFx0LnNlcnZpY2UoJ1NldHRpbmdzU2VydmljZScsIFNldHRpbmdzU2VydmljZSlcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==