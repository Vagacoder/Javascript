// * ch3 Destructuring

// ? Ex.1. using destructuring in function parameter
// ? 1.1.
console.log('1.1.');
function fn1({x =0, y =0} = {}){
    return [x, y];
    }

console.log(fn1({x:3, y:8}));
console.log(fn1({x:3}));
console.log(fn1({}));
console.log(fn1());

// ? 1.2.
console.log('\n1.2.');
function fn2({x =0, y =0}){
    return [x, y];
    }

console.log(fn2({x:3, y:8}));
console.log(fn2({x:3}));
console.log(fn2({}));
// console.log(fn2());     // ! TypeError: Cannot read property 'x' of undefined

// ? 1.3.
console.log('\n1.3.');
function fn3({x, y} = {x:0, y:0}){
    return [x, y];
}

console.log(fn3({x:3, y:8}));
console.log(fn3({x:3}));
console.log(fn3({}));
console.log(fn3());

// ? Ex.2. Iterate Map structure
console.log("\n Ex.2.");
const map = new Map();
map.set('first', 'Hello');
map.set('second', 'World');
map.set('third', 'Welcome');
map.set('fourth', 'Here!');

for(let [key, value] of map){
    console.log(key + " is " + value);
}