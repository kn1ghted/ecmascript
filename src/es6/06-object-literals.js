// enhanced object literals
function newUser (id, nickname, age, country) {
    return {
        id: id,
        nickname,
        age,
        country
    }
}

let usuario = newUser(1, 'eddie', 42, 'CR');
console.log(usuario);