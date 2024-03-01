module.exports = class Product{
    constructor(name,description,price,inStock = 0){
        Object.assign(this,{name,description,price})
        this.inStock = inStock
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    removeFromStock(quantity){
        this.inStock -= quantity
    }
}