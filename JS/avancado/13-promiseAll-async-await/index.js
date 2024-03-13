function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000 * seconds)
    })
}

const numbers = [4,5,9,13,77,92]

//vamos criar um funcao assincrona dentro do map
const squares = numbers.map(async (number)=>{
    //esperar 
    await waitFor(2)
    return number * number
})

//console.log(squares)
console.log(`---------`)
// arrays de promise
// [
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> }
//   ]

//agora criamos um promise.all() para resolver varios problemas de uma vez so

// Promise.all(squares).then(results =>{
//     console.log(results)
// })

//mas tambem podemos usar uma funcao assicrna

async function execute(){
    console.time(`map`)
    const squares = await Promise.all(numbers.map(async (number)=>{
        //esperar 
        await waitFor(2)
        return number * number
    }))
    console.log(squares)

    console.timeEnd(`map`)
}
execute()