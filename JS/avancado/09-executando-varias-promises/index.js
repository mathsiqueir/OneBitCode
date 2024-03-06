function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}
//quero calcular uma soma e subtração, se a duas derem certos
//all para executar varias promises juntas
//Promise.all

// const sumResult = asyncSum(50,33)
// const subtractResult = asyncSubtract(50,33)

// Promise.all([sumResult,subtractResult]).then(results =>{
//         console.log(results)
// }).catch(err =>{
//     console.log(err)
// })

const numbers = [4,9,5,13,77,true]
function asyncSquare(x){
    return new Promise((resolve, reject) =>{
        if(typeof x !== 'number'){
            reject(false)
        }else{
            resolve(x * x)
        }
    })
}
Promise.all(numbers.map(number => asyncSquare(number))).then(squares =>{
    console.log(squares)
}).catch(err =>{
    console.log(err)
})