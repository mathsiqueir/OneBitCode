const Person = require('./Person')


const nome = new Person('Matheus Siqueira','joaquim',211,'itapuca','resende','RJ')
//como person está resende Address dentro dele, posso executar os métodos contidos dentro de address

console.log(nome.address.fullAddress())
console.log(nome.name)