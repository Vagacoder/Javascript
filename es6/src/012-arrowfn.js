// * ch8. Arrow functions

// ? Ex.1 simple examples
// ? 1.1. 
console.log('1.1. simple example of arrow fucntions ...');
const isEven = n => n%2 ===0;
console.log(isEven(2));
console.log(isEven(3));

// ? 1.2. return an object need using parenthesis.
console.log('\n1.2. directly return objects need be enclosed with parenthese ...');
const getIdObj = newId => ({id: newId, name: "new user"});
console.log(getIdObj("123"));

// ? Ex.2 this keyword in arrow function
// ? 2.1. this is fixed and defined at function declaration
console.log('\n2.1. this key word is fixed when function is declared ...');
let id = 21;

function fn1(){
    console.log(id);
    (() => {
        console.log('id', this.id);
    })()
}

fn1.call();
fn1.call({id: 42});

// ? 2.2. arrow function has no its own this
console.log('\n2.2. arrow function has no own this, compare es5 and es6 implementation ...');
function fn2es6(){
    (() => {
        console.log(this);
    })();
}

function fn2es5(){
    let that = this;
    (function(){
        console.log(that);
    })();
}

fn2es6();
fn2es5();

// ? 2.3. One case, arrow function should not be used
console.log('\n2.3. Object method, using this, should not use arrow function ... ');
let obj1 = {
    r: 55,
    print: () => {
        console.log(this.r);
    }
}

let obj2 = {
    r: 55,
    print: function (){
        console.log(this.r);
    }
}
console.log(global.r);
obj1.print();
obj2.print();

