class Account {
    #password;
    //valor padrão
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        
    }
    //para ver o balance o email e password tem que conferir
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
        return null
        }
    }

    #authenticate(email, password) {
        return this.#password === password && email === email
    }
}
const user = {
    password: '8108',
    email: 'siqueira@gmail.com',
}

const myAccount = new Account(user)

console.log(myAccount)
//como ver um atributo privado
console.log(myAccount.getBalance('siqueira@gmail.com','8108'))