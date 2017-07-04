'use strict';
// directives extend html
// here the todo --> The <todo> element returns 
// the template that has been defined 
// it replaces any other content 
// and uses the todoCtrl
angular.module('todoListApp').directive('todo', function()
{
    return {
      templateUrl: 'templates/todo.html',
      replace: true,
      controller: 'todoCtrl'
    }
});