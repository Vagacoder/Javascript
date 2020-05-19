// * Ch20 Async function
// ? Ex.1 Syntax
// ? 1.1 async function returns a Promise
console.log('1.1 Async function returns a Promise ...');
async function fn1(){
    return '1.1 hello world';
}

fn1().then(a => console.log(a));

// ? 1.2 async function throwing error turns Promise to rejected
console.log("\n1.2 Async function throwing error turns Promise to rejected ...");
async function fn2(){
    throw new Error("1.2 error!");
}

fn2().then(a => console.log(a), b => console.log(b.message));


// ? 1.3 async Promise state is unfulfilled until all await are done
console.log('\n1.3 Promise state is unfulfill until all await are done ...');
async function fn3(){
    let a = await new Promise((res, rej) => {
        console.log('1.3 in A');
        setTimeout(()=> res(3),0);
    });
    let b = await new Promise((res, rej) => {
        console.log('1.3 in B');
        setTimeout(()=> res(a*2),0);
    });
    return b;
}

fn3().then(a => console.log("1.3 outside", a));

// ? Ex.2 await
// ? 2.1 if await followed with a Promise, await will return result of Promise
console.log('\n2.1 if await followed with a Promise, await will return result of Promise...');
async function fn4(){
    return await new Promise((res, rej)=>{
        setTimeout(()=> res('2.1 Done!'),0);
    })
}

fn4().then(a => console.log(a));

// ? 2.2 if await is not followed with Promise, directy return the value
console.log('\n2.2 if await is not followed with Promise, directly return the value...');
async function fn5(){
    return await 42;
}

fn5().then(a => console.log('2.2', a*5));

// ? 2.3 if await is followed with thenable object, treat it as Promise
console.log('\n2.3 if await is followed with thenable, treat it as Promise...');
class Sleep{
    constructor(timeout){
        this.timeout = timeout;
    };
    then(res, rej){
        const startTime = Date.now();
        setTimeout(()=> res(Date.now() - startTime), this.timeout);
    }
}

async function fn6(){
    const sleeptime = await new Sleep(0);
    console.log('2.3', sleeptime);
}

fn6();

// ? Ex.3 Error handle
// ? 3.1 put await statements inside try-catch
console.log('\n3.1 put await statements inside try-catch ...');
async function fn7(){
    try{
        await new Promise((res, rej) =>{
            throw new Error('3.1 Error');
        })
    }catch(e){
        console.log(e.message);
    }
}

fn7();
