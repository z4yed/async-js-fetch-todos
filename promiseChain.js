const promise1 = Promise.resolve('First Promise. '); 
// console.log(promise1) promise1 contains Promise

promise1
    .then(response => {
        console.log(response);
        // Lets return another promise from here. 
        return Promise.resolve('Second Promise. ')
    })
    .then(response => {
        console.log(response); // prints Second Promise

        // lets return a rejected promise
        return Promise.reject(new Error("Error Occured. ")) // jumps to catch block
    })
    .then(response => {
        console.log(response); // this then block will not execute
    })
    .catch(error => {
        console.log(error.message)
    })