// Returns all matching positions for a string compared with a regular expression
const regex = /\b(Apple)+\b/g;
const fruits = "Apple, Kiwi, Banana, Apple, Strawberry";

// Returns the matched index in the string
for (const match of fruits.matchAll(regex)) {
    console.log(match);
}