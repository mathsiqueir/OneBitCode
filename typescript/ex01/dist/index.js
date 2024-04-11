const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceships.push(spaceship);
    alert(`A Nave ${spaceship.name} foi Registrada`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => {
        return ship.name === name;
    });
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado`);
    }
    else {
        spaceship.crew.push(member);
    }
}
function sendToMission(spaceship) {
    if (spaceship.inMission) {
        alert('não pode ser enviada, já está em missão');
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert('não pode ser enviada, tripulação insuficiente');
    }
    else {
        spaceship.inMission = true;
        alert('Tripulação enviada com sucesso');
    }
}
function firstMenuOption() {
    const name = prompt('digite o nome da espaço nave');
    const pilot = prompt('digite o nome do piloto');
    const crewLimit = Number(prompt('digite o nome do limite de tripulantes'));
    const inMission = confirm('está em missão?');
    const confirmation = confirm(`confirma o registro da nave ${name}\n piloto ${pilot}\n tripulação${crewLimit}`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt('qual é o nome do tripulante');
    const spaceshipName = prompt(`para qual nave ${member} deverá ser designado\n ${spaceships}`);
    //verificar se a nave existes
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`confirma a inclusão de ${member} na tripulação da ${spaceship.name}`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendToMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `;
        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`;
        });
    });
    alert(list);
}
/**
 * Menu
 */
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
