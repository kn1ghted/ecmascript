// Asynchronous functions with a promise 
const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Async!'),2000)
        : reject(new Error('Error!'));
    });
}

// async word to be added before the parameters
// await word to execute function with promise
// async - await is another way of working with promises
// async means that the function will return a promise
// await is to be used inside a asynchronous function, and makes JS wait until the promise resolves to execute the function without pausing the execution of the program
const fnOther = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('From another function')
}

// Test
console.log('Before');
fnOther();
console.log('After');

// Another example of async - await
const countriesList = (countrie) => {
    const countries = { panama: "Ciudad de panamá", venezuela: "Caracas", argentina: "Buenos Aires", colombia: "Bogotá", españa: "madrid", italia: "roma", china:"Pekín", rusia:"moscú" };

    return new Promise( (res,rej) => {
        setTimeout(()=>{
            const listArray = Object.keys(countries);
           if(listArray.includes(countrie))  {
            const list = Object.entries(countries)
            for (const iterator of list) {
                if(iterator[0]==countrie)
                res(`la capital de ${countrie} es ${iterator[1]}`);
            }
           }else
                rej((`la capital de ${countrie} no se encuentra en esta lista`));
        },3000)
    })
}

const getCapitalCountries = async () => {
    console.log("cargando...")
    await countriesList("costa rica")
        .then( res => console.log(res))
        
}

getCapitalCountries()
    .catch(rej => console.log(rej));