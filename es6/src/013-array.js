// * ch.9 Array 

// ? Ex.1 Spread syntax for array
// ? 1.1. ... can break array to elements separated  by comma
console.log('1.1. Spread syntax break array ...');
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4], 5, ...[6, 7]);

// ? 1.2. empty array after ... return nothing
console.log('\n1.2. empty array after ... returns nothing ...');
console.log([...[], 1]);
console.log([1]);
console.log([, 1]);
console.log([undefined, 1]);

// ? 1.3. repalce Function.apply()
console.log('\n1.3. repalce Function.apply()');
console.log(Math.max(1, 2, 3, 4));
console.log(Math.max.apply(null, [1, 2, 3, 4]));
console.log(Math.max(...[1, 2, 3, 4]));

// ? 1.4 copy array
console.log('\n1.4. copy an array ... ');
let arr1 = [1, 2, 3]
let arr2 = arr1.slice(0);
let arr3 = [...arr1];
let [...arr4] = arr1;
arr1[0] = 9;
console.log(arr2);
console.log(arr3);
console.log(arr4);

// ? 1.5 concatenation array
console.log('\n1.5. concatenate arrays ...');
let arr5 = [...arr1, ...arr2, ...arr3];
console.log(arr5);

// ? 1.6. using with destructuring
console.log('\n1.6. using with destructuring ...');
let [a1, a2, ...arr6] = arr5;
console.log(a1);
console.log(a2);
console.log(arr6);

let [first, ...rest] = []
console.log(first);
console.log(rest);

// ? 1.7. ... recognize 4 bytes UTF-16 code point
console.log('\n1.7. ... can recognize 4 bytes UTF-16 code point ...');
let str1 = 'x\uD83D\uDE80y';
console.log(str1);
console.log(str1.length);
console.log([...str1].length);