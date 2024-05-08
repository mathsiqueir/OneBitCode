// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante
let sun = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
};
// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkyWayPlanet {
    // Em typescript precisamos explicitar os atributos da classe dessa forma
    // Veremos mais sobre isso posteriormente
    name;
    mass;
    population;
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        // ...
    }
}
