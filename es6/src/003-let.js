// * ch2. let and const

// ? EX.1 in for loop
// * 1.1. index i is declared by var
let a = [];
for(var i = 0; i < 10; i ++){
    a[i] = function(){
        console.log(i);
    };
}
// ! any element in a output global variable i
a[6]();

// * 1.2. index i is declared by let
let b = [];
for(let j = 0; j < 10; j++){
    b[j] = function(){
        console.log(j);
    };
}
// ! elements in b outputs local variable j
b[6]();

// * 1.3. for loop condition is a parent scope, for loop statement is a child scope
for (let k = 0; k < 3; k++){
    let k = 'abc';
    console.log(k);
}

// ? Ex.2 let binding the variable to its current local block scope
// * 2.1. TDZ starts and ends
let temp = 123;

if(true){
    // ! TDZ starts
    // temp = 'abc';    // ! ReferenceError: Cannot access 'temp' before initialization
    // console.log(temp);   // ! ReferenceError: Cannot access 'temp' before initialization

    let temp;   // ! TDZ ends
    console.log(temp);  // ! undefined
    temp = "hello";
    console.log(temp); 
}

// * 2.2. typeof is not always safe any longer
{
    // typeof temp; // ! ReferenceError: Cannot access 'temp' before initialization
    let temp;
    temp = "hello";
    console.log(typeof temp);
}

// * 2.3. examples of not-so obivoud TDZ
// ! Error
// function bar(x=y, y=2){  // ! ReferenceError: Cannot access 'temp' before initialization
//     return [x, y]
// }
// bar();

// * correct
function bar(x =2, y=x){
    return[x, y];
}
console.log(bar());

// * correct
var h = h;

// ! Error
// let g = g; // ! ReferenceError: Cannot access 'temp' before initialization

// ? Ex.3 Cannot re-declare same variable in same scope
function fn1(arg){
    // let arg;    // ! ReferenceError: Cannot access 'temp' before initialization
}   
fn1();

function fn2(arg){
    {
        let arg;
    }
}
fn2();
