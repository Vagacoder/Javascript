// * ch8 Functions

// ? Ex.1 default parameter
// ? 1.1. ES5 ways
function fnEs5(x, y){
    y = y || "World";
    console.log(x, " ", y);
}
console.log('1.1. Es5 ways to get default P ....');
fnEs5('Hello');
fnEs5('Hello', 'js');
console.log('Note: empty string is false');
fnEs5('Hello', '');

// ? 1.2. ES6 ways
function fnEs6(x, y = "World"){
    console.log(x, " ", y);
}
console.log('\n1.2. Es6 ways to get default P ....');
fnEs6('Hello');
fnEs6('Hello', 'js');
fnEs6('Hello', '');

// ? 1.3. once using default P, cannot have Ps with same name
console.log("\n1.3. Once function is using default P, cannot have Ps with same name...");
function fn1(x, x, y){
    console.log("This is ok.");
}
fn1();

// function fn2(x, x, y = 1){
//     console.log('This is not ok.');
// }
// fn2();

// ? 1.4. The default P is evaluated when function is called
console.log('\n1.4. default P is evaluated when function is called');
let x = 99;
function fn3(p = x + 1){
    console.log(p);
}
fn3();

x = 100;
fn3();

// ? 1.4 default P causes function.length -n
console.log('\n1.4. using every default P, function.length --');
console.log(fnEs5.length);
console.log(fnEs6.length);
console.log('actually, all other Ps after default P are not accounted ...');
console.log((function (a, b, c) {}).length);
console.log((function (a = 0, b, c) {}).length);
console.log((function (a, b = 1, c) {}).length);

// ? Ex.2 Context and Scope of default P is temperary and independent
// ? 2.1. check the context and scope of parameters
console.log('\n2.1. check the context and scope of parameters ...');
let p = 1;
function fn4(p, q = p){
    console.log(q);
}
fn4(2);

function fn5(q = p){
    let p = 5;
    console.log(q);
}
fn5();

// ? 2.2. complicated examples for def P using function
console.log('\n2.2. compare the difference carefully ...');
var u = 1;
function fn10(u, s = function(){ u = 2;}){
    var u = 3;
    s();
    console.log(u);
}
fn10();
console.log(u);

function fn11(u, s = function(){ u = 2;}){
    u = 3;
    s();
    console.log(u);
}
fn11();

// ? Ex.3 rest parameter ...args
// ? 3.1. example for sum
console.log('\n3.1. example of rest parameter ...');
function add(...values){
    let sum = 0;
    for(var val of values){
        sum+=val;
    }
    return sum;
}

console.log(add(2, 3, 4, 5, 10));
