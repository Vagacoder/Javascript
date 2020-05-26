"use strict";

require("core-js");

// * ch1, how to setup and use babel
var input = ['a', 'b', 'c', 'd'];
var result = input.map(function (item) {
  return item.toUpperCase();
});
var o1 = {
  age: 30,
  getAge: function getAge() {
    console.log(this.age);
  }
};
var o2 = {
  age: 40
};
console.log(result);
o1.getAge(); // o2.getAge();

Object.assign(o2, o1);
o2.getAge();
//# sourceMappingURL=001-example.js.map