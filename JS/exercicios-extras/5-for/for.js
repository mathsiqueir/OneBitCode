let nave = prompt("Qual é o nome da EspaçoNave")
let replace = prompt(`Qual caractere de Nave(${nave}) você deseja mudar`)
let replacedChar = prompt('Por qual caractere deseja substituir')
let newNaveName = ''

for (let i = 0; i < nave.length; i++) {
    if(nave[i] == replace[i]){
        newNaveName += replacedChar
    }else{
        newNaveName += nave[i]
    }

    
}

alert(newNaveName)