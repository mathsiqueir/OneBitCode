//High-order Functions

function calcular(a,b, operacao){
    console.log("realizando uma operação. ")
    const resultado = operacao(a,b)//somar(3,5)
    return resultado
}

function somar(x,y){
    console.log("realizando uma soma")
    return x + y
}
console.log(calcular(3,5,somar))

console.log(calcular(8,4,function(x,y ){
    console.log("Realizando uma subtração.")
    return x-y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}
const lista =['maça','mamão','abacaxi','pera']

for(let i =0; i <lista.length;i++){
    exibirElemento(lista[i],i,lista)
}

//forEach metodo de array 
// para cada == foreach
//o comando forEach é uma simplificação do elemento que está acima
//forEach faz Value index Array

lista.forEach(exibirElemento)

lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
   } )
})