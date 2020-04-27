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


// ? Ex.4 For Tail call
// ? 4.1. factorial
console.log('\n4.1. Tail call for factorial recursive ...');
function factorial(n, total = 1){
    if (n === 1){
        return total;
    }
    return factorial(n-1, n*total);
}

console.log(factorial(5));
console.log(factorial(100));

// ? 4.2. currying factorial
console.log('\n4.2. Currying, tail call for factorial recursive ...');
function currying(fn, n){
    return function(m){
        return fn.call(this, m, n);
    }
}

function tailFactorial(n, total){
    if(n === 1) {
        return total;
    }
    return tailFactorial(n-1, n*total);
}

const factorialCurry = currying(tailFactorial, 1);
console.log(factorialCurry(5));
console.log(factorialCurry(100));

// ? 4.3 es6 default parameter for tail call recursive
console.log('\n4.3. ES6 default parameter makes tail call recur fac easier ...');
function factorialEs6(n, total = 1){
    if(n === 1)return total;
    return factorialEs6(n-1, n*total);
}

console.log(factorialEs6(5));
console.log(factorialEs6(100));

// ? 4.4. trampoline convert recursive to loop
console.log('\n4.4. Trampoline convert recursive to loop ...');
console.log('\nNote: trampoline is not tail call');
// * regular recursive
function sum(x, y){
    if(y > 0){
        return sum(x+1, y-1);
    }else{
        return x;
    }
}

// * trampoline + modified recursive
function trampoline(fn) {
    while(fn && fn instanceof Function){
        fn = fn();
    }
    return fn;
}

function sumTrampoline(x, y){
    if(y > 0){
        return sumTrampoline.bind(null, x+1, y-1);
    }else {
        return x;
    }
}
console.log(sum(0, 100));
console.log(trampoline(sumTrampoline(0, 100)));

// ? 4.5 real tail call recursive
console.log('\n4.5. real tail call recursive ...');
// ! NEED understand this !
function tco(f){
    let value;
    let active = false;
    let accumulated = [];

    return function accumulator(){
        accumulated.push(arguments);
        if(!active){
            active = true;
            while(accumulated.length){
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

let sumTco = tco(function(x, y){
    if(y > 0){
        return sumTco(x + 1, y - 1);
    }else {
        return x;
    }
});

console.log(sumTco(1,100));