function retangulo(base, altura){
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
 
    
 
    return (base*altura)
}
function triangulo(base, altura){
    const base = parseFloat(prompt("Informe a base do triângulo:"))
     const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return retangulo()/2
}
function quadrado(lado){
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
  
    return lado**2
}
function trapézio(baseMaior, baseMenor, altura){
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  
    return ((baseMaior+ baseMenor)*altura)/2
}
function circulo(raio){
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
 
    return  Math.PI*(raio**2)
}
function exibirMenu() {
    return prompt(
      "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
    )
  }

  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = calcularAreaTriangulo()
          break
        case "2":
          resultado = calcularAreaRetangulo()
          break
        case "3":
          resultado = calcularAreaQuadrado()
          break
        case "4":
          resultado = calcularAreaTrapezio()
          break
        case "5":
          resultado = calcularAreaCirculo()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "6");
  }