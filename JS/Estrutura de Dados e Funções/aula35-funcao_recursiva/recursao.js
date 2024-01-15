//é uma função que chama ela mesma e se executa varias e varias vezes sozinha

//a função se chama dentro dela e se repete dentro de um loop até que seja falso
function dividir(num){
    console.log(num)
    if (num % 2 === 0){
        dividir(num/2)
    } else{
        return num
    }
}

//dividir(1024)

function dobrar(num){
    console.log(num)
    dobrar(num*2)
}
//dobrar(1) //estoura pilha de chamadas


//!5 === 5 x 4 x 3 x 2 x 1 
function fatorial(num){
    console.log("Número: "+num)
    if(num === 0){ //caso base
        return 1
    }else if(num === 1){
        return 1
    }else{
        console.log(num + " * !"+(num - 1))
        return num* fatorial(num-1)

    }
}
console.log(fatorial(7))