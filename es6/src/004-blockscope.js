// * ch2. let and const

// ? Ex.1 block scope
// * scope is chaining, from bottom to top, always look for nearest declaration.
let a = 1;
{
    let a = 2;
    function fn1(){
        let a = 3;
        console.log(a);
    }
    fn1();
}
{
    let a = 2;
    function fn1(){
        console.log(a);
    }
    fn1();
}
{
    function fn1(){
        console.log(a);
    }
    fn1();
}

// ? Ex2. variable hoist cause some problem
var temp = new Date();

function fn2(){
    console.log(temp);
    if(false){                  // ! { does not work for var
        var temp = "hello world";
    }                           // ! } does not work for var
}
fn2();
