function newUser (name, age, country) {
    var name = name;
    var age = age;
    var country = country;
    console.log(name, age, country);
}

newUser();
newUser('David', 40, 'CR');

function newAdmin(name='Admin', age=20, country='CR'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ed',42,'DE');

function saludar (name='Edwin', ciudad='SJO'){
    console.log(`Hola ${name} de la ciudad de ${ciudad}`);
}
saludar();
// solamente pasamos el segundo parámetro, el primero debe ser undefineds
saludar(undefined,'Mata Redonda');