// const Address = require('./Address')
const Person = require('./Person')

// const addr = new Address('rua Corifeu de azevedo Marques',99,'Jardim das Industrias', 'São José dos Campos', 'SP')

const siqueira = new Person('Matheus Siqueira','rua Corifeu de azevedo Marques',99,'Jardim das Industrias', 'São José dos Campos', 'SP')

console.log(siqueira)
//o atributo de address definido no person.js está minusculo 
console.log(siqueira.address.fullAddress())

