//continuação das promises
//then para revelar o resultado
//catch se estiver com algum erro
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executado...')
        setTimeout(() => {
            if(false){
                reject('a promise foi rejeitada')
            }else{
                console.log('resolvendo a promise...')
                resolve(321)
            }
            
        }, 1000 * 3);
    })
}



//quando ela é resolvida
execute().then((result)=>{
    console.log(`A Promise foi resolvida, result: ${result}`)
}).catch((err)=>{ // o código não é encerrado imediatamente, você resolveu o erro
    console.log(`A promise foi rejeitada, result: ${err}`)
}).finally(()=>{
    console.log(`Concluida com sucesso!`)
})

