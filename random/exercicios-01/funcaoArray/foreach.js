const numeros = [0,1,2,3,4,5];
for(let i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}

const parImpar = numeros.forEach(num)
    