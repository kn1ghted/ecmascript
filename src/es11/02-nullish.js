// Nullish operator use to validate a variable value
// if it is undefined or null can be used to set a default value

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'

// Nullish operator on numbers
let number = 1;
let undefinedNumber; // cannot use const because const declarations must be initialized

const validateNumber = number ?? 5;
const validateUndefined = undefinedNumber ?? 2;

console.log(validateNumber);
console.log(validateUndefined);