const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// 1º método MAP
//ele transforma arrays existem e você pode transforma esse array em outro coisa ele cria outro array não modifica e array padrão

//comportamento do map

//const nomes = []

for(let i=0; i< personagens.length;i++){
    nomes.push(personagens[i].nome)
}*/


//Como utilizar o map

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)*/

//filter
//filtrar elementos de um array

//comportamento

const orcs = []

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca == 'Orc'){
        orcs.push(personagens[i])

    }
     
}


const orcs = personagens.filter(function(familia){
    return familia.raca === "Orc"
})
console.log(orcs)



//reduce 
//ele transforma os elementos
//o reduce retorna o valor e a cada elemento que ele percorre no array ele vai somando os valores 

//comportamento

let somaNivel = 0
for (let i = 0; i < personagens.length; i++) {
    somaNivel += personagens[i].nivel;
    
}
console.log(somaNivel)

//a function(valor_anterior para somar, )*/ 

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){ //dar um return na função para ela passar o valor adiante e vai somando de acordo com o dado que você colocou para ele somar nós colocamos um Number(personagem.nivel)
    return valorAcumulado + personagem.nivel
},0 ) //aqui para dizer ao reduce que o primeiro valorAcumulado é == 0 )

console.log(nivelTotal)

//transformação mais elaborada feita com array 
//vamos pegar o array e transformar ele em um objeto que vai agrupar os personagens por raça

const racas = personagens.reduce(function(valorAcumulado, personagem)
{
    if(valorAcumulado[personagem.raca]){//se existir essa chave
        valorAcumulado[personagem.raca].push(personagem)
    }else{
        valorAcumulado[personagem.raca]=[personagem] //personagem atual
    }
        return valorAcumulado
},{} )//vai começar vazio
''
console.log(racas)


//Sort
//metodo para ordenar os arrays 
//sem parametro sort() vai organizar de forma alfabética
//sort((a,b)=>a-b)//ordena de A-Z
//sort((a,b)=>b-a)//ordena de Z-A

const numeros = [5,2,4,1];
numeros.sort();
console.log(numeros);
//slice cria um novo array para não alterar o array principal e 
const personagensOrdenados = personagens.slice().sort(function(a,b){
    return b.nivel - a.nivel
})
//sort modifica o array
console.log(personagens)
console.log(personagensOrdenados)