//tipos genericos, esse recurso serve para que passemos argumentos para uma função ou classe que são tipos
//entrada cujo tipo é relevante dentro da função
function first(array) {
    return array[0];
}
function last(array) {
    return array[array.length - 1];
}
const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando'];
//esta trabalhando a cegas, não sabe exatamente qual o tipo mesmo que uma string esteja inserida no array
//const firstPilot: any
const firstPilot = first(pilots);
//
const lastPilot = last(pilots);
