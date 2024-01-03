
const atacante = prompt("nome do personagem atacante: ")
const poderDeAtaque = parseFloat(prompt("poder de ataque: "))

const defensor = prompt("Nome do personagem defensor: ")
let pontosDeVida = parseFloat(prompt("Pontos de VIDA: "))
const poderdeDefesa = parseFloat(prompt("Pontos de DEFESA: "))
const escudo = prompt("Ele possui Escudo?(S/N) ")

let danoCausado = 0

if(poderDeAtaque > poderdeDefesa && escudo ==="N")
{
    danoCausado = poderDeAtaque - poderdeDefesa
}else if(poderDeAtaque > poderdeDefesa && escudo === "S")
{
    danoCausado = (poderDeAtaque - poderdeDefesa)/2
}

pontosDeVida -= danoCausado


alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)