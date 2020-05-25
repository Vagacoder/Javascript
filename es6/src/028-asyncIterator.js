// * Ch27 async iterator
// ? Ex.1 Async iterator
// ? 1.1 compare sync iterator and async iterator
console.log('1.1 compare sync and async iterator ...');
function idMakerSync() {
    let index = 0;

    return {
        next() {
            return {
                value: index++,
                done: false,
            }
        }
    };
}

const is = idMakerSync();
console.log('1.1', is.next());
console.log('1.1', is.next());
console.log('1.1', is.next());
console.log('1.1', is.next());

function idMakerAsync1() {
    let index = 0;
    return {
        next() {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res({ value: index++, done: false })
                }, 100);
            });
        }
    }
}

const ia1 = idMakerAsync1();
console.log('1.1', ia1.next().then((r) => r));
console.log('1.1', ia1.next());

function idMakerAsync2() {
    let index = 0;
    return {
        next() {
            return {
                value: new Promise((res, rej) => {
                    setTimeout(() => {
                        res(index++)
                    }, 100);
                }),
                done: false,
            };
        }
    }
}

const ia2 = idMakerAsync2();
ia2.next().value.then(r=> console.log('1.1, this works for value, but done is still sync', r));
ia2.next().value.then(r=> console.log('1.1, this works for value, but done is still sync', r));


