const imoveis = ""
const info_imoveis = {}



do{
    opcao = prompt("nome momento temos "+imoveis.length+" cadastrados!\n"+"\n 1 - Salvar um imóvel! "+"\n 2 - Lista Imóveis"+ "\n3 - Sair")
    switch(opcao){
        case "1":
            const info_imoveis = {}
        
            info_imoveis.nome = prompt("Nome Proprietário:")
            info_imoveis.quartos = prompt("Quantidade de quartos")
            info_imoveis.banheiros = prompt("Quantidade de Banheiros")
            info_imoveis.garagem = prompt("possui garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar esse imóvel: \n"+
                "\nProprietário " + info_imoveis.nome+
                "\n Quartos " + info_imoveis.quartos+
                "\n Banheiros " + info_imoveis.banheiros+
                "\n Possui garagem " + info_imoveis.garagem
            )
            if(confirmacao){ //transforma em booleano
                imoveis.push(info_imoveis)
            }
            break
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel "+ (i+1)+
                    "\nProprietário: "+ imoveis[i].nome+
                    "\nQuartos: "+ imoveis[i].quartos+
                    "\nBanheiros: "+ imoveis[i].banheiros+
                    "\nPossui Garagem? "+ imoveis[i].garagem

                    )
            }
            break
        case "3":
            alert("Encerrando")
            break
        default:
            alert("Opção inválida!!")
            break
    }

}while(opcao !== "3")