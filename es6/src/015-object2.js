// * Ch11 Object new methods

// ? Ex.1 Object.is(), Same-value equality
// ? 1.1. its same as ===
console.log('\n1.1 Object.is() is almost same as === ...');
console.log(Object.is({}, {}));
console.log(Object.is('foo', 'foo'));

// ? 1.2. its improved to compare +0 -0 and NaN
console.log('\n1.2 Object.is() is improved to compare +0 -0 and NaN ...');
console.log(+0 === -0);
console.log(Object.is(+0, -0));
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

// ? Ex.2 Object.assign() 
// ? 2.1 first p is target, all rest P are source, for same attr, latter one overweite former one
console.log('\n2.1 Object.assign(), 1st P is target, rest are sources, attri will be overwriten...');
let obj1 = {};
let obj2 = {a: 1, b: 2};
let obj3 = {b: 22, c:3};
let obj4 = {c: 33};
Object.assign(obj1, obj2, obj3, obj4);
console.log(obj1);

// ? 2.2. only one p, will return it
console.log('\n2.2 with only one p, return it ...');
console.log(Object.assign({a:1}));

// ? 2.3 for different type of P
console.log('\n2.3 for different type of P ... ');
let p1 = 'abc';
let p2 = true;
let p3 = 10;
let obj5 = Object.assign({}, p1, p2, p3);
console.log('\n only string to char[], other types dont work');
console.log(obj5);

// ? 2.4 only copy own enumerable attributes
console.log('\n2.4 only copy OWN Enumerable attributes ...');
let obj6 = {a : 1};
let obj7 = {};
Object.defineProperty(obj7, 'hidden', {
    enumerable: false,
    value:'hello'
});
console.log(obj6);
console.log(obj7);
console.log(obj7.hidden);
Object.assign(obj6, obj7);
console.log(obj6.hidden);

// ? 2.5 Object.assign() can copy value only
console.log('\n2.5 assign() can copy value only, not function ...');
let obj8 = {
    get value(){
        return 1;
    }
}
let obj9 = {}
console.log(Object.getOwnPropertyDescriptor(obj8, "value"));
Object.assign(obj9, obj8);
console.log(obj9);
console.log(Object.getOwnPropertyDescriptor(obj9, "value"));


// ? 2.6 used as shallow clone()
console.log('\n2.6 used as shallow clone()... ');
function sClone(origin){
    return Object.assign({}, origin);
}
let obj10 = {val: "abc"};
Object.defineProperty(Object.getPrototypeOf(obj10), 'fromParent', {
    value: "parent"
});
console.log(obj10);
console.log(obj10.fromParent);
let obj11 = sClone(obj10);
console.log(obj11);
console.log(obj11.fromParent);

// ? 2.7 merge multiple objects
console.log('\n2.7 merge multiple objects ...');
console.log(Object.assign([], obj6, obj10));

// ? Ex.3 Object.getOwnPropertyDescriptors()
// ? 3.1 combine with assign() to copy setters and getters
console.log('\n3.1 combine with assign() to copy getter and setter ...');
let obj12 = {
    set foo(value){
        console.log(value);
    }
}
let obj13 = {}
let obj14 = {}
Object.assign(obj13, obj12);
console.log(obj13.foo);
Object.assign(obj14, Object.getOwnPropertyDescriptors(obj12));
console.log(obj14.foo);
console.log(obj14.foo=1);

// ? 3.2 combine with create() to clone
console.log('\n3.2 combine with create() to clone ... ');
function bClone(obj){
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
let obj15 = bClone(obj12);
console.log(obj15);
console.log(obj15.foo=2);

// ? Ex.4 prototype of object
// ? 4.1 get prototype
console.log('\n4.1 Get prototype of object ...');
console.log(obj15.__proto__);
console.log(Object.getPrototypeOf(obj15));

// ? 4.2 set prototype
console.log('\n4.2 Set prototype of object ...');
let obj16 = Object.setPrototypeOf(obj15, {x : 100})
console.log(Object.getPrototypeOf(obj15));
console.log(Object.getPrototypeOf(obj16));

// ? Ex.5 Object.keys(), .values(), entries()
// ? 5.1 Object.keys(), values(), entries()
console.log('\n5.1 Object.keys(), values(), entries() ... ');
console.log(obj1);
for(let key of Object.keys(obj1)){
    console.log(key);
}
for(let value of Object.values(obj1)){
    console.log(value);
}
for(let entry of Object.entries(obj1)){
    console.log(entry);
}

// ? 5.2 Object.entries() to Map
console.log('\n5.2 entries.() to Map ...');
console.log(obj1);
let map1 = new Map(Object.entries(obj1));
console.log(map1);


// ? Ex.6 Object.fromEntries()
// ? 6.1 fromEntries() is reversed operation of entries()
console.log('\n6.1 fromEntries() is reversed op of entries() ...');
console.log(Object.fromEntries(map1));
