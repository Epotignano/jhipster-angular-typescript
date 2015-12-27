/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../commons/subscriptions.service.ts" />
var Onesnap;
(function (Onesnap) {
    var Teachers;
    (function (Teachers) {
        'use strict';
        var TeachersListController = (function () {
            function TeachersListController(Teacher, StreamsService, DTOptionsBuilder, DTColumnBuilder) {
                this.Teacher = Teacher;
                this.StreamsService = StreamsService;
                this.DTOptionsBuilder = DTOptionsBuilder;
                this.DTColumnBuilder = DTColumnBuilder;
                this.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
                    return Teacher.query({ page: 0, size: 20 }).$promise;
                }).withPaginationType('full_numbers');
                this.dtColumns = [
                    DTColumnBuilder.newColumn('id').withTitle('ID'),
                    DTColumnBuilder.newColumn('name').withTitle('Name')
                ];
            }
            TeachersListController.$inject = [
                'Teacher',
                'StreamsService',
                'DTOptionsBuilder',
                'DTColumnBuilder'
            ];
            return TeachersListController;
        })();
        Teachers.TeachersListController = TeachersListController;
        angular.module('onesnap.teachers').controller('TeachersListController', TeachersListController);
    })(Teachers = Onesnap.Teachers || (Onesnap.Teachers = {}));
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJzL3RlYWNoZXJzLmxpc3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5UZWFjaGVycyIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlciIsIk9uZXNuYXAuVGVhY2hlcnMuVGVhY2hlcnNMaXN0Q29udHJvbGxlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xELDREQUE0RDtBQUU1RCxJQUFPLE9BQU8sQ0E4QmI7QUE5QkQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLFFBQVFBLENBOEJ0QkE7SUE5QmNBLFdBQUFBLFFBQVFBLEVBQUNBLENBQUNBO1FBQ3hCQyxZQUFZQSxDQUFDQTtRQUViQSxJQUFhQSxzQkFBc0JBO1lBUWxDQyxTQVJZQSxzQkFBc0JBLENBUWRBLE9BQU9BLEVBQVVBLGNBQXNDQSxFQUNsRUEsZ0JBQWdCQSxFQUFVQSxlQUFlQTtnQkFEOUJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQUFBO2dCQUFVQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBd0JBO2dCQUNsRUEscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFBQTtnQkFBVUEsb0JBQWVBLEdBQWZBLGVBQWVBLENBQUFBO2dCQUNqREEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsZ0JBQWdCQSxDQUFDQSxhQUFhQSxDQUFDQTtvQkFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDQSxDQUFDQSxrQkFBa0JBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO2dCQUV0Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0E7b0JBQ2hCQSxlQUFlQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDL0NBLGVBQWVBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBO2lCQUNuREEsQ0FBQ0E7WUFFSEEsQ0FBQ0E7WUFsQk1ELDhCQUFPQSxHQUFrQkE7Z0JBQy9CQSxTQUFTQTtnQkFBRUEsZ0JBQWdCQTtnQkFDM0JBLGtCQUFrQkE7Z0JBQUVBLGlCQUFpQkE7YUFBQ0EsQ0FBQ0E7WUFtQnpDQSw2QkFBQ0E7UUFBREEsQ0F0QkFELEFBc0JDQyxJQUFBRDtRQXRCWUEsK0JBQXNCQSxHQUF0QkEsc0JBc0JaQSxDQUFBQTtRQUVEQSxPQUFPQSxDQUNMQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQzFCQSxVQUFVQSxDQUFDQSx3QkFBd0JBLEVBQUVBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7SUFDaEVBLENBQUNBLEVBOUJjRCxRQUFRQSxHQUFSQSxnQkFBUUEsS0FBUkEsZ0JBQVFBLFFBOEJ0QkE7QUFBREEsQ0FBQ0EsRUE5Qk0sT0FBTyxLQUFQLE9BQU8sUUE4QmIiLCJmaWxlIjoidGVhY2hlcnMvdGVhY2hlcnMubGlzdC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vY29tbW9ucy9zdWJzY3JpcHRpb25zLnNlcnZpY2UudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAuVGVhY2hlcnMge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFRlYWNoZXJzTGlzdENvbnRyb2xsZXIge1xyXG5cdFx0c3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbXHJcblx0XHRcdCdUZWFjaGVyJywgJ1N0cmVhbXNTZXJ2aWNlJyxcclxuXHRcdFx0J0RUT3B0aW9uc0J1aWxkZXInLCAnRFRDb2x1bW5CdWlsZGVyJ107XHJcblx0XHRwdWJsaWMgdGVhY2hlcnNMaXN0OiBBcnJheTxhbnk+O1xyXG5cdFx0cHVibGljIGR0T3B0aW9ucztcclxuXHRcdHB1YmxpYyBkdENvbHVtbnM7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBUZWFjaGVyLCBwcml2YXRlIFN0cmVhbXNTZXJ2aWNlOiBPbmVzbmFwLlN0cmVhbXNTZXJ2aWNlLFxyXG5cdFx0XHRwcml2YXRlIERUT3B0aW9uc0J1aWxkZXIsIHByaXZhdGUgRFRDb2x1bW5CdWlsZGVyKSB7XHJcblx0XHRcdHRoaXMuZHRPcHRpb25zID0gRFRPcHRpb25zQnVpbGRlci5mcm9tRm5Qcm9taXNlKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBUZWFjaGVyLnF1ZXJ5KHsgcGFnZTogMCwgc2l6ZTogMjAgfSkuJHByb21pc2U7XHJcblx0XHRcdH0pLndpdGhQYWdpbmF0aW9uVHlwZSgnZnVsbF9udW1iZXJzJyk7XHJcblxyXG5cdFx0XHR0aGlzLmR0Q29sdW1ucyA9IFtcclxuXHRcdFx0XHREVENvbHVtbkJ1aWxkZXIubmV3Q29sdW1uKCdpZCcpLndpdGhUaXRsZSgnSUQnKSxcclxuXHRcdFx0XHREVENvbHVtbkJ1aWxkZXIubmV3Q29sdW1uKCduYW1lJykud2l0aFRpdGxlKCdOYW1lJylcclxuXHRcdFx0XTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ29uZXNuYXAudGVhY2hlcnMnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ1RlYWNoZXJzTGlzdENvbnRyb2xsZXInLCBUZWFjaGVyc0xpc3RDb250cm9sbGVyKTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==