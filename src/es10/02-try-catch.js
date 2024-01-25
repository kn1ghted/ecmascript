// Catch an error of an undefined function
try {
    hello();
} catch(error) {
    console.log(error)
}

try {
    anotherFunction();
} catch {
    console.log('This is an error');
}