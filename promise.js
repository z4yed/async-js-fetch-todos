function getIphone(isPassed){
    const promise = new Promise((resolve, reject) => {
        if (isPassed) {
            resolve('Congratulations !! You got iPhone 12 Pro Max ');
        }
        else {
            reject(new Error('You have failed. Try next time. '));
        }
    })

    return promise;
}

getIphone(true)
    .then((resolve_response) => {
        console.log(resolve_response);
    })
    .catch((error)=> {
        console.log(error.message);
    });