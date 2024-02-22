const nave = prompt('qual nome da nave')
let velocity = 0
function acelerar() {
    let confirma = confirm("realmente deseja acelerar")
    if (confirma) {
        let acelerar = 5
        return velocity += acelerar
    }
}
function desacelerar() {
    let confirma = confirm("realmente deseja desacelerar")
    if (confirma) {
        let desacelerar = 5
        return velocity -= desacelerar
    }

}
function dados() {
    
    alert(`A nave ${nave}, está à ${velocity} Km/s`)
}
function exibirMenu() {
    return opcao = prompt(`Quais das ações abaixo deseja executar\n1 - acelerar\n2 - desacelerar\n3 - dados de bordo\n4 - sair`)
}

function execute() {
    
    let opcao = ''

    do {
       
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                acelerar()
                break
            case '2':
                if (velocity > 0) {
                    desacelerar()
                } else {
                    alert('nave já está parada ')
                    break
                }
                break
            case '3':
                dados()
                break
            case '4':
                alert('Saindo')
                break
            default:
                alert("Opcao inválida")
                break

        }
    } while (opcao !== '4')
}
execute()