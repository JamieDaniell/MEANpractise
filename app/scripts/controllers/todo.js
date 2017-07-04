'use strict';

angular.module('todoListApp')
    .controller('todoCtrl', function($scope, dataService) 
    {
        // delete todo 
        $scope.deleteTodo = function(todo, index) 
        {
            // remove the todo at that index 
            $scope.todos.splice(index, 1);
            // send a reques to the data service 
            dataService.deleteTodo(todo);
        };
        // save todos 
        $scope.saveTodos = function() 
        {
            var filteredTodos = $scope.todos.filter(function(todo)
            {
                if(todo.edited) 
                {
                    return todo
                };
            })
            dataService.saveTodos(filteredTodos);
        }; 
    });