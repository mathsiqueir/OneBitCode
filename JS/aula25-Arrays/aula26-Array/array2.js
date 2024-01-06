const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//adicionar elementos no array
//através do push
//arr.push("Siqueira")

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)
/*
//unshift adicionar elementos ao inicio do array

tamanho = arr.unshift("Matheus")
console.log(arr)
console.log(tamanho)

// POP para remover elementos do final do array

const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// SHIFT para remover elementos no começo do array

const primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)*/

// INCLUDES pesquisar por um elemento
// Boolean
const inclui = arr.includes("Legolas")
console.log(inclui)

// indexOf para saber qual o indice do elemento
// retorna a posição do elemento
const indice = arr.indexOf("Legolas")
console.log(indice)

// SLICE  cortar e concatenar
//vai pegar o 0 1 2 3, e vai colocar na variavel nova
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4) //-1 igual o ultimo elemento
console.log(arr)
console.log(hobbits)
console.log(outros)

// CONCAT Juntar dois arrys

const sociedade = hobbits.concat(outros, "Siqueira")
console.log(sociedade)


//Substiuição dos elementos
// Splice

const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o Cinzento')
console.log(sociedade)
console.log(elementosRemovidos)

//iterar sobre os Elementos

for(let indice = 0; indice <sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento+ " Se encontra na posição "+indice)
}