// Promise all

//  * There must be an Array of promises
//  * Promises resolves sequentially based on array
//  * If any promise is not resolved, it falls into catch block
//  * If all promise is resolved, then 'then' blocks executes 
//      & it receives an array as parameter

const p1 = new Promise(resolve => setTimeout(resolve, 3000, 'First Promise'));
const p2 = new Promise(resolve => setTimeout(resolve, 2000, 'Second Promise'));
const p3 = new Promise(resolve => setTimeout(resolve, 1000, 'Third Promise'));

const promiseArray = [p1, p2, p3];

Promise.all(promiseArray)
    .then(arr => {
        console.log(arr)
    })
    .catch(err => {
        console.log(err)
    })


// Promise Race
//  * There must be an Array of promises
//  * Only one promise is resolved based on time 

const prmsArr = [p1, p2, p3]

Promise.race(prmsArr)
    .then(response => {
        console.log(response)
    })
