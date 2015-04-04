'use strict';

// expressions
// expressions by themselves don't do anything.
'psychoanalysis';
22;         // jshint ignore:line
!false;     // jshint ignore:line

// statements
// statements are made up of one or more expressions.
/* jshint ignore:start */
var a, b, c;
a = 3;              // example of a statement
b = a * 4;
c = b + a * 10;
/* jshint ignore:end */

// variables
// remembering or 'storing' values with a word
var answer = 5 * 10;
console.log(answer);
var mood = 'light';
console.log(mood);
mood = 'dark';
console.log(mood);
var e;
console.log(e);     // example of an empty variable
var one = 1, two = 2;
console.log(one + two);

// keywords and reserved words
// words that cannot be used as variables; they have special meaning and uses in javascript
/*
break case catch class const continue debugger
default delete do else enum export extends false
  finally for function if implements import in
    instanceof interface let new null package private
protected public return static super switch this
throw true try typeof var void while with yield
*/

// conditionals
// checking if something is true, if so, execute some statement(s),
// if not, execute some other statement(s)
// note that for a single statement, we don't need {} to group the statement.
var a = 10;

/* jshint ignore:start */
if (a < 9)
  console.log('a is smaller than 9');
else
  console.log('a is bigger than 9');
/* jshint ignore:end */

if (a < 12) {
  console.log('a is smaller than 12');
  console.log('we are happy that it is smaller!');
} else {
  console.log('a is bigger than 12');
  console.log('we are not happy that it is bigger!');
}

// loops

// Using while
var number = 0;
while(number <= 12) {
  console.log(number);
  number = number + 2;
}

// Using for
for (var number = 0; number <= 12; number += 2) {
  console.log(number);
}

// Breaking out
for (var current = 1; ; current++) {
  console.log(current);
  if (current % 7 === 0) {
    console.log('Breaking out at ' + current);
    break;
  }
}

// What if there's a lot of if-else?
var x = 'hello';
if (x === 'hi') {
  console.log('Not hello');
} else if (x === 'yo') {
  console.log('Not hello');
} else if (x === 'hello') {
  console.log('hello back to you');
} else {
  console.log('Not saying anything!');
}

// Using switch for cleaner syntax when there's lots of if-else
switch (x) {
  case 'hi':
    console.log('Not hello');
    break;
  case 'yo':
    console.log('Not hello');
    break;
  case 'hello':
    console.log('hello back to you');
    break;
  default:
    console.log('Not saying anything!');
    break;
}
