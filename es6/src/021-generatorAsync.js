// * Ch19 Generator and Async

// ? Ex.1 wrapping async function using generator
// ? 1.1 example of fetch()
console.log('1.1. wrap async function using generator ...');

// ! fetch api is not implemented in Node
// const fetch = require("node-fetch");
// global.fetch = require('node-fetch');

// fetch('https://developer.mozilla.org/en-US/').then(res => console.log(res));

// function * gen1(){
//     let url = 'https://developer.mozilla.org/en-US/';
//     let result = yield fetch(url);
//     console.log("Inside generator ", result);
// }

// let g1 = gen1();
// let result = g1.next();
// result.value.then((data) => console.log("Outside generator ", data.json()));

function * gen2(){
    yield setTimeout(() => {
        console.log('\nEx. 1.1 Timer is up.');
    }, 1000);
}

let g2 = gen2();
g2.next();

// ? Ex,2 Thunk function
// ? 2.1 simple thunk function
console.log('\n2.1 simple example of thunk function ...');
let x =42;
function fn1(u){
    return u * 2;
}

console.log(fn1(x + 5));

let thunk1 = function(){
    return x + 5
}

function fn2(t){
    return t() * 2;
}

console.log(fn2(thunk1));

// ? 2.2. thunk function in js
console.log('\n2.2. thunk function in js ...');
const Thunk = function(fn){
    return function(...args){
        return function(callback){
            return fn.call(this, ...args, callback);
        }
    }
}

function fn3(a, b, c, callback){
    callback(a, b ,c);
}

const fn3thunk = Thunk(fn3);

fn3thunk(1, 'a', false)(console.log);

// ? 2.3 auto executed generator (Sync only)
console.log('\n2.3 auto executed generator (Sync only) ...');
function * gen3(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let g3 = gen3();
let res = g3.next();

while(!res.done){
    console.log(res.value);
    res = g3.next();
}

console.log('Note: this only works for sync.');
