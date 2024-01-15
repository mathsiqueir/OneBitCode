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
//Como utilizar o map
//cria um novo array baseado nele através do método map
//ele percorre a cada elemento do array e vai criando uma elemento novo

//criar um array vazio o qual o map irá preencher com a copia do array personagens
// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
    
// }

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})
const racas1 = personagens.map((familia)=>{
    return familia.raca
})
const classes = personagens.map((tipo)=>{
    return tipo.classe
})

console.log(nomes)
console.log(racas1)
console.log(classes)


//Filtro
//filtrar elementos especificos ele também cria outro array

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//    if(personagens[i].raca === "Orc"){
//     orcs.push(personagens[i])
//    }
    
// }


const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})

const orcs1 = personagens.filter((personagem)=>{
    return personagem.raca === "Humano"
})

console.log(orcs)
console.log(orcs1)


//reduce
//vai criar um novo Array
//reduce é um pouco mais elaborado no seu funcionamento
//Serve para transformar o array em algum outro elemento
// transforma um array em outra coisa, como num, str, objeto
//exemplo simples serve para fazer uma soma

//funcionamento
let soma = 0
for (let i = 0; i < personagens.length; i++) {
    soma += personagens[i].nivel;
    
}
console.log(soma)

//aplicando Reduce
//ele vai repetindo e vai acumulando os valores
//ele vai passando pelos elementos e você tem acesso a ele
// 1 -> 2 -> 3 ->

const nivelTotal = personagens.reduce(function(valorAcumulado,personagem){
    return valorAcumulado + personagem.nivel
},0)//valor inicial do valor acumulado
console.log(nivelTotal)

const nomeTotal = personagens.reduce(function(valorAcumulado,personagem){
    return valorAcumulado + personagem.nome
},"")//valor inicial do valor acumulado
//console.log(nomeTotal)

//fazendo algo mais elabora
//vou pegar o array transforma-lo em um objeto que vai agrupar os personagens por raça, dentro de um array não objeto


const racas = personagens.reduce(function(valorAcumulado,personagem){
    if(valorAcumulado[personagem.raca]){ //se essa chave existir ele vai devolver um array
        valorAcumulado[personagem.raca].push(personagem)
        console.log("true")
    }else{
        valorAcumulado[personagem.raca]= [personagem]
        console.log("false")
    }
    return valorAcumulado
},{}) //valor inicial será um objeto vazio se fosse no caso do array seria assim array[] objeto{}
//if(valorAcumulado[personagem.raca])
//vai pegar o valorAcumulado e vai pegar o persnagem.raca que vai dar Orc
//usando colchetes para chamar de for dinamica a chave desse objeto

console.log(racas)


//sort    altera o array original
//serve para ordernar
//nao armazenar o sort pq ele modifica o array principal

// (a,b) são dois elementos do array faz comparação em pares, apartir disso ele vai reordenando eles
personagens.sort(function(a,b){
     return a.nivel - b.nivel
     //vai comparar dois elementos se A for maior vai jogar o A mais pro fim do array 
 })  

 console.log(personagens)

// para fazer isso sem usar o sort recomenda-se usar o slice junto

const copia = personagens.slice().sort(function(a,b){
    return a.nivel - b.nivel
})

console.log(copia)