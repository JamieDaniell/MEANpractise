'use strict'
var express = require('express');
var router = express.Router();
var todos = require('../../mock/todos.json');

router.get('/todos' , function(req, res)
{
    res.json({todos: todos});
});

// TODO: add POST route to create new entires 
// TODO: add PUT routes 
// TODO : add DELETE for deling entires


module.exports = router;