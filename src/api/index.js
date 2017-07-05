'use strict'
var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

router.get('/todos' , function(req, res)
{
    Todo.find({},function(error,todos)
    {
        if(error)
        {
            // do something
            res.status(500).json({message: error.message});
        }
        res.json({todos: todos});
    });
    
});

// TODO: add POST route to create new entires 
router.post('/todos' ,function(req, res)
{
    var todo = req.body; 
    Todo.create(todo, function(error, todo)
    {
        if(error)
        {
            return res.status(500).json({error: error.message});
        }
        res.json({'todo': todo, message: 'Todo Created'});
    });
});
// TODO: add PUT routes
router.put('/todos/:id' ,function(req, res)
{
    var id = req.params.id;
    var todo = req.body; 
    if(todo && todo._id !== id )
    {
        return res.status(500).json({err: "Ids don't match"});
    }
    Todo.findByIdAndUpdate(id , todo, {new: true} ,  function(error, todo)
    {
        if(error)
        {
            return res.status(500).json({error: error.message});
        }
        res.json({'todo': todo, message: 'Todo Updated'});
    });
});
// TODO : add DELETE for deling entires


module.exports = router;