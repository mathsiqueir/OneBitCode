//pedir nome e idade
//calcular a diferença de idade
alert("Digite o nome e a idade da primera pessoa")
let nome1 = prompt('Digite seu nome:')
let idade1 = prompt('Digite sua idade')
alert("Digite o nome e a idade da segunda pessoa")
let nome2 = prompt('Digite seu nome:')
let idade2 = prompt('digite sua idade')


function diff(n1, n2){
    if(n1 >n2){
        return n1 - n2
        
    }else{
        return n2 - n1
    }
}
let diferençaIdade = diff(idade1,idade2)
if(idade1 > idade2){
    alert(nome1+" é "+diferençaIdade+" anos mais velha que o "+nome2)
}else{
    alert(nome2+" é "+diferençaIdade+" anos mais velho(a) que o "+nome1)
}




