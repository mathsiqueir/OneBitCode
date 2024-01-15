const palindromo = prompt("Digite um palindromo: ")
let palavraInvertido = ""
for(let i=palindromo.length - 1; i >= 0; i--){
    palavraInvertido += palindromo[i]

}
if(palindromo === palavraInvertido){
    alert("Isto é um Palindromo!")
}else{
    alert("Não é um Palidromo")
}

