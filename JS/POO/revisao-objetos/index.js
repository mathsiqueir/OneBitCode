// const book = {
//     title: 'Padrões de alta performance',
//     pages: '289',
//     published: true,
//     inStock: 23,
//     tags:['desenvolvimento pessoal','crescimento mental'],
//     author:{
//         name: 'Joel Jota',
//         age: 40,
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     },
    
// }

//PascalCase
function Book(title,pages,tags,author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    //sempre começar em falso 
    this.published = false
    this.inStock = 0
    this.addOnStock = function(quantity){
        this.inStock += quantity
    }
    this.save = function(){
        //salva no banco de dados
    }
}


const author = {name: 'Joel Jota'}
const tags = {tags: 'Desenvolvimento pessoal'}
//new para chamar as funções construtoras
const joel = new Book('alta Performance', 349,tags,author,)


console.log(joel)

const eldest = new Book('eldest',644,tags,author)
console.log(eldest)