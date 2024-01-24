alert("Bem Vindo! A seguir pediremos que informe alguns dados")
const dataBase = []
function dados() {
    const nome = prompt("Qual o seu nome:")
    const idade = prompt("QUal a sua idade:")
    const confirmar = confirm("Seu nome é " + nome + " e você tem " + idade + " anos?")
    if (confirmar) {
        const novoDados = {
            nome,idade
        }
    } else {
        alert("não confirmado")
    }
    dataBase.push(novoDados)
}
function exibirNome(){
    const indice = prompt("Informe o índice do nome do usuário")
}


do {
    let opcao = prompt("Selecione uma das opções abaixo:\n" +
        "1-Adcionar novo nome\n" +
        "2-Exibir nomes Salvos\n" +
        "3-Apagar nome salvo\n" +
        "4-Sair"
    )

    switch (opcao) {
        case '1':
            //add new name
            dados()
            break
        case '2':
            //exibir name
            break
        case '3':
            //delete name
            break
        case '4':
            alert("Encerrando")
            break
        default:
            alert("opcao inválida")
            break
    }

} while (opcao !== "4")



