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

// ? Ex.2 Array.form()
// ? 2.1. convert array-like object to real array
console.log('\2.1. Array.form() convert array-like object to a real array ...');
let arrlike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    'length': 3
}
console.log(arrlike);
console.log([].slice.call(arrlike));
console.log(Array.from(arrlike));
console.log(Array.from({length: 3}));

// ? 2.2 spread syntax ... can NOT convert array-like object
console.log('\n2.2. Spread syntax ... can not convert array-like object ...');
console.log(arrlike);
// ! console.log([...arrlike]); // error!
// ! console.log([...{length: 3}]); // error!

// ? 2.3. Array.form conver iterable object
console.log('\n\2.3. Array.form() convert iterable object ... ');
console.log(Array.from("Hello, world!"));

// ? 2.4. Array.form using 2nd parameter
console.log('\n2.4. Array.form() 2nd parameter ...');
console.log(arrlike);
console.log(Array.from(arrlike, (x, index)=> (index + ": " + x).toUpperCase()));
console.log(Array.from({length: 10}, x => -1));


// ? Ex.3 Array.of()
// ? 3.1. Array.of() can replace array constructor
console.log('\n3.1. Array.of() for arry constructor ...');
console.log(Array.of());
console.log(Array.of(5));
console.log(Array.of(5, 10, 15));

// ? Ex.4 Array.prototype.copyWithin()
// ? 4.1. simple examples
console.log('\n4.1. Array.prototype.copyWithin() ...');
let arr7 = [0, 1, 2 ,3, 4, 5, 6];
let arr8 = [...arr7];
console.log(arr7);
console.log(arr7.copyWithin(1, 3, 5));
console.log(arr7.copyWithin(1,3));

// ? Ex.5 Array.prototype.find() and findIndex()
// ? 5.1. simple examples
console.log('\n5.1. Array.prototype.find() and findIndex() ... ');
console.log(arr8);
console.log(arr8.find((n, index, arr)=>{return (n*n - index*2*2) > 0}));
console.log(arr8.findIndex((n, index, arr)=>{return (n*n - index*2*2) > 0}));

// ? Ex.6 fill()
// ? 6.1. simple example
console.log('\n6.1. fill() ... ');
let arr9 = new Array(10);
console.log(arr9);
arr9.fill(119, 0, 10);
console.log(arr9);

// ? Ex.7 flat() and flatMap()
// ? 7.1. simple example
console.log('\n7.1. flat() ... ');
let arr10 = [1, 2, [3, 4]];
console.log(arr10);
console.log(arr10.flat());
let arr11 = [1, [2, [3, [4, 5]]]];
console.log(arr11);
console.log(arr11.flat());
console.log(arr11.flat(2));
console.log(arr11.flat(Infinity));


console.log('a' in {'a': 1, 'b':2, 'c':3});
console.log('a' in ['a', 'b', 'c']);
console.log(0 in ['a', 'b', 'c']);
