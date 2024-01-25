// Arrow function to try promises
const promiseTest = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            resolve('Callback resolved successfully!');
        } else {
            reject('Callback rejected -_-');
        }
    })
}

// Test promise, no semi-colon after each THEN, CATCH or FINALLY blocks
promiseTest()
    // THEN block references to the RESOLVE method
    .then(response => console.log(`Success: ${response}`))
    .then(response => console.log('This is another response'))
    .then(console.log('First block without RESPONSE reference'))
    .catch (err => console.log(`Error: ${err}`))
    .finally(() => console.log('Promise finished...'))