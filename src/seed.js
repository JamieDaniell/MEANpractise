'use strict'

var Todo = require('./models/todo.js');

var todos = [
    'feed the dog',
    'walk the cat',
    'water the garded'
];

todos.forEach(function(todo, index)
{
    Todo.find({'name': todo} , function(err,todo)
    {
        if(!err && !todos.length)
        {
            todo.create({completed: false , name: todo});
        };
    });
});