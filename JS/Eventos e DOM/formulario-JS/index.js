const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    //codigo para o formulário não reiniciar instataneamente
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"').value
    const observation = document.querySelector('textarea[name="observations"]').value
    //caso a parte o checkBox
    //caso salad
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salad += " - " + item.value + "\n"
    })

    console.log({name, address, breadType,main, observation, salad})
})
