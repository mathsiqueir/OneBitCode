let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    opcao = prompt("Pacientes: \n" + pacientes +
        "\n Escolha uma ação" +
        "\n 1 - Novo Paciente" +
        "\n 2 - Consultar Pacinte" +
        "\n 3 - Sair"
    )
    switch (opcao) {
        case "1":
            /*Criou uma variavel para armazenar o novoPaciente e atraves do fila.push(novoPaciente) ele adicionará ao final da fila*/
            const novoPaciente = prompt("Digite o nome do novo paciente")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (!pacienteConsultado) {
                alert("Não há mais pacientes na fila!")
            } else {
                alert(pacienteConsultado + " Foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrado!")
            break
        default:
            alert("Opção Inválida")
            break
    }
} while (opcao !== "3")







/*O que o programa vai fazer
pacientes em espera 

*/ 