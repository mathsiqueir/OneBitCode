//High-Order Functions
//Uma função que consegue receber outras funções como parametro dentro dela

//funções anonimas


/*const greet = function(name){
    return `Hello, ${name}`
}
console.log(greet('Matheus'))

//Arrow Functions
const greet2 = (name) => `Hello my dear, ${name}`

console.log(greet2('Matheus'))

*/
/*function speakToMary(dialog){
    const text = dialog('Mary')
    return `He says "${text}`
}*/
//speaktoMary, chama a const greet, que executa e transforma o dialog em name mas continua com o name dialog então dialog recebe 'Mary' e name também recebe 'Mary' na sua copia
//console.log(speakToMary(greet))

const characters = [
    { name: 'John', raca: "Orc"  },
    { name: 'Jane', raca: "Orc"  },
    { name: 'Suse', raca: "Orc"  },
    { name: 'Jasmine', raca: "Humano"  },
    { name: 'Peter', raca: "Humano"  },
    { name: 'Tommy',raca: "Elfo Noturno" },
    { name: 'Jack', raca: "Anão" },
    ]   

const orcs = []

for (let i = 0; i < characters.length; i++) {
    if(characters[i].raca === "Orc"){
        orcs.push(characters[i])
    }
    
}
console.log(orcs)