let opcao = ""

do{
    opcao = parseFloat(prompt
    ("Escolha uma das 5 opções "+
    "\n 1 - abertura de conta "+
    "\n 2 - Saldo da conta "+
    "\n 3 - Gerente Pessoa Física"+
    "\n 4 - Gerente Pessoa Jurídica"+
    "\n 5 - Sair! "
    ))
    switch(opcao){
        case 1:
            alert("Abertura de Conta")
            break
        case 2:
            alert("Saldo da conta")
            break          
        case 3:
            alert("Gerente Pessoa Física")
            break 
        case 4:
            alert("Gerente Pessoa Jurídica")
            break
        default:
            ("Entrada Inválida")
    }   

}while(opcao != 5)
alert("O sistema está sendo finalizado")