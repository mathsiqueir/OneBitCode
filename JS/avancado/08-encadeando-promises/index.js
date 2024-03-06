function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}
//esse jeito fica inviavel de trabalhar se for muito grande
// getAge('2004-01-08').then((age)=>{
//     checkAge(age).then(isOver18 =>{
//         if(isOver18){
//             isOver18 > 18
//             console.log('maior de idade')
//         }else{
//             console.log('menor de idade')
//         }
//     }).catch(err =>{
//         console.log(err.message)
//     })
// }).catch(err =>{
//     console.log(err.message)
// })
//jeito certo

getAge('2009-01-08')
    .then((age) =>
        checkAge(age)
    ).then((isOver18) => {
        if (isOver18) {
            isOver18 > 18
            console.log('maior de idade')
        } else {
            console.log('menor de idade')
        }
    })

