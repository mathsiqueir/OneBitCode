const img = document.getElementById('img')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const automatic = document.getElementById('automatic')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalID = null
const trafficlight = (event)=>{
    stopAutomatic()
    //event é o que resultou de quando se clicou em id
   turnOn[event.target.id]();
   
}
const nextIndex = ()=>{
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}
const changeColor = ()=>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () =>{
    clearInterval(intervalID)
}
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': ()=> intervalID = setInterval(changeColor,2000)
}
buttons.addEventListener('click', trafficlight)