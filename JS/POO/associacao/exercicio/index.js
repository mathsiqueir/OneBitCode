class Pessoa{
    constructor(nome, carro){
        Object.assign(this,{nome,carro})
    }
    getCarro(){
        return this.carro
    }
    setCarro(carro){
        this.carro = carro
    }
    dirigir(){
        console.log(`${this.nome} está dirigindo um ${this.carro.modelo}`)
    }
}
class Carro{
    constructor(marca, modelo, ano){
        Object.assign(this,{marca,modelo, ano})
    }
    getMarca(){
        return this.marca
    }
    getModelo(){
        return this.modelo
    }
    getAno(){
        return this.ano
    }
}

const Carro1 = new Carro('honda','civic','2023')
const pessoa = new Pessoa('matheus',Carro1)

console.log(`${pessoa.nome} possui um ${pessoa.getCarro().getMarca()} ${pessoa.getCarro().getModelo()} ${pessoa.getCarro().getAno()}`);
