
class product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity

    }
    calculateDiscount(discount){
        return this.price *= ((100- discount)/100)
    }
    
}

const watch = new product('smartWatch','...',1000)
console.log(watch)
watch.addToStock(98)
watch.calculateDiscount(5)
console.log(watch)