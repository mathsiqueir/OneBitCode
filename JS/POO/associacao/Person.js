const Address = require('./Address')

class Person{
    constructor(name,street,number,neighorhood,city,state){
        this.name = name
        //associacao que a classe address vai depender do person para funcionar
        this.address = new Address(street,number,neighorhood,city,state)
    }
}

class Person{
    constructor(name,street,number,neighorhood,city,state){
        this.name = name
        //associacao que a classe address vai depender do person para funcionar
        this.address = new Address(street,number,neighorhood,city,state)
    }
}
module.exports = Person