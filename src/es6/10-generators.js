// Generators are custom iterable functions that remember the values of the last execution
// use asterisc after function name, YIELD for each steps, NEXT for executions and a DONE boolean to indicate if the iteration is complete
function* iterateArray (array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterateArray(['Primero', 'Segundo', 'Tercero', 'Cuarto']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next().done);

// This is a generator for IDs with a prefixed string and zeros to 5 positions
function* getId() {
    // String prefix
    let id = 'mid-'
    // counter init
    let counter = 1;
    // Generator loop
    while (true) {
        // padStart defines the final lenght and leading character 
        let counterString = counter.toString().padStart(5, "0");
        yield id + counterString;
        counter++;
    }
}
const idGeneretor = getId();
console.log(idGeneretor.next());
console.log(idGeneretor.next());
console.log(idGeneretor.next());