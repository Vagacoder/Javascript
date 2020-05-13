// * Ch18 Generator

// ? Ex.1 Introduction
// ? 1.1 simple example 
console.log('1.1 simple generator ...');
function * helloGenerator(){
    yield 'hello';
    yield 'world';
    return 'bye';
}

let g1 = helloGenerator();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
