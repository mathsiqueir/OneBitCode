async function imc(weight, height) {
    
    return new Promise((resolve, reject) => {
        if (typeof weight !== `number` || typeof height !== `number`) {
            reject(`arguments must be of type number`)
        } else {
            height /= 100
            resolve(weight / (height * height))
        }
    })
}

async function showImc(weight, height) {
    
    imc(weight, height).then(result => {
        console.log(`o resultado do imc foi de ${result.toFixed(2)}`)
        if(result < 18.5) console.log(`situacao: magreza`)
        else if (result < 25) console.log(`situaca: normal`)
        else if(result < 30) console.log(`situacao: sobrepeso`)
        else console.log(`situacao: obesidade`)
    }).catch((err) => {
        console.log(err)
    })
    console.log(`Calculando o IMC para o peso ${weight} e a altura ${height}`)
}

showImc(83, 179)