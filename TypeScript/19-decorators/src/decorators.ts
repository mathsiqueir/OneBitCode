//servem para adicionar informações e procedimentos extras para as declarações, que você inseriu

//vou criar um função que será o decorator

function Decorator(){
    return function(target, key, descriptor){
        console.log('chamando decorator')
    }
}

class Planet{
    name:string
    constructor(name:string){
        this.name = name
    }
    @Decorator()
    calculate(value: number){

        return value * 2
    }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)

console.log(`resultado: ${result}`)