//ESCOPO

/*let pokemon = "Charmander"

function evoluir(){
    pokemon = "Charmeleon"
    return pokemon
}

console.log(pokemon)
*/
/*evoluir()
console.log(pokemon)*/

//ou você chama a função dentro do console
/*console.log(evoluir())

function criarAnimal(){
    let animal = "gato"
    
}

criarAnimal()*/
//console.log(animal)

//explicando porque var não é tão utilizado
/*function avaliarNota(nota){
    if (nota > 60){
        var aprovado = true
        let situacao = "aprovado"
    }else{
        var aprovado = false
        let situacao = "reprovado"
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}
*/

// let declarado no escopo mais interno não fica disponivel no escopo mais externo mas o Var fica

console.log(nome)
//console.log(sobrenome)

var nome = "Matheus"
let sobrenome = "Siqueira"
console.log(nome)
console.log(sobrenome)
