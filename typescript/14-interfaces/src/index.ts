//criando interfaces
type Planets ={
    name:string,
    satellites:string[]
}
interface CelestialBody{
    name:string
    mass:number
}

interface Star extends CelestialBody{
    age: number
    planets:Planet[]

}

interface Planet extends CelestialBody{
    population: number
    createSatellite:(name:string)=>void
}

let sun: Star

sun.name = 'Sol'
sun.mass = 1989 *(10 **12)
sun.age = 13 *(10 ** 11)
sun.planets = []


class MilkyWayPlanet implements Planet{
    population: number;
    name: string;
    mass: number;
    createSatellite: (name: string) => void;
}
