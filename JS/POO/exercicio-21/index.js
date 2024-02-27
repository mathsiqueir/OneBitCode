const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

const arthur = new Mage('arthur',90,4,2,14)
const beatrice = new Thief('beatrice',140,20,8)
const cain = new Warrior('cain',200,14,12,4)

console.table({arthur,beatrice,cain})
cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)
arthur.heal(arthur)
console.table({arthur,beatrice,cain})