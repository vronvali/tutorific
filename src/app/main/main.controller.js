'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainController
 * @description
 * # MainController
 * Controller of the mytodoApp
 */
angular.module('mytodo')
    .controller('MainController', function($scope, localStorageService) {
        var todosInStore = localStorageService.get('todos');
        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function() {
            localStorageService.set('todos', $scope.todos);
        }, true);
        $scope.addTodo = function() {
            $scope.todos.push($scope.todo);
            $scope.todo = ' ';
        };
        $scope.removeTodo = function(index) {
            $scope.todos.splice(index, 1);
        };
    });
