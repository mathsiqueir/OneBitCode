const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        //1. nome, x canditados
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += `( ${vaga.candidatos.length}) candidatos  \n`
        return textoFinal
    }, '')
    alert(vagasEmTexto)
}
function novaVaga() {
    const nome = prompt("Informe um nome para a vaga")
    const descrição = prompt('Informe uma descrição para a vaga')
    const dataLimite = prompt("Infome uma data limite (dd/mm/aaaa)")

    const confirmação = confirm(`deseja confirmar esses dados 
    nome: ${nome} \n
    descrição: ${descrição}\n
    dataLimite: ${dataLimite}`)

    if (confirmação) {
        const novaVaga = { nome, descrição, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada!")
    }

}
function exibirVagas() {
    const indice = prompt("Informe o indice da vaga que deseja exibir")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )
}
function incresverCadidato() {
    const candidato = prompt("Informe o nome do candidato")
    const indice = prompt("Informe o índice da vaga para qual quer se inscrever")
    const vaga = vagas[indice]

    const confirmação = confirm(`Deseja inscrever o candidato ${candidato} na vaga ${indice}?\n nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`)

    if (confirmação) {
        vaga.candidato.push(candidato)
        alert("Inscriçã confirmada")
    }
}
function ExcluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir")
    const vaga = vagas[indice]

    const confirm = confirm(`Tem certeza que deseja excluir a vaga ${indice}?\n nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`)

    if (confirm) {
        vagas.slice(indice, 1)
        alert('vaga excluida')
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao
}
function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }

    } while (opcao !== "6");
}

executar()