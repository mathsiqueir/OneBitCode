const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

// const array1 = [1, 4, 9, 16];

// // Pass a function to m
// const map1 = array1.map(x)
// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]


const nomes = personagens.map(function(personagem,indice){
    return `personagem ${personagem.nome} está no indice ${indice}`
   
})

console.log(nomes)

//reduce
const nivel = personagens.reduce(function(valorAcumulado,personagem){
    return valorAcumulado + personagem.nivel
},0)

console.log(nivel)

const array1 = [1 , 2, 3, 4]

const soma = array1.reduce((accum,numAtual)=>{
    return accum + numAtual
},0)

console.log(soma)


const array = [{num: 1, nome:'julia'},{num: 1,nome:'matheus'},{num: 1, nome:'elisa'},{num: 1,nome:'carla'}]

const soma1 = array.reduce((accum,numAtual)=>{
    return accum+" " + numAtual.nome
},'')

console.log(soma1)