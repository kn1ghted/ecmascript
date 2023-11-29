// Arrow function to try promises
const promiseTest = () => {
    return new Promise((resolve,reject) => {
        if (false) {
            resolve('Callback resolved successfully!');
        } else {
            reject('Callback rejected -_-');
        }
    })
}

// Test promise
promiseTest()
    // THEN block references to the RESOLVE method
    .then(response => console.log(`Success: ${response}`))
    .then(response => console.log('This is another response'))
    .then(console.log('First block without RESPONSE reference'))
    .catch (err => console.log(`Error: ${err}`));