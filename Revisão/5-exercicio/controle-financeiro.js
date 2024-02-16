

let dinheiro = prompt("Quanto de dinheiro disponivel você possui?")
dinheiro = parseFloat(dinheiro)
let depositos = 0
let saques = 0
let opcao = ''
do {
     opcao = prompt('Saldo Disponível\n 1-Depositar\n 2-Sacar\n3-sair')
    switch (opcao) {
        case '1':
            depositos++
            dinheiro += parseFloat(prompt("Quanto deseja depositar?"))
            break
        case '2':
            saques++
            
            dinheiro -= parseFloat(prompt("Quanto deseja sacar?"))
            break
        case '3':
            alert(`Encerando...\n você sacou ${saques} vez(es)\ndepositou ${depositos} vez(es)\n e possuir um saldo de ${dinheiro}`)
            break
        default:
            alert("Opção inválida")
            break
    }
} while (opcao !== '3')