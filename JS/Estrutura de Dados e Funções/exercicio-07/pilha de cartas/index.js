let pilha = []
let opcao= ""

do{
    let cartas = ""
    
    opcao = prompt("temos "+pilha.length +" cartas no baralho"+ 
        "\nEscolha um das ações:"+
        "\n1 - Adicionar uma carta"+
        "\n2 - Puxar uma carta"+
        "\n3 - Sair"
        )
    switch(opcao){
        case "1":
        const novaCarta = prompt("adcione uma nova carta: ")
        pilha.push(novaCarta)
        break
        case "2":
            const retirarCarta = pilha.pop()
            if(retirarCarta){
                alert("A carta "+retirarCarta+" foi removida da pilha")
            }else{
                alert("não há cartas na pilha")
            }
            break
        case "3":
            alert("Encerrando!")
            break
        default:
            alert("Opção Inválida")
            break
    }
}while (opcao !== "3")