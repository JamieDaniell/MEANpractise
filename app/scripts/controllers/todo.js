'use strict';

//$scope is the binding between the html an javscript controller 
angular.module('todoListApp').controller('todoCtrl', function($scope, dataService) 
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
            // Filters a list of todos and then send them to the data service to be processed
            var filteredTodos = $scope.todos.filter(function(todo)
            {
                //choose the todos todos that have been edited
                if(todo.edited) 
                {
                    return todo
                };
            })
            //save the filtered todos 
            dataService.saveTodos(filteredTodos).finally($scope.resetTodoState());
        };

        $scope.resetTodoState = function()
        {
            $scope.todos.forEach(function(todo)
            {
                todo.edited = false;
            });
        };
    });