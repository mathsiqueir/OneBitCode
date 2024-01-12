//Filtro Busca no array o que você desejar

const anotherArray = [2, 3, 4, 5, 4, 12, 19, 6, 2, 5]


const uniqueArray = anotherArray.filter(function(elem,index, array){
    return array.indexOf(elem) === index
})

const uniqueArray1 = anotherArray.filter((elem, index, arr ) => arr.indexOf(elem)=== index)

console.log(uniqueArray1)