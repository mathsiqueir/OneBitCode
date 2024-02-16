

do {
    let opcao = prompt('Escolha uma das opções\n' + '1-opcao \n 2-opcao \n3-opcao \n4-opcao \n 5-sair \n')

    switch (opcao) {
        case '1':
            alert('Você escolheu a opcao 1')
            break
        case '2':
            alert('Você escolheu a opcao 2')
            break
        case '3':
            alert('Você escolheu a opcao 3')
            break
        case '4':
            alert('Você escolheu a opcao 4')
            break
        case '5':
            alert('Você escolheu sair')
            break
        default:
            alert('opcao inválida')
            break
    }
} while (opcao !== '5')