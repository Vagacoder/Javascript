// * Ch25 programming diagram
// * based on Airbnb

// ? Ex.1 never use var, use const as much as possible
console.log('1. never use var, use const as much as possible ...');
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// ? Ex.2 static string use single quote, dynamic string use backtilt, never use "
console.log('\n2. static string use single quote, dynamic use backtilt, never use ""');
const s1 = 'foo';
const s2 = `foo${a}bar`;
console.log(s1, s2);

