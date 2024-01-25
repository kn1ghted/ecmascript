// Object definition
let user = {
    username    :   'Eddi',
    age         :   42,
    country     :   'Costa Rica',
    countryCode :   'CR'
}

// Separates the entries with the spread operator
let {username, ...values} = user;

// Propagation
let userPS4 = {
    ...user,
    platform    : 'PS4'
}

// Console testing
console.log(username);
console.table(values);
console.table(userPS4);