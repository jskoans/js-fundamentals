'use strict';

var B = function() {
  console.log('Tern works');
};

B();

var fs = require('fs');
fs.readFileSync('./.tern-project');

var R = require('ramda');
var res = R.zip([1], [2]);
console.log(res);
