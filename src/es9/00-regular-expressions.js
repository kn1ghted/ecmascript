// Regular expression to match dates in formar YYYY-MM-DD
const regex = /(\d{4})-(\d{2})-(\d{2})/;

// Variable to register if a string matches a regular expression
let match = regex.exec('2023-11-28');

console.table(match);
console.log(match);