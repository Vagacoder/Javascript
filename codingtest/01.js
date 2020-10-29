
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let chars = S.split('')
    // console.log(chars);
    const dict = {}

    for (let char of chars){
        if (char in dict){
            dict[char] = dict[char]+1;
        }else{
            dict[char] = 1;
        }
    }
    // console.log(dict);

    const arr = Object.values(dict);
    // for (let [key, value] of Object.entries(dict)){
    //     arr.push(value);
    // }

    // console.log(arr);

    arr.sort((e1, e2)=>{return (e2 - e1);});

    // console.log(arr);

    let sum = 0;
    let n = arr.length;
    for(let i = 0; i < n -1 ; i++){
        let curElement = arr[i];
        for (let j = i+1; j < n; j++){
            let nextElement = arr[j];
            if(nextElement > 0 && nextElement === curElement){
                arr[j]-=1;
                sum++;
            }else{
                break;
            }
            // console.log('i:' + i + ' j:' + j + ' sum:'+sum);
            // console.log(arr);
        }
    }
    return sum;
}

let s1 = 'ccaaffddecee';
console.log(solution(s1));

