//o jeito do typescript trabalhar com classes e diferente temos que colocar separado do constructor

class Spaceship {
  //temos que declarar as propriedas separadas do constructor,
  private _name: string
  //a um jeito de deixar ele disponivel para ser modificado get e set

  //ele buscou o name e colocou para poder se setado posteriormente
  get name(){
    return this._name
  }
  set name(name){
    this._name = name
  }
  protected captain: string
  protected _speed: number
  get speed(){
    return this.speed
  }
  set speed(speed){
    this.speed = speed
  }
  constructor(name, captain) {
    this.name = name
    this.captain = captain
    this.speed = 0
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time
  }
}

class Fighter extends Spaceship {
  weapons: number
  constructor(name: string, captain: string, weapons: number) {
    super(name, captain)
    this.weapons = weapons
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }

  erase() {
    this.name = ''
    this.captain = ''
  }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 5)
//A propriedade 'speed' é protegida e somente é acessível na classe 'Spaceship' e em suas subclasses.
ship.speed = 50
ship.accelerate(50, 10)
ship.weapons = 7

ship.name = `X-wing`