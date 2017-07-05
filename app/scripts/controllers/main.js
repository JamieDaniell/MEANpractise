'use strict';

// The main controller as defined in the index.html
angular.module('todoListApp').controller('mainCtrl', function($scope, $log, $interval,  dataService){
    
    
    $scope.seconds = 0;

    $scope.counter = function()
    {
        $scope.seconds++;
        $log.warn($scope.seconds + ' seconds have passed');
        
    };
    var timer = $interval( $scope.counter , 1000 , 10) ;

    dataService.getTodos(function(response)
    {
        var todos = response.data.todos;
        // scope is the binding to the variables in html code
        $scope.todos =  todos;
    });
    // main point of the file 
    // add a todo and adds it to the current angular scope 
    // to the todos (up in the data service ( getTodos) )
    $scope.addTodo = function() 
    {
        $scope.todos.unshift({name: "This is a new todo.", completed: false});
    };
  
})