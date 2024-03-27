// id = escalacao

function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    //console.log({position, name, number})

    const confirmation = confirm("Escalar"+name+ " como " +position+ "?")
    if(confirmation){
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number //adicionar um id muda
        //inner Text para adicionar os elementos que eu coloquei no Input
        playerItem.innerText = position + ": " + name+ "(" +number+ ")"
        teamList.appendChild(playerItem)
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player - '+number)

    const confirmation = confirm("Remover o jogar: "+ playerToRemove.innerText)

    if(confirmation){
        document.getElementById('teamList').removeChild(playerToRemove)
    }
}

