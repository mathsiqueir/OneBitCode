//adicionar atender remover
let fila = []
let opcao = ''

do{
    let pacientes = ''
    for (let i = 0; i < fila.length; i++) {
       pacientes += (`${i+1}- ${fila[i]}\n`)
    }
    opcao = prompt(`Pacientes: ${pacientes} Escolha uma das opções:\n 1 - adicionar paciente\n 2 - atender paciente\n 3 - Sair`)

    switch(opcao){
        case '1':
        const novoPaciente = prompt("Digite o nome do paciente")
        fila.push(novoPaciente)
        break
        case '2':
            const pacienteConsultado = fila.shift()
            alert(`paciente: ${pacienteConsultado}`)
        default:
            break
    }
}while(opcao !== '3')

