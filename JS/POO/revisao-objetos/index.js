const book = {
    title: 'Padrões de alta performance',
    pages: '289',
    published: true,
    inStock: 23,
    tags:['desenvolvimento pessoal','crescimento mental'],
    author:{
        name: 'Joel Jota',
        age: 40,
    },
    addOnStock(quantity){
        this.inStock += quantity
    }
}

console.log(book.title)

book.addOnStock(27)
console.log(book.inStock)