// Objeto de objetos
let users = {
    ed: {
        country: 'CR'
    },
    yas: {
        country: 'FR'
    }
}

console.log(users.ed.country);
// using optional chaining with ? in case that the user does not exist then returns an undefined instead a running error
console.log(users.jose?.country);