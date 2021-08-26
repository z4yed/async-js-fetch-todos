// if a function is async - it returns Promise automatically
// async function test (){
//     // if we return any value, it will be the PromiseResult
//     return {fullName: "Zayed"}
// }

// // console.log(test()) // logs the returned result

// test().then(response => {
//     alert(response.fullName)
// })


const p2 = new Promise(resolve => setTimeout(resolve, 2000, "Thats Awesome. "))

async function myAsyncFunction(){
    // If we don't use await
    // p2.then(v => {
    //     console.log(v)
    // })

    // using await
    let response = await p2; // execution stops until p2 promise is resolved. 
    console.log(response)

    console.log("As previous promise is resolved, it is printed. ")
}

myAsyncFunction()


// async-await + PromiseALl

// let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

// async function promiseAll(){
//     let response = await Promise.all(promises)
//     console.log(response);
//     // logs [1, 2, 3]
// }

// promiseAll()