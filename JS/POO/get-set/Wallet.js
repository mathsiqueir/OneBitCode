class Wallet {
    #amount
    #username
    constructor() {
        //quero um número inteiro para ocupar menos espaço, para ocupar menos espaço
        this.#amount = 100.99 * 100 //10099
    }
    //quero acessar esse valor
    //quando for exibir não se usa o ()
    get amount() {
        return this.#amount / 100
    }
    //set tem que ter parametro
    set username(newUsername){
        //mas poderiamos fazer um regra
        if(typeof newUsername === 'string'){
            this.#username = newUsername
        }else{
            console.error('username must be of type string')
        }
        
    }
    //adicionar um get para poder ler o username
    get username(){
        return this.#username
    }
}
//vantagem de poder modifica-los como e fossem atributos
const mywallet = new Wallet()
mywallet.username = 'siqueira'
console.log(mywallet.username)
mywallet.username += ' matheus'
console.log(mywallet.username)

mywallet.username = true
console.log(mywallet.username)