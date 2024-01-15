//saida que a função devolve

function calcularMedia(a, b){
    const media = (a +b)/2
    return media //para trabalhar fora da função com o valor deseja
}
/*mas agora quero trabalhar com o valor fora da função*/ 
//atribuir o returno da função a uma variavel para trabalhar com ela fora da função

//chamamos a função fora do function
const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProdutor(nome, preco){
    const produto = {
        nome, // == nome: nome
        preco, // == preco: preco
        estoque: 1
    }
    return produto
}
/*const notebook = criarProdutor("notebook dell vosto 3520", 3500)

console.log(notebook)
OU
*/
//console.log(criarProdutor("notebook dell vosto 3520", 3500))

//podemos chamar funções em qualquerr lugar
//Exemplo: 
//const numero = parseFloat(prompt(""))

function areaRetangular(base, altura){
    //const area = (base*altura) mas nao é necessario essa variavel
    return base*altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
    //chamou a function areaRetangular que o return é a multiplicação de dois elementos
}
//console.log(areaRetangular(3,4))

//console.log(areaQuadrada(9))

//a função só pode retornar uma unica vez

function ola(){
    let texto = "Siqueira"
    return texto //ela vai retornar o valor dado a ela anteriormente
    texto = "olá, mundo"
    console.log(texto)
}
console.log(ola())

function ola1(){
    let texto = "Siqueira"
    texto = "olá, mundo"
    console.log(texto)
    return texto //agora o texto retornar apenas uma vez
    
}
console.log(ola1())

//em alguns casos vamos precisar definir vários returns dentro de uma função

function maioridade(idade){
    if(idade >= 18){
        return "Maior de Idade"
    }else{
        return "Menor de Idade"
    }

}

console.log(maioridade(20))
console.log(maioridade(10))