// Class definition but with private functions
class user {
    // Attributes
    // Constructor
    constructor (name, age) {
        console.log('New instance of user created');
        this.name = name;
        this.age = age;
    }
    // Getters and setters
    get getUserAge () {
        return this.age;
    }
    set setUserAge(a){
        this.age = a;
    }
    // Methods
    #speak(){
        return ('Hello!');
    }
    greeting() {
        return `${this.speak()}, my name is ${this.name} and I am ${this.age} years old`;
    }
}

const ed = new user('Ed', 41);
//console.log(ed.greeting());
// user is on his birthday!
ed.setUserAge = 42;
//console.log(ed.greeting());