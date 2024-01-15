/*Controle Financeiro*/
let dinheiro = parseFloat(prompt("Qual seu saldo atual? "))
let opcao = ""
do{
    opcao = prompt("Seu saldo atual é de:"+dinheiro+" reais"+ "\n 1 - Depositar"+
    "\n 2 - Sacar"+
    "\n 3 - Sair"
    )
    switch(opcao){
        case "1":
            dinheiro += parseFloat(prompt("Quanto deseja depositar: "))
            break
        case "2":
            dinheiro -= parseFloat(prompt("Quanto deseja depositar: "))
            break
        case "3":
            alert("Saindo")  
        default:
            alert("Valor adicionado é Invalido!")
            break
    }
}while (opcao !== 3)
