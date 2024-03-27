const input = document.getElementById('input')
console.log(input)

document.getElementById('value').addEventListener('click',function(){
    //se o input não tiver valor coloque Olá, Mundo . se tiver valor tire o valor
    input.value ='Olá, Mundo'
    //input.value = input.value === ''? 'Olá, Mundo' : ''
    input.getAttribute('value')
    console.log(input.value)
    //getAttribute pega o valor predefinido do value
    console.log(input.getAttribute('value'))
    console.log()
    
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio'? 'radio': 'text'
    input.setAttribute('type','radio')
    console.log(input.setAttribute('type','radio'))
})

document.getElementById('placeholder').addEventListener('click',function(){
    //input.placeholder = 'Digite algo...'
    input.setAttribute('placeholder','Digite algo...')
})

document.getElementById('disable').addEventListener('click',function(){
    input.setAttribute('disabled', !input.disabled)

})

document.getElementById('data').addEventListener('click',function(){
    const data = input.dataset.something
    console.log("o valor do atributo data-something é "+ data)
    input.dataset.something = 'algum outro valor'
    console.log("o valor do atributo data-something é "+ input.dataset.something)
})