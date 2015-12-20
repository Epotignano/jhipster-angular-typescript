'use strict';

describe('Teacher Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockTeacher;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockTeacher = jasmine.createSpy('MockTeacher');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Teacher': MockTeacher
        };
        createController = function() {
            $injector.get('$controller')("TeacherDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'springTestApp:teacherUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
