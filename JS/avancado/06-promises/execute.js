function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executado...')
        setTimeout(() => {
            console.log('resolvendo a promise...')
            resolve('resolvida')
        }, 1000 * 1);
    })
}

const p = execute()

console.log(p)

//receber o resultado da promise
setTimeout(() => {
    console.log(p)
}, 1000 * 2);