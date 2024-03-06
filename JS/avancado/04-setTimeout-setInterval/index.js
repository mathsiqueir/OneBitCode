//temporizador para fazer o usuário esperar
console.log('programa iniciado')


// const timeoutId = setTimeout(()=>{
//     console.log('3 segundos se passaram...')
// }, 1000 * 2)

// clearTimeout(timeoutId)

let seconds = 0
//executa repetidas vezes
setInterval(()=>{
    seconds += 1
    console.log(`se passaram ${seconds} segundos`)
},1000* 1)