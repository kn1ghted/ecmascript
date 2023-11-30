const hello = () => {
    console.log('Hello, I am a module!')
}

export const speak = () => {
    console.log('I am not exported using DEFAULT!')
}

export default hello;