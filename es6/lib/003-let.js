"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// * ch2. let and const
// ? EX.1 in for loop
// * 1.1. index i is declared by var
var a = [];

for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
} // ! any element in a output global variable i


a[6](); // * 1.2. index i is declared by let

var b = [];

var _loop = function _loop(j) {
  b[j] = function () {
    console.log(j);
  };
};

for (var j = 0; j < 10; j++) {
  _loop(j);
} // ! elements in b outputs local variable j


b[6](); // * 1.3. for loop condition is a parent scope, for loop statement is a child scope

for (var k = 0; k < 3; k++) {
  var _k = 'abc';
  console.log(_k);
} // ? Ex.2 let binding the variable to its current local block scope
// * 2.1. TDZ starts and ends


var temp = 123;

if (true) {
  // ! TDZ starts
  // temp = 'abc';    // ! ReferenceError: Cannot access 'temp' before initialization
  // console.log(temp);   // ! ReferenceError: Cannot access 'temp' before initialization
  var _temp; // ! TDZ ends


  console.log(_temp); // ! undefined

  _temp = "hello";
  console.log(_temp);
} // * 2.2. typeof is not always safe any longer


{
  // typeof temp; // ! ReferenceError: Cannot access 'temp' before initialization
  var _temp2;

  _temp2 = "hello";
  console.log(_typeof(_temp2));
} // * 2.3. examples of not-so obivoud TDZ
// ! Error
// function bar(x=y, y=2){  // ! ReferenceError: Cannot access 'temp' before initialization
//     return [x, y]
// }
// bar();
// * correct

function bar() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
  return [x, y];
}

console.log(bar()); // * correct

var h = h; // ! Error
// let g = g; // ! ReferenceError: Cannot access 'temp' before initialization
// ? Ex.3 Cannot re-declare same variable in same scope

function fn1(arg) {// let arg;    // ! ReferenceError: Cannot access 'temp' before initialization
}

fn1();

function fn2(arg) {
  {
    var _arg;
  }
}

fn2();
//# sourceMappingURL=003-let.js.map