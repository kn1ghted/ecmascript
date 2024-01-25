// ASYNC / AWAIT concept with a simple generator functions
async function* myGeneretor () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
    yield await Promise.resolve(5);
}

// Instance of my generator
let otherGenerator = myGeneretor();
otherGenerator.next().then(response => console.log(response.value));
otherGenerator.next().then(response => console.log(response.value));
otherGenerator.next().then(response => console.log(response.value));
otherGenerator.next().then(response => console.log(response.value));
otherGenerator.next().then(response => console.log(response.value));

// This will be executed first, before the promise validation
console.log('Hey!')

// Another example of async function
async function arrayOfNames (array) {
    for await (let value of array) {
        console.log(value);
    }
}

console.log('Before function call');
const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After function call');