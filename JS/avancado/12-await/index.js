//utilizado junto com o async para facilitar o codigo
/*
await
so sao permitidos sem funcoes async 
ele vai basicamento travar o codigo para esperar o resultado

cuidado quando for executar o await pois ele pode travar o codigo por bastante tempo

*/
async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject(`argumenst must be of type number`)
    } else {
        return a + b
    }
}
// jeito de fazer sem o await
// async function execute(){
//     asyncSum(50,33).then(result =>{
//         console.log(result)
//     })
// }

async function execute() {

    try {
        const result = await asyncSum(50, true)
        //await espera a promise ser resolvida, e o codigo funciona como se fosse um codigo sincrono
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}


execute()