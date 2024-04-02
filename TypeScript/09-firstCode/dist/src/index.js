function sendSpaceShip(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A Nave ".concat(spaceship.name, " comandada pelo capitao ").concat(spaceship.captain, " foi enviada para uma missao"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt("Insira o nome da nave a ser enviada.");
var spaceshipCaptain = prompt("Insira o nome do Capitao da nave a ser enviada.");
//inferencia de tipo
var currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar..."));
//necessario converter o tipo de dado do SPEED, colocando-o dentro de Number()
accelerate(speed, currentShip);
