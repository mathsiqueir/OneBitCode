const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}
//por phone não estiver dentro de friends ele é uma propriedade indefinida e quando tenta ler o ddd aparece que não é possivel ler um propriedade de um elemento indefinido
//console.log(user.friends[0].phone.ddd)

//se ele verifica se tem parametro se não tiver ele não continua executando
console.log(user?.friends[0]?.phone?.ddd)
//vai resultar em undefined

console.log(user.brother?.[5].name)
