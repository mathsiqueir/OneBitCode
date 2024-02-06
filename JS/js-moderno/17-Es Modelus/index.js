import {name,label, input, br} from "./functions.js"
//mas só com isso não é possivel fazer um modulo externo
console.log(label({ for: 'fullname', textContent: 'Nome Completo' }))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...' }))
console.log(br())