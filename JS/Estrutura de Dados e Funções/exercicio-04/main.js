const nome = prompt("Qual o seu nome: ")
let continuar = prompt("Visitou alguma cidade? (S/N)")
let contagem = 0
let cidades = ""


while (continuar == "S"){
    contagem++
    let = cidade = prompt("Qual o nome da cidade que você visitou")
    cidades += " - " +cidade+ "\n"/*A variavel nesse caso ele não recebe um valor ela adiciona um valor ao já existente*/ 
    continuar = prompt("Visitou alguma cidade? (S/N)")

}
alert(
    "Turista: "+nome+
    "\n quantidade de cidades visitadas: "+ contagem +
    "\n cidades Visitadas: \n" + cidades
)
/*quantidade de lugares que ele visitou*/ 