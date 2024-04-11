type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: planetSituation,
    satallites: string[]
}
type planetSituation = 'habitado' | 'habitável' | 'inabitável' | 'inexplorado'
type PlanetCoordinates = [number, number, number, number]
const planets: Planet[] = []

function addPlanets(name: string, coordinates: PlanetCoordinates, situation: planetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satallites: []
    })
    alert(`O planeta ${name} foi adicionado`)
}

function findPlanet(name: string) {
    const Planet = planets.find(planet => planet.name === name)

    //caso seja falso
    return Planet ?? false
}

function updateSituation(situation: planetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi alterada para ${situation}`)
}

function addSattelite(name:string,planet: Planet){
    planet.satallites.push(name)

    alert(`O satélite ${name} foi adicionado com sucesso ao planeta ${planet}`)
}

function removeSatteliite(name:string,planet:Planet){
    planet.satallites = planet.satallites.filter(satallite => satallite !== name)

    alert(`O satélite ${name} foi removido com sucesso ao planeta ${planet}`)
}