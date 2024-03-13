async function imc(weight, height) {
    if (typeof weight !== `number` || typeof height !== `number`) {
        return Promise.reject(`arguments must be of type number`)
    } else {
        height /= 100
        return weight / (height * height)
    }
}

async function showImc(weight, height) {
    try {
        const result = await imc(weight, height)
        console.log(`o resultado do imc foi de ${result.toFixed(2)}`)
        if (result < 18.5) console.log(`situacao: magreza`)
        else if (result < 25) console.log(`situaca: normal`)
        else if (result < 30) console.log(`situacao: sobrepeso`)
        else console.log(`situacao: obesidade`)
    } catch (error) {
        console.log(error.message)
    }
    console.log(`Calculando o IMC para o peso ${weight} e a altura ${height}`)
}

showImc(83, 179)
showImc(78,true)