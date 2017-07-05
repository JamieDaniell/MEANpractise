'use stirct'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo' , function(error)
{
    if(error)
    {
        console.log('Failed to connect to mongodb')
    }
    console.log('Connected to mongodb succesfully');
});