// ? Ch.10 Numbers
// ? Ex.1 binary and octal
console.log('1. Binary and Octal numbers ...');
console.log(Number(0o767));
console.log(Number(0b1101));

// ? Ex.2 isInteger() return wrong results
// ? all numbers in js are float double precision, 3.0..02 least significant digit
// ? is beyond range of float, and truncated.
// ? 5E-325 is beyond the min value of float, js return it to 0
console.log('\n2. isInteger() could return wrong results ...');
console.log(Number.isInteger(3.0000000000000002));
console.log(Number.isInteger(5E-324));
console.log(Number.isInteger(5E-325));

// ? Ex.3 Number.EPSILON
// ? 3.1. value of EPSILON
console.log('\n3.1 value of EPSILON ...');
console.log(Number.EPSILON);
console.log(Number.EPSILON.toFixed(20));
console.log(Number.EPSILON === Math.pow(2, -52));
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE.toFixed(100));

// ? 3.2 famous js question: 0.1 + 0.2 != 0.3
console.log('\n3.2. famouse Q: 0.1 + 0.2 != 0.3 ...');
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 - 0.3);
console.log((0.1 + 0.2 - 0.3) < Number.EPSILON);

// ? Ex.4 Safe integer
// ? 4.1. integer ranger is -2^53 to 2^53, beyond this, it is not precise
console.log('\n4.1 integer safe range ...');
console.log(Math.pow(2, 53));
console.log((Math.pow(2, 53)) ==(Math.pow(2, 53) + 1));

// ? 4.2 isSafeInteger()
console.log('\n4.2 isSageInteger() ...');
console.log(Number.isSafeInteger(Math.pow(2, 53) + 1));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

// ? Ex.5 Big integer
// ? 5.1. with postfix n
console.log('\n5.1. Big integer with postfix n ...');
let a = 21306849238n;
let b = 40582306401n;
console.log(a * b);
console.log(Number(a) * Number(b));

// ? 5.2. all format number can be with n
console.log('\n5.2. all format number can be with n ...');
console.log(0xffn);
console.log(0b1001n);
console.log(0o767n);

// ? 5.3. BigInt type is bigint, which is different from regular numbers
console.log('\n5.3. BigInt type is bigint, which is different from regular numbers ...');
console.log(typeof(a));
console.log(12n === 12);
