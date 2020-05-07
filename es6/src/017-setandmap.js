// * Ch13 Set and Map

// ? Ex.1 Set
// ? 1.1 Set P, with iterable interface
console.log('1.1 Set\'s P with iterable interface ...');
let set1 = new Set();
let arr1 = [1, 3, 5, 7, 9, 11];
arr1.forEach(value => set1.add(value));
console.log(set1);
console.log(new Set(arr1));

// ? 1.2 Set consider NaN is same 
console.log('\n1.2 Set consider NaN is same ...');
let a = NaN;
let b = NaN;
console.log(a === b);
set1.add(a);
set1.add(b);
console.log(set1);

// ? 1.3 check a key/value of Set
console.log('\n1.3 Check a key/value whether in Set ...');
if(set1.has(NaN)){
    console.log('Found NaN!');
}else{
    console.log('Not found NaN!');
}

// ? 1.4 convertion between array and set
console.log('\n1.4 convertion between array and set ...');
console.log(Array.from(set1));

// ? 1.5 use for of iterate set directly
console.log('\n1.5 iterate Set using for-of directly on set ...');
for(let x of set1){
    console.log(x);
}
for(let x of set1.values()){
    console.log(x);
}

// ? Ex.2 Map
// ? 2.1 construct a Map 
console.log('\n2.1 construct a Map ...');
let obj1 = {foo: 'hello'};
let m1 = new Map([obj1, ['bar', 'world']], ['baz', 123]);
console.log(m1);
console.log(m1.has('bar'));
console.log(m1.get('bar'));
console.log(m1.has(obj1));
console.log(m1.get(obj1));
let obj2 = {name: 'welcome'};
m1.set(obj2, true);
console.log(m1.has(obj2));
console.log(m1.get(obj2));
console.log(m1);

// ? 2.2 using object as key, must be same reference
console.log('\n2.2 when using object as key, key must be same reference ...');
let m2 = new Map();
m2.set(1, 'aaa');
console.log(m2.get(1));
m2.set(obj1, 'bbb');
console.log(m2.get(obj1));
m2.set({}, 'ccc');
console.log(m2.get({}));
console.log(m2);

// ? 2.3 map.set() return current map, so that can be chained.
console.log('\n2.3 map.set() returns current map, so that can be chained ...');
let m3 = new Map();
m3.set('a', 123).set(99, "hello").set({foo: 'hello'}, true);
console.log(m3);

// ? 2.4 the iterating order of map is the insertion order.
console.log('\n2.4 the order of iterating on map is the order of insertion ...');
m3.forEach((value, key)=>console.log(key, ": ", value));
console.log('\nother iteration methods ....');
console.log(m3.keys());
console.log([...m3.keys()]);
console.log([...m3.values()]);
console.log([...m3.entries()]);

// ? 2.5 converting between map and object, JSON 
console.log('\n2.5 converting betweem map and object, JSON ...');
let obj3 = {...obj1, ...obj2};
console.log(obj3);
let m4 = new Map(Object.entries(obj3));
console.log(m4);
let obj4 = {};
for(let [key, value] of m4.entries()){
    obj4[key] = value;
}
console.log(obj4);
console.log(JSON.stringify(obj4));
