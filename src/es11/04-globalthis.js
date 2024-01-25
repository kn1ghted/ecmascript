// Global object platform depending on where JS is being executed

console.log(window); //web browser
console.log(global); //node
console.log(selft); //webworker
console.log(globalThis); //platform independent

// global objects equivalence
console.log(window == globalThis); // this yields true only on web browsers
console.log(global == globalThis);