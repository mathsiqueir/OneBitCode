let fahrenheit = [0, 32, 45, 50, 75 ,80, 99, 120]

//let celsius = fahrenheit.map(function(elem){
//return Math.round((elem - 32) *5 / 9)
//})
// Simplificado
const celsius = fahrenheit.map(elem => Math.round(
    (elem-32)* 5 / 9)
    )



const numbers = [1,4,5,9,14,23]

const doubleNumbers = numbers.map(function(numbers){
    return numbers * 2
})
//Mesmo colocando um parametro com o mesmo nome não vai alterar pois o map cria uma copia do
console.log(doubleNumbers)
//console.log(numbers)