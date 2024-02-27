class Property{
    constructor(area, price){
        Object.assign(this,{area,price})
    }
    getPricePerSquareMeter(){
        return this.price / this.area
    }
}
//class heranca
class House extends Property{

}
//property e house agora são a mesma coisa praticamente

//
const land = new Property(200, 50000)
const home = new House(120,50000)

console.log(land)
console.log(home.getPricePerSquareMeter())
console.log('===================')

//ver se o objeto é uma instancia de um determinada classe
console.log(home instanceof House)
console.log(home instanceof Property)


//uma class que recebe extends
class Apartament extends Property{
    constructor(number, area, price){
        //mas é preciso levar os atributos da classe mae, mas para não precisar ficar reescrevendo você chama o constructor com a palavra ' super '
        super(area,price)
        this.number = number
    }
    getFloor(){
        return this.number.slice(0, -2)
    }
}

