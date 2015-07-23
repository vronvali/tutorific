(function() {
    'use strict';

    describe('controllers', function() {

        beforeEach(module('tutorific'));
        var scope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($rootScope) {
            scope = $rootScope.$new();
        }));

        it('should define more than 5 awesome things', inject(function($controller) {
            var vm = $controller("MainController", {
                $scope: scope
            });

            expect(typeof scope.addTodo).toEqual('function');
        }));
    });
})();
