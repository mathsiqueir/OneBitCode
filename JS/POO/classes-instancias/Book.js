class Book{
    constructor(title){
        this.title = title
        this.published = false
        
    }
    //colocando os métodos para mudar o published
    publish(){
        this.published = true
    }
}

const eragon = new Book('eragon')
const eldest = new Book('Eldest')

eragon.publish()
console.log(eragon)
console.log(eldest)
//instanceof tipo uma função ele serve para verficar se essa instacia é dessa classe se eu colocasse Array no lugar de Book apareceria false
console.log(eragon instanceof(Book))