// * Ch16. Promise

// ? Ex.1 construct promise
// ? 1.1 simple examples
console.log('1.1 construct a promise ...');
let p1 = new Promise((res, rej) =>{
    if(true){
        res("Good!");
    }else{
        rej("Bad!");
    }
})
p1.then((res) => console.log(res));
