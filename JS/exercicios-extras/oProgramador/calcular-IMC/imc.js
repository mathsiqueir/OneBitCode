const nome = document.getElementById('name')

const result = document.getElementById('result')
const calc = document.getElementById('calc')
function imc(ev){
    ev.preventDefault()
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    height /= 100

    return result.innerHTML = `${nome} você está com um IMC de ${weight / (height*2)}`
}

calc.addEventListener('click',imc)
