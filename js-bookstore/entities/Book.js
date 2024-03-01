const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, synopsis,genre,pages,author,description,price,inStock = 0){
        super(`Livro: ${title}`,description,price,inStock)
        Object.assign(this,{synopsis,genre,pages,author})
    }
}