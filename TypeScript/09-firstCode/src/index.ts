function sendSpaceShip(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A Nave ${spaceship.name} comandada pelo capitao ${spaceship.captain} foi enviada para uma missao`)

    return spaceship
}

function accelerate(targetSpeed:number,spaceship:{name:string,speed: number}){
    if(spaceship.speed > targetSpeed){
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else{
        alert(`mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt(`Insira o nome da nave a ser enviada.`)
const spaceshipCaptain = prompt(`Insira o nome do Capitao da nave a ser enviada.`)

//inferencia de tipo
const currentShip = sendSpaceShip(spaceshipName,spaceshipCaptain)

const speed = Number(prompt(`Insira a velocidade para qual deseja acelerar...`))
//necessario converter o tipo de dado do SPEED, colocando-o dentro de Number()
accelerate(speed,currentShip)