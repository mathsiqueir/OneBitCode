let numbers = []
//numbers.push(prompt('digite um número'))
const quantity = prompt('quantos números você quer saber a média?')
for (let i = 0; i < quantity; i++) {
    numbers.push(parseInt(prompt('digite um número:')))
    
}
console.log(numbers)
const sum = numbers.reduce((accum,num)=>{
    return accum + num
},0)
function media(){
    console.log(sum)
    console.log(numbers.length)
   return  sum / numbers.length 
   

}

alert(media())

