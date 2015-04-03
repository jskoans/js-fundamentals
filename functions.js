'use strict';

function A() {};            // function declaration

var B = function() {};      // function expression

var C = (function() {});    // function expression with grouping operators

var D = function foo() {};  // named function expression

var E = (function() {       // immediately-invoked function expression (IIFE) that returns a function
  return function() {};
})();

var F = new Function();     // Function constructor

var G = new function() {};  // special case: object constructor
