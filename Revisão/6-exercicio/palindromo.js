const palavra = prompt("informe uma palavra:")
let palavraInvertida = ''

for (let i = palavra.length-1; i >= 0; i--) {
    palavra += palavra[i]
    
    if (palavra === palavraInvertida) {
        alert(palavra + " é um palíndromo!")
      } else {
        alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
      }
}