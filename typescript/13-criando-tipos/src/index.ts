//vamos criar tipos além dos primitivos

//literal um valor especifico para aquile tipo
let literal:"Hello, World!"
let pi: 3.14159
//O tipo '"hi,world"' não pode ser atribuído ao <tipo> '"Hello, World!"'.
//literal = "hi,world"

let option: 'Yes' | 'No' | 'Maybe'
let options: Number | Boolean

option = "Yes"
options = 2
options = false

// Ao unirmos Unions com Literals temos um resultado muito interessante
//como fazer isso reaproveitavel
//type
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
let planet: Planet


//criar o proprio tipo


//homePLanet do tipo planet, apenas pode-se inserir valores que estão dentro do tipo planet
let homePlanet: Planet

function checkPLanet(planet:Planet){
    if(planet === 'Terra'){
        console.log('Estamos na Terra')
    }
}

type greetingCallback = (name: string )=> void
//'callbackFn' é declarado, mas seu valor nunca é lido.
function greet(callbackFn: greetingCallback) {
    let name = 'siqueira'
    callbackFn(name)
}



