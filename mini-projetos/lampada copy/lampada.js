const ligardesligar = document.getElementById('ligardesligar')

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
function toggle(){
    if(turnOn){
        turnOn = false
        return turnOff
    }else if(turnOff)
        turnOff = false
        return turnOn
}
lamp.addEventListener('mouseover',turnOn)
lamp.addEventListener('mouseleave',turnOff)
lamp.addEventListener('dblclick', broken)
ligardesligar.addEventListener('click', toggle)
