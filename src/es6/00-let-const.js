// var declaration and reasignment - global scope
var firstName = 'Edwin';
firstName = 'Alfredo';
console.log(firstName);

// let declaration and reasignment - block scope
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// const declaration and reasignment - block scope
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const cars = () => {
    if (true) {
        var car1 = 'Lamborgini';    // global
        let car2 = 'Ferrari';       // block
        const car3 = 'Porsche';     // block
    }
    console.log(car1);
    console.log(car2);
    console.log(car3);
}

cars();