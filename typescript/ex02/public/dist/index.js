const planets = [];
function addPlanets(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satallites: []
    });
    alert(`O planeta ${name} foi adicionado`);
}
function findPlanet(name) {
    const Planet = planets.find(planet => planet.name === name);
    //caso seja falso
    return Planet ?? false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi alterada para ${situation}`);
}
function addSattelite(name, planet) {
    planet.satallites.push(name);
    alert(`O satélite ${name} foi adicionado com sucesso ao planeta ${planet}`);
}
function removeSatteliite(name, planet) {
    planet.satallites = planet.satallites.filter(satallite => satallite !== name);
    alert(`O satélite ${name} foi removido com sucesso ao planeta ${planet}`);
}
