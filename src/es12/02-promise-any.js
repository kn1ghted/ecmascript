// Manages several promises and returns the first resolved promises, bouncing all other promises given
const promise1 = new Promise((resolve,reject) => reject("REJECT 1"));
const promise2 = new Promise((resolve,reject) => resolve("RESOLVE 2"));
const promise3 = new Promise((resolve,reject) => resolve("RESOLVE 3"));

// all resolves only if all promises are fullfilled
Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error))