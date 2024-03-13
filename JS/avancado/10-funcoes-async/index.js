//nas versoes mais modernas utilizamos uma forma mais facil de trabalhar com funcoes assincronas
//usando as async
//depois de usar aysnc talvez voce nao utilize mais o promise

async function asyncSum(a,b){
    //ja vai entender o return como o resolve da promise
    return a + b
}

// function asyncSum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('arguments must be of type number')
//         } else {
//             resolve(a + b)
//         }
//     })
// }

function asyncSubtract(a, b) {
    return a -b
}


const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)


Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})