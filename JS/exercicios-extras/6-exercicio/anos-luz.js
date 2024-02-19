

do{
    let opcao = prompt(`Qual distância em anos luz você deseja converter? 
    \n1 - Parsec(pc)
    \n2 - Unidade astronômica(AU)
    \n3 - Quilômetros
    \n4 - Sair`)
    let distancia  = prompt('Qual a distância que deseja calcular')
    switch(opcao){
    case '1':
        //parsec
        let parsec = distancia * 0.306601
        alert(`você desejou converter ${distancia} anos luz para parsec!`)
        alert(`${distancia} anos luz x parsec é equivalente a ${parsec} parsec`)
        break
    case '2':
        //Unidade astronômica
        let AU = distancia * 63241.1
        alert(`você desejou converter ${distancia} anos luz para AU!`)
        alert(`${distancia} anos luz x AU é equivalente a ${AU} unidades astronômicas`)
        break
    case '3':
        //Quilômetros
        let KM = (distancia) * 9.5 *(Math.pow(10,12))
        alert(`você desejou converter ${distancia} anos luz para KM!`)
        alert(`${distancia} anos luz x KM é equivalente a ${KM} Quilômetros`)
        break
    case '4':
        alert('Encerrando....')
        break
    default:
        alert('Unidade não identificada: conversão fora do escopo')
        break
    }
}while(opcao !== '4')