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

