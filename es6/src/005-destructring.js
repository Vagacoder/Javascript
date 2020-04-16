// * ch3 Destructuring

// ? Ex1. any data structure with Iterator interface can be destructuring
// * generator can be destructuring
function* fibs(){
    let a = 0;
    let b = 1;
    while(true){
        yield a;
        [a, b] = [b, a+b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
console.log(sixth);

// ? Ex2. destructuring object to different property name
let {a : x} = {a: "hello", b: "world"};
// console.log(a);     // ! ReferenceError: a is not defined
console.log(x);

// ? Ex3. Array is an object
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let {0: number1, [arr.length-1]: numberLast} = arr;
console.log(number1);
console.log(numberLast);


