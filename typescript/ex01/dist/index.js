const spaceships = [];
function addSpaceship(name, pilot, crewLimit, inMission) {
    const spaceship = {
        name, pilot,
        crewLimit,
        crew: [],
        inMission: false
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
}
function sendToMission() {
}
function dataSpaceship() {
}
