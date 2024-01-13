//paradigma funcional
// JavaScrript é multi paradigma
//
//na HOF passamos outra função dentro da funcao como parametro
function calcular(a, b, operacao/*funcao*/){
    console.log('Realizando uma operação.')
    const resultado = operacao(a,b) //operao é chamado como uma função-parametro e ela foi iniciada dentro de uma outra função 
    return resultado
}

function somar(x,y){
    return x + y
}
function subtrair(x,y){
    return x - y
}
//não preciso dar nome para a função multiplicação porque ela não existe fora do console.log()
console.log(calcular(5,4, somar))
console.log(calcular(5,4, subtrair))
console.log(calcular(2,3, function multiplicação(x,y){
    return x * y
}))


//high order function no dia a dia
//
// Essa é uma função bastante grande para exibir elementos de uma lista 
function exibirElemento(fruta, posicao, vetor){
    console.log({
        fruta,
        posicao,
        vetor
    })
}
//aqui nos pegamos a função e para cada elemento dela nós exibimos o indice que ela se encontrava e realizamos a o queriamos

const lista = ["maça", "banana", "laranja", "limão"]

// for (let i = 0; i < lista.length; i++) {
//     exibirElemento(lista[i], i, lista)
    
// }
// o Js tem uma função que faz extamente isso
// ForEach/para cada elemento do array ele executa a ação determinada

//ForEach pega uma CallbackFunction/Chamada de volta
//a gente chama o forEach e ele chama uma função de volta que a gente vai passar dentro dele

//




lista.forEach(exibirElemento)

lista.forEach(function(elemento,indice, listadeFrutas) {
    console.log({
        elemento,indice,listadeFrutas
    })
    
})

lista.forEach((frutinha,numero,lugar) => {
    console.log(
       { frutinha,numero,lugar}
    )
});



