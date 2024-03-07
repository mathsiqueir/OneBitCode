let index = 0
let num = [0,1]
let nextNum = 0
let numPar = []
let numImpar = []
do{
    index++
    nextNum = num[index] + num[index-1]
    num.push(nextNum)
    if(nextNum % 2 === 0){
        numPar.push(nextNum)
    }else{
        numImpar.push(nextNum)
    }
    
}while(nextNum < 50000)

console.log(num)
console.log(numImpar)
console.log(numPar)



