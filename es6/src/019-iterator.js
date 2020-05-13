// * Ch17 Iterator

// ? Ex.1 intro
// ? 1.1 home made iterator
console.log('1.1 Home-made iterator ...');
function iteratorFactory(array){
    let nextIndex = 0;
    return{
        next:function(){
            return nextIndex < array.length 
            ? 
            {
                value: array[nextIndex++],
                done:false
            } 
            : 
            {
                value: undefined,
                done: true
            };
        }
    };
}

let it1 = iteratorFactory([1, 2, 3, 4]);
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

// ? Ex.2 iterator on Symbo.iterator
// ? 2.1 Symbol.iterator attribute
console.log('\n2.1 iterator from Symbol.iterator attribute ...');
let obj1 = {
    [Symbol.iterator]: function(){
        let a = 0;
        return {
            next: function(){
                return {
                    value: ++a < 4? a: undefined,
                    done: a < 4? false : true
                };
            }
        }
    }
}

let it2 = obj1[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

for(let a of obj1){
    console.log(a);
}

// ? 2.2 another example
console.log('\n2.2 Another example, add iterator to object ...');
let obj2 ={
    data: ['a', 'b', 'c'],
    [Symbol.iterator](){
        const self = this;
        let index = 0;
        return {
            next(){
                if(index < self.data.length){
                    return {
                        value: self.data[index++],
                        done: false
                    };
                }else {
                    return {
                        value: undefined,
                        done: true
                    }
                };
            }
        }
    }
}

let it3 = obj2[Symbol.iterator]();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());

// ? 2.3 array-like object, directly use array[Symbol.iterator]
console.log('\n2.3 array-like object, directly use array[Symbol.iterator]...');
let obj3 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
obj3[Symbol.iterator] = Array.prototype[Symbol.iterator]
let it4 = obj3[Symbol.iterator]();
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());

// ? Ex.3 String iterator
// ? 3.1 String is array-like object with iterator
console.log('\n3.1 String is array-like object with iterator ...');
let it5 = "Hi"[Symbol.iterator]();
console.log(it5.next());
console.log(it5.next());
console.log(it5.next());
console.log([..."Hello"]);

// ? Ex.4 Simplest implementation for iterator
// ? 4.1 using Generator
console.log('\n4.1 Simplest impl for Iterator is Generator ...');
let obj4 = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
    }
}

let it6 = obj4[Symbol.iterator]();
console.log(it6.next());
console.log(it6.next());
console.log(it6.next());
console.log(it6.next());

// ? Ex.5 for... of loop 
// ? 5.1 using iterator
console.log('\n5.1 for .. of loop using iterator ... ');
let arr1 = ['red', 'green','yello'];
let obj5 = {};
obj5[Symbol.iterator] = arr1[Symbol.iterator].bind(arr1);

for(let i of obj5){
    console.log(i);
}