const spaceships = []
function addSpaceship(name: string, pilot: string, crewLimit: number, inMission: boolean) {
  const spaceship = {
    name, pilot,
    crewLimit,
    crew: [],
    inMission: false
  }

  spaceships.push(spaceship)
  alert(`A Nave ${spaceship.name} foi Registrada`)
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
  }

  spaceship = spaceships.find((ship) => {
    return ship.name === name
  });

  return spaceship
}

function addCrewMember(member: string, spaceship: { name:string,crewLimit:number,crew:string[] }) {
  if(spaceship.crew.length >= spaceship.crewLimit){
    alert(`${member} não pode ser adicionado`)
  }else{
    spaceship.crew.push(member)
  }

}

function sendToMission(spaceship:{name:string,crewLimit:number,crew:string[], inMission:boolean }) {
  if(spaceship.inMission){
    alert('não pode ser enviada, já está em missão')
  }else if(spaceship.crew.length < Math.floor(spaceship.crewLimit /3)){
    alert('não pode ser enviada, tripulação insuficiente')
  } else{
    spaceship.inMission = true
    alert('Tripulação enviada com sucesso')
  }

}

function firstMenuOption() {
  const name = prompt('digite o nome da espaço nave')
  const pilot = prompt('digite o nome do piloto')
  const crewLimit = Number(prompt('digite o nome do limite de tripulantes'))
  const inMission = confirm('está em missão?')

  const confirmation = confirm(`confirma o registro da nave ${name}\n piloto ${pilot}\n tripulação${crewLimit}`)
  
  if(confirmation){
    addSpaceship(name,pilot,crewLimit,inMission)
  }
}

function secondMenuOption(){
  const member = prompt('qual é o nome do tripulante')
  const spaceshipName = prompt(`para qual nave ${member} deverá ser designado\n ${spaceships}`)
  //verificar se a nave existes
  const spaceship = findSpaceship(spaceshipName)

  if(spaceship){
    const confirmation = confirm(`confirma a inclusão de ${member} na tripulação da ${spaceship.name}`)

    if(confirmation){
      addCrewMember(member,spaceship)
    }
  }
}