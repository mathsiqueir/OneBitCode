//position name number
// UL teamList
//value para exibir os valores dos elementos no console
function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    //verificação de dados
    //console.log({position, name, number})

    //criar um Li e agrupar todos os dados colocados no Input
    const teamList = document.getElementById('teamList')
    const PlayerItem = document.createElement('li')
    //para conseguir remover mais tarde o jogador pelo número

    const confirmation = confirm("deseja confirmar o jogador: " + name)
    if (confirmation) {
        PlayerItem.id = "player -" + number
        PlayerItem.innerText = (position + ":" + name + "(" + number + ")")

        teamList.appendChild(PlayerItem)

        //agora para limpar o Input

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''

    }
}

function removePlayer() {
    //valor inserido no input
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player- ' + number)

    const confirmation = confirm("Remover Jogador:"+playerToRemove.innerText+"?")
    
    if(confirmation){
       document.getElementById('teamList').removeChild(playerToRemove)
       document.getElementById('numberToRemove').value = ''

    }

}