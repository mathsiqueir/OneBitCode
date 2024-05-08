// Para corrigir isso as funções genéricas ainda permite especificar propriedades obrigatórias no tipo recebido. Modifique o código como mostrado abaixo:F
function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const falcon = {
    name: 'Millenium Falcon',
    pilot: 'Han'
};
const xWing = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
};
// Agora a cópia funciona e os tipos inferidos estão corretos
// copy1 é do tipo Ship e copy2 do tipo Fighter
const copy1 = cloneShip(falcon, 'Milano', 'Peter');
const copy2 = cloneShip(xWing, 'Black One', 'Poe');
