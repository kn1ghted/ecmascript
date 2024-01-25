// Loads modules only when user requieres via promises, not when applications loads
const button = document.getElementById("btn");
button.addEventListener("click", async function (){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});