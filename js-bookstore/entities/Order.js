// classe para armazenar pedidos

const Product = require("./Product");

module.exports = class Order{
    #total
    #items
    #user
    constructor(items,user){
        items.forEach(product, quantity => {
            if(quantity > product.inStock){
                //throw lançar 
                throw new Error('Quantidade insuficiente em Estoque')
            }});
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum,quantity)=> sum +(quantity * product.price),0)
    }
    //metodo para acessar valores privados
    get data(){
        return{
            items: this.#items,
            user: this.#user,
            total: this.#total,
        }
    }
}