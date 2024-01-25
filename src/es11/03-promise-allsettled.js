// Manage multiple promises simultaneously
const promise1 = new Promise((resolve,reject) => reject("REJECT 1"));
const promise2 = new Promise((resolve,reject) => resolve("RESOLVE 2"));
const promise3 = new Promise((resolve,reject) => resolve("RESOLVE 3"));

// all resolves only if all promises are fullfilled
Promise.all([promise2,promise3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));

// allSettled can be used to view all promises status
Promise.allSettled([promise1,promise2,promise3]).then(response => console.log(response));