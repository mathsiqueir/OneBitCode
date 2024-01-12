//funções o podem ser lidas como valores

function somar(a, b){
    return a + b
}

let operacao = somar 
//se colocar () vou chamar a função
//mas se não colocar o const operacao vira somar()

console.log(operacao(4,5))


//é possivel passar funções como variaveis
const subtrair = function subtracao(a,b){
    return a - b
}

console.log(subtrair(43,52))

operacao = function subtracao(a,b){
    return a - b
}

//fez duas contas com um variavel apenas
console.log(operacao(4,5))

//perigo das Funções anônimas

olaMundo()
oiMundo()

function olaMundo(){
    console.log("Olá, Mundo!")
}


//uma function criada ela é jogada para o inicio do arquivo, mas as funções anonimas isso não acontece elas só podem ser acessadas depois que for lido'
const oiMundo = function(){
    console.log("Oi, Mundo!")
}
