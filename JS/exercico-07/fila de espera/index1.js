let fila = [] //array dos pacientes
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        //let para exibir numero de pacientes
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    opcao = prompt("Pacientes: \n" + pacientes +
        "\n Escolha uma ação"+
        "\n 1 - Novo Pacientes" +
        "\n 2 - Consultar Paciente" +
        "\n 3 - Sair"
    )

    switch (opcao) {
        case "1"://Novo paciente
            const novoPaciente = prompt("Qual o seu nome? ")
            fila.push(novoPaciente)
            break
        case "2"://consultar pacientes
            const pacienteConsultado = fila.shift()
            if(pacienteConsultado){
                //verificação se a variavel não está vazio
                alert(pacienteConsultado+" Foi atendido")
            }else{
                alert("Não há pacientes na fila")
            }
            
            break
        case "3":
            alert("Encerrando!")
            break
        default:
            alert("Opção inválida")
            break
    }

} while (opcao !== "3")