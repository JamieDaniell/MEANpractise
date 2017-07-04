'use strict';

// The service makes a request to the server, and lets your application handle the response.
angular.module('todoListApp')
    .service('dataService', function($http) 
    {
        //g etTodos makes a request to the http service 
        // fetches mock.todos.json
        this.getTodos = function(cb) 
        {
            $http.get('/api/todos').then(cb);
        };
  
        this.deleteTodo = function(todo) 
        {
            console.log("I deleted the " + todo.name + " todo!");
        };
  
        this.saveTodos = function(todos) 
        {
            console.log("I saved " + todos.length + " todos!");
        };
  
    });
