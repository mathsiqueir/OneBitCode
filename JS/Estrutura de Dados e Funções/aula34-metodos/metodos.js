//metodos são funções atreladas a um objeto

let pessoa = {
    nome: "Matheus",
    idade: "20",
    dizerOla(){
        console.log("Olá, eu sou o "+this.nome)
        //this
    }
}
console.log(pessoa)
/*typeof console
'object'
typeof console.log
'function'*/ 
pessoa.dizerOla()