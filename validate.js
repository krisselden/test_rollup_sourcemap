var validate = require('sourcemap-validator');
var fs = require('fs');
var min = fs.readFileSync('bundle.min.js', 'utf8');
var map = fs.readFileSync('bundle.min.js.map', 'utf8');
validate(min, map);
