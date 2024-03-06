//pendente - pending
//resolvida - resolved
//rejeitada - rejected
const p = new Promise((resolve, reject)=>{
    console.log('a promise está sendo executada')
    setTimeout(()=>{
        if(1+1 ===2){
            reject('algo deu errado')
        }
        console.log('resolvendo a promise')
        resolve('true')
    },1000*2)
    
})

console.log(p)
// a promise está sendo executada
// Promise { <pending> }

// setTimeout(()=>{
//     console.log(p)
    
// },1000*3)