class Account {

    constructor(user) {
        this.email = user.email
        this.password = user.password
        this.balance = user.balance
    }

    // getBalance(email, password) {
    //     if (this.#authenticate(email,password)) {
    //         return this.#balance
    //     } else {
    //         null
    //     }
    // }
    // #authenticate(email,password){
    //     return this.email === email && this.#password === this.password
    // }
}
const user = {
    password: '8108',
    email:'Siqueira@gmail.com',
    balance: 60
    
}

const myAccount = new Account(user)

console.log(myAccount)