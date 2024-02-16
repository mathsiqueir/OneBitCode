// Principal: Liste o nome dos passageiros
// Bonus (a)- Liste o nome dos vegetarianos/veganos
// Bonus (b)- Organize os passageiros por ordem de conexões

const passengers = [
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianOrVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianOrVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt Cobain",
        isVegetarianOrVegan: true,
        connectedFlights: 3,
    },
    {
        id: 3,
        passengerName: "Michael Jackson",
        isVegetarianOrVegan: true,
        connectedFlights: 1,
    },
]

function listaNome1(lista){
    const nomes = []
    passengers.forEach((passengerName)=>{
        nomes.push(passengerName)
    },)
    return nomes
}
function listaNome(list){
    return list.map((obj)=> obj.passengerName)
}
const nomes = listaNome(passengers)
console.log(nomes)
console.log(listaNome1(passengers))

// Bonus (a)- Liste o nome dos vegetarianos/veganos

const vegans = passengers.filter((Yvegan)=>{
    return Yvegan.isVegetarianOrVegan === true
})
console.log(vegans)


const filterVegan = (list)=> list.filter(({isVegetarianOrVegan})=> isVegetarianOrVegan

)
console.log(filterVegan(passengers))