

const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce((textoFinal,vaga,indice){
        //1. nome, x canditados
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += `( ${vaga.candidatos.length}) candidatos`
        return textoFinal
    },'')
    alert(vagasEmTexto)
}
function novaVaga(){
    const nome = prompt("Informe um nome para a vaga")
    const descrição = prompt('Informe uma descrição para a vaga')
    const dataLimite = prompt("Infome uma data limite (dd/mm/aaaa)")

    const confirmação = confirm(`deseja confirmar esses dados 
    nome: ${nome} \n
    descrição: ${descrição}\n
    dataLimite: ${dataLimite}`)

    if(confirmação){
        const novaVaga = {nome, descrição, dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert("Vaga criada!")
    }

}
function exibirVagas(){
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
function incresverCadidato(){}
function ExcluirVaga(){}