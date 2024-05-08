// Para corrigir isso as funções genéricas ainda permite especificar propriedades obrigatórias no tipo recebido. Modifique o código como mostrado abaixo:F

// Veja que agora ao passar o mouse o retorno da função usará o ShipType
// Porém agora as propriedades name e pilot estão acusando um erro

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


function cloneShip<ShipType>(ship: ShipType, newName: string, newPilot: string) {
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
  
  // Agora a cópia funciona e os tipos inferidos estão corretos
  // copy1 é do tipo Ship e copy2 do tipo Fighter
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')