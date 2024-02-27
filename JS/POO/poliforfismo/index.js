//ato de um objeto poder assumir diferentes formas
//pode ser percebido na sobrescrita de métodos

//uma classe filha pode ter suas proprias implementações. a isso que damos o nome de sobrescrita de métodos

class Vehicle{
    move(){
        console.log('O veículo está se movendo.')
    }
}
class Car extends Vehicle{
    move(){
        console.log('O carro está se movendo.')
    }
}
class Ship extends Vehicle{
    move(){
        console.log('O Navio está navegando')
    }
}
class AirCraft extends Vehicle{
    move(speed){
        console.log(`A aeronave está voando à ${speed} Km/h`)
    }
}

const civic = new Car()
const blackPearl = new Ship()
const airbog = new AirCraft()

// civic.move()
// blackPearl.move()
// airbog.move(400)

function start(vehicle){
    console.log('Iniciando um veículo')
    vehicle.move()
}
start(civic)
start(blackPearl)
start(airbog)