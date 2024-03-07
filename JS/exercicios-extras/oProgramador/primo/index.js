// dois fatores 1 e ele mesmo

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){
    for (let numero = 2; numero < limite; numero++) {
        let ehPrimo = true

        for (let div = 2; div < numero; div++) {
            if(numero % div === 0){
                ehPrimo = false;
                break
            }
            
        }
        if(ehPrimo) console.log(numero)
    }
}