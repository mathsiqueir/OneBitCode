//1 primeira posica nome da nave
//2 quantidade de tripulantes
//3 informa se o processo de engate ja foi concluido

/*
queremos

*/ 
const hitchedSpaceships = [
    ['Fenix',8,true],
    [`Golias`,10,true],
    ['Helmet',5,false],
    ['Elemental',3,true],
    ['Darwin',15,false]
]

/*

 */
let crewThan9 = hitchedSpaceships.filter((spacehip)=>{
    //o [1] eh para retornar o segundo elemento dentro do arr
    return spacehip[1] > 9
}).map(spacehip=>{
    return spacehip[0]
})
console.log(crewThan9)

let ongoingHitchPlataform = hitchedSpaceships.findIndex((spaceship)=>{
    return spaceship[2] ==false
})
console.log(ongoingHitchPlataform)


let highlightedSpaceships = hitchedSpaceships.map(spacehip =>{
    return spacehip[0].toUpperCase()
})

let message = `spaceship with more than 9 passangers  ${crewThan9.join(`,`)}`

message += `\nplataform with ongoing hitch ${ongoingHitchPlataform +1 }`

message += `\nhighlighted spaceships ${highlightedSpaceships.join(`, `)}`

console.log(message)