// * Ch16. Promise

// ? Ex.1 construct promise
// ? 1.1 simple examples
console.log('1.1. construct a promise ...');
let p1 = new Promise((res, rej) =>{
    if(true){
        res("1.1 Good!");
    }else{
        rej("1.1 Bad!");
    }
})
p1.then((res) => console.log(res));

// ? 1.2 resolve and reject, then()
console.log('\n1.2. resoleve and reject, then() ...');
let p2 = (bool) => {
    return new Promise((res, rej) => {
        if(bool){
            res('Done!');
        }else{
            rej('Error!');
        }
    })
}

p2(true).then((res) =>{console.log('1.2 Resolved as ', res);}, 
(rej) => {console.log('1.2 Reject as ', rej)});

p2(false).then((res) =>{console.log('1.2 Resolved as ', res);}, 
(rej) => {console.log('1.2 Reject as ', rej)});

p2(false).then((res)=>{console.log('1.2 Resolved as ', res);})
.catch((er)=>{console.log('1.2 Catch as ',er)});

// ? 1.3 promise executed at once, but promise res/rej at next event loop
let p3 = new Promise((res, rej) =>{
    console.log('\n1.3. promise executed at once, but its result: res/rej return at next event loop ...');
    console.log("1.3 In promise!");
    res('1.3 Resolved!');

})

p3.then((r)=>{
    console.log(r);
})

console.log('1.3 Something else after promise');


// ? 1.4 async loading image
function loadImageAsync(url){
    return new Promise((res, rej) =>{
        let image = new Image();

        image.onload = ()=>{
            res(image);
        };

        image.onerror = ()=>{
            rej(new Error('Could not load image at ' + url));
        }

        image.src = url;
    });
}

// ? 1.5 Ajax
const getJSON = (url) =>{
    const promise = new Promise((res, rej)=>{
        const handler = function(){
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                res(this.response);
            }else{
                rej(new Error(this.statusText));
            }
        };

        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });

    return promise;
}

// ? 1.6 res/rej will NOT return Promise callback
console.log('\n1.6. res/rej will NOT terminate Promise callback execution...');
new Promise((res, rej) => {
    res(1);
    console.log('1.6 Inside promise, after res');
}).then(r => {
    console.log(r);
})

// ? Ex.2 then()

