function addInput(){
    const ul = document.getElementById("inputs")

    //criando um novo elemento li , mas ele ainda não tem nada
    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    //inner text = dentro da tag
    //innerHTML = colocar tangs
    newLi.innerText = 'Novo input: '
   

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    //esses elementos acima ainda estao completamente soltos pela página
    //Agora vamos organiza-los

    newLi.appendChild(newInput)
    ul.appendChild(newLi)

}