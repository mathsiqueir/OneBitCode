class Person {
    #firstName
    constructor(SecondName, cpf){
        this.#firstName: firstName
        Object.assign(this, {SecondName, cpf})
    }
    fullName(){
        return this.firstName + ' '+ this.SecondName+'\ncpf: '+this.cpf
    }
}

const newPerson = new Person('matheus','siqueira', 11864439793)

console.log(newPerson.fullName())

