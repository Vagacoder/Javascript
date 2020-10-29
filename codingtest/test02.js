// * Write a function:

//  ? function solution(A);

// that, given an array A of N integers, returns the smallest positive integer 
// (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

//         N is an integer within the range [1..100,000];
//         each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution1(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (let number = 1; number <= 1000001; number++){
        let found = false;
        for(let i= 0; i<A.length;i++){
            if (A[i] === number){
                found = true;
                break;
            }
        }
        if (!found){
            return number;
        }
    }
}

function solution2(A){
    let statics = {}
    for (let i = 0; i < A.length; i++){
        if (A[i] > 0 && !(A[i] in statics)){
            statics[A[i]] = 1;
        }
    }

    for (let number = 1; number <= 1000001; number++){
        if (!(number in statics)){
            return number;
        }
    }


}

a1 = [1, 3, 6, 4, 1, 2];

a2 = []
for(let i = 0; i < 1000000; i++){
    a2.push(i);
}

a2.splice(999999, 1);

console.log('a2', a2.length);
console.log(solution2(a2));
