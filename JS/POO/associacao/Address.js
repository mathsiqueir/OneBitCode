class Address{
    constructor(street,number,neighorhood,city,state){
        //destino e origem 
        Object.assign(this, {street,number,neighorhood,city,state})
    }
    //metodo para juntar as informações
    fullAddress(){
        return `Rua ${this.street}, Nº${this.number}. ${this.neighorhood}, ${this.city}/${this.state}`
    }
}
module.exports = Address