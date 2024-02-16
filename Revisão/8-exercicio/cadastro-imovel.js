const imoveis = ''
const info_imoveis = {}


do{
let opcao = prompt(`Imovéis Salvos ${imoveis.length} \n 
1 - salvar novo imóvel \n 2 - exibir imóveis cadastrados \n 3 - sair`)

switch(opcao){
    case '1':
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
}
}while(opcao !=='3')