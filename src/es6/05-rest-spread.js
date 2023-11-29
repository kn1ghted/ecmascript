// Array destructuring
let fruits = ['Apple', 'Grapes', 'Pear'];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// Object deconstructing
let car = {brand: 'Toyota', model: 'RAV4', color: 'silver'};
let {brand, model, color} = car;
console.log(brand, model, color);

// Changing props names
let {brand:marca, model:modelo, color:tono} = car;
console.log(marca, modelo, tono);
console.log(brand);

// Deconstructing in function parameters
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'

const updateValue = num => 5;

function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
let estado1 = useState(3);
let valor1 = estado1[0];
let actualizador1 = estado1[1];

//Con desestructuración 
let [valor2, actualizador2] = useState(1);

console.log(valor1, actualizador2);
console.log(valor2, actualizador2);

// Spread operator
let person = {name: 'Edwin', age: 42};
let country = 'CR';

let citizen = {...person, country};
console.log(person);
console.log(citizen);

// Spread array to copy an array with a different pointer
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

console.log(originalArray) // [1,2,3,4,5]
console.log(copyArray) // [0,2,3,4,5]
console.log(originalArray === copyArray)  // false