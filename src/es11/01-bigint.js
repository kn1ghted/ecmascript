// Representation of big integer numbers
const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;

let bigNumber = 328712893457913845n;
let anotherBigNumber = BigInt(328712893457913845);

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991
console.log(bigNumber);
console.log(anotherBigNumber);