const nome = prompt('Qual o seu nome?')
const continuar = prompt('você já visitou alguma cidade?').toLowerCase
let nCidade = 0
let cidades = ''
while(continuar === "sim"){
    nCidade++
    let cidade = prompt("Qual o nome da cidade?") 
    cidades += '-' + cidade+ '\n'
    continuar = prompt("visitou mais alguma outra cidade?")
}
alert(`Ele visitou ${nCidade}, que foram ${cidades}`)