const nome = prompt('Qual o seu nome piloto?')
let velocity = 0
const confirma = confirm(`${nome}, o senhor gostaria de acelerar a nava?`)

if (confirma) {
    let acelerar = prompt('Para quantos Km/s o senhor deseja acelerar?')
    acelerar = velocity

}
if (velocity <= 0) {
    alert('Nave parada')
} else if (velocity < 40) {
    alert('Você está devagar')
} else if (velocity < 80) {
    alert('Parece uma boa velocidade para manter')
} else if (velocity < 100) {
    alert('Velocidade alta. Considere diminuir')
} else if (velocity >= 100) {
    alert('Velocidade perigosa, tome cuidado')
} else {
    alert('Opção inválida')
}