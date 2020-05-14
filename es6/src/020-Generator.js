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

// ? Ex.2 with iterator
// ? 2.1 iterator interface with generator
console.log('\n2.1 iterator interface provided by generator ...');
let obj1 = {}
obj1[Symbol.iterator] = function * (){
    yield 1;
    yield 2;
    yield 3;
};

console.log([...obj1]);

// ? 2.2 proof
console.log('\n2.2 prove generator is iterator ...');
let fn1 = helloGenerator();
console.log(fn1[Symbol.iterator]() === fn1);

// ? Ex.3 Parameter of next()
// ? 3.1 parameter of next() is return value yield (inside generator)
console.log('\n3.1 parameter of next() is return value of yield ...');
function * fn2(){
    for(let i = 0; true; i++){
        let reset = yield i;
        if(reset) i = -1;
    }
}

let g2 = fn2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next(true));
console.log(g2.next());

// ? 3.2 another example
console.log('\n3.2 p of first next() is useless ...');
function * fn3(){
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
}

let g3 = fn3();
g3.next('No use');
g3.next('a');
g3.next('b');

// ? Ex.4 for ... of loop on generator
// ? 4.1
console.log('\n4.1 for ... of loop on generator ...');
console.log('Note: return 6, returns an object {done: true}, for...of stop here exclusively');
function * fn4(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for(let i of fn4()){
    console.log(i);
}

// ? Ex.5 Generator.prototype.throw()
// ? 5.1 throw() outside, catch inside
console.log('\n5.1 Generator.prototype.throw() outside, catch inside ...');
function * fn5 (){
    try{
        yield 1;
        yield 2;
        yield 3;
    }catch(e){
        console.log('Catch inside', e);
    }
};

let g4 = fn5();

console.log(g4.next());
try{
    console.log(g4.throw('a'));
    console.log(g4.next());
    console.log(g4.throw('b'));
    console.log(g4.next());
}catch(e){
    console.log('Catch outside', e);
}
console.log('Note: .throw() only be catachable after .next() has been executed');

console.log(g4.next());
