//vamos criar tipos além dos primitivos
//literal um valor especifico para aquile tipo
let literal;
let pi;
//O tipo '"hi,world"' não pode ser atribuído ao <tipo> '"Hello, World!"'.
//literal = "hi,world"
let option;
let options;
option = "Yes";
options = 2;
options = false;
let planet;
//criar o proprio tipo
//homePLanet do tipo planet, apenas pode-se inserir valores que estão dentro do tipo planet
let homePlanet;
function checkPLanet(planet) {
    if (planet === 'Terra') {
        console.log('Estamos na Terra');
    }
}
//'callbackFn' é declarado, mas seu valor nunca é lido.
function greet(callbackFn) {
    let name = 'siqueira';
    callbackFn(name);
}
