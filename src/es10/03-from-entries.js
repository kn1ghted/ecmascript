// Creates an object from a map
let entries = new Map([["name", "Oscar"], ["age", 34]]);
// this is the entrie before converting
console.log(entries);
console.log(Object.fromEntries(entries));