'use strict';

var express = require("express");

var app = express();
var router = require('./api');

app.use('/' , express.static('public'));

app.use('/api', router);

app.listen(3000, function()
{
    console.log("The server is running on port 3000!");
});
