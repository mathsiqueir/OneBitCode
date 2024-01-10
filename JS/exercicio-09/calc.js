function areaTriangulo(base, altura) {
    base = prompt("Qual o tamanho da base")
    altura = prompt("Qual a altura")
    return "A área do triângulo é " + (base * altura) / 2 + " cm"
}
function areaRetangulo(base, altura) {
    base = prompt("Qual o tamanho da base")
    altura = prompt("Qual a altura")
    return "A área do Retângulo é " + (base * altura) + " cm"
}
function areaQuadrado(lado) {
    lado = prompt("Qual o tamanho do lado ")
    return "A área do Quadrado é " + (lado ** 2) + " cm"

}
function areaTrapezio(baseMaior, baseMenor, altura) {
    baseMaior = prompt("Qual valor da base Maior ")
    baseMenor = prompt("Qual tamanho da base Menor")
    altura = prompt("Qual a altura?")
    return "A área do trapézio é " + (baseMaior + baseMenor) * altura / 2 + " cm"
}
function areaCirculo(raio) {
    let pi = 3.14
    raio = prompt("Digite o valor de Raio")
    return "A área do círculo é " + pi * (raio ** 2) + " cm"
}
function exibirMenu(){
    return prompt("Calculadora Geométrica" +
    "\n1- area do Triângulo" +
    "\n2- area do Retângulo" +
    "\n3- area do Quadrado" +
    "\n4- area do Trapézio" +
    "\n5- area do Círculo" +
    "\n6 - Sair"
)
}

function executar(){
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado
        switch (opcao) {
            case "1":
                resultado = (areaTriangulo())
                break
            case "2":
                resultado = (areaRetangulo())
                break
            case "3":
                resultado = (areaQuadrado())
                break
            case "4":
                resultado = (areaTrapezio())
                break
            case "5":
                resultado = (areaCirculo())
                break
            case "6":
                alert("Encerrando")
                break
            default:
                alert("Opção inválida")
                break1
        }
        if(resultado){
            alert(`Resultado: ${resultado}`)
        }
    
    } while (opcao !== "6")
}

executar()