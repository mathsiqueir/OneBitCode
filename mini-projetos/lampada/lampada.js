const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function turnOff(){
    if(!lampIsBroken){lamp.src ='./img/desligada.jpg'}
    console.log('desligada')
}
function turnOn(){
    if(!lampIsBroken){lamp.src ='./img/ligada.jpg'}
    
    console.log('ligada')
}
function broken(){
    lamp.src ='./img/quebrada.jpg'
    console.log('quebrou')
}
function lampIsBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}
lamp.addEventListener('mouseover',turnOn)
lamp.addEventListener('mouseleave',turnOff)
lamp.addEventListener('dblclick', broken)
ligar.addEventListener('click', turnOn)
desligar.addEventListener('click', turnOff)