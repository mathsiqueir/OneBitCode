
const calcular = document.getElementById('calcular')

//Basta você dividir o seu peso pela altura duas vezes. Vamos ver um exemplo. Digamos que você tem altura de 1,70 m e pesa 65 Kg. Neste caso para calcular IMC você deverá dividir duas vezes 0 número 65 por 1,7.

function imc(){
   
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const result = document.getElementById('resultado')
    if(nome&&peso&&altura){
        const valorImc =  peso / Math.pow((altura/100),2)
        let classificacao = ''
        if(valorImc <18.5){
            classificacao = 'Abaixo do peso'
        }else if( valorImc < 25){
            classificacao = 'peso ideal'
        }else if(valorImc < 30){
            classificacao = 'acima do peso'
        }else if(valorImc < 35){
            classificacao = 'obsidade grau 1'
        }else if(valorImc < 40){
            classificacao = 'obsidade grau 2'
        }

        result.textContent = `${nome} está com um IMC de ${valorImc} \n você está ${classificacao}`

    }else{
        result.textContent = 'Preencha todos os campos'
    }
    return peso / Math.pow(altura,2)
}
calcular.addEventListener('click', imc)

