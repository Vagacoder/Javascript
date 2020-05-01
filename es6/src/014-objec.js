// * ch10 Objects

// ? Ex.1 Easy attributes 
// ? 1.1 Simple example
console.log('1.1 Easy attributes for object ...');
let a = 123;
let b = "aBc";
let fn1 = function(x, y){
    return {x, y};
}
let c = {a, b, fn1};
console.log(c);
console.log(c.fn1(42, "hello"));

// ? Ex.2 using square bracket for Object construction
// ? 2.1 simple example
console.log('\n2.1 using [] in object construction ...');
let obj1 ={
    [b]: true,
    [b+a]: "new",
    ['fn' + 'New']: fn1
}
console.log(obj1);
console.log(obj1[b]);
console.log(obj1['aBc']);
console.log(obj1.aBc);
console.log(obj1[b+a]);
console.log(obj1.fnNew('hello', 'world'));

// ? Ex.3 super keyword for object method
// ? 3.1 only easy attribute function can use super
console.log('\n3.1 only object easy attribute function can use super');
let proto = {
    h :"hello",
    fn1(){
        console.log(this.h);
    }
}

let obj2 = {
    h : "hacked!",
    fn1(){
        super.fn1();
    }
}
Object.setPrototypeOf(obj2, proto);
obj2.fn1();
console.log('Note: this keyword is bound to current object. ');
console.log('since super.fn1() ==> ``` let temp = super.fn1; temp();```');
console.log('js engine execute: return Object.getPrototypeOf(this).fn1;');

// ? Ex.4 spread syntax for Objects
// ? 4.1 cannot copy prototype attributes
console.log('\n4.1 spread syntax cannot copy prototype attributes ...');
let obj3 = {a: 1};
let obj4 = {b: 2};
Object.setPrototypeOf(obj3, obj4);
console.log(obj3.b);
let obj5 = {...obj3};
console.log(obj5.b);

// ? Ex.5 optinal chaining operator ?.
// ? 5.1 simple example
console.log('\n5.1 optional chaining operator ....');
let obj6 = {
    message:{
        body:{
            user:{}
        }
    }
};
console.log(obj6 && obj6.message && obj6.message.body && obj6.message.body.firstName ||"first name is not found!" );
// console.log((obj6?.message?.body?.user?.firstName || "first name is not found!"));

// ? Ex.6 Nullish coalescing operator ??
// ? 6.1 simple example
console.log('\n6.1 Nullish coalescing operator ?? ...');
let g = '';
let h = 0;
let i = false;
console.log('checking whether variable is null, if null, pring defaul value ...');
console.log(g || "Default value");
console.log(h || "Default value");
console.log(i || "Default value");
// console.log(g ?? "Default value");
// console.log(h ?? "Default value");
// console.log(i ?? "Default value");
