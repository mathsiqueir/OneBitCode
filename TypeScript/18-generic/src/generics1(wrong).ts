// 2. Agora vejamos um exemplo um pouco mais elaborado. Adicione o código abaixo:

//     Obs.: Veja que teríamos inicialmente duas opções para o argumento ship, poderíamos não tipá-lo, deixando-o como any e desativando o typescript, ou então tipá-lo como ship, visto que só estamos utilizando as propriedades comuns name e pilot.

//     Obs².: Se utilizássemos um dos tipos mais específicos como Fighter ou Speeder ele acusaria erro quando passássemos um outro tipo específico que não fosse o mesmo

interface Ship {
    name: string
    pilot: string
}

interface Fighter extends Ship {
    weapons: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
function cloneShip(ship: Ship, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')




