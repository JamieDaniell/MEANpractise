'use strict';
var angular = require('angular');
// angualr is creating a new module called todolist app must come before the rest of the directives(controllers)
angular.module('todoListApp', []);

require('./scripts/controllers/main.js');
