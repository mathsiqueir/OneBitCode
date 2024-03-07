const result = document.getElementById('result')
const tabuada = document.getElementById('tabuada')

function table(ev) {
    ev.preventDefault()
    const number = document.getElementById('num').value
    for (let i = 1; i <= 10; i++) {
        result.innerHTML += `-${number} x ${i} = 
        ${number * i}<br>`

    }
}

tabuada.addEventListener('click', table)

