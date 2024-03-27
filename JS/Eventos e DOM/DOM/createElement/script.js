document.querySelector(`#add`).addEventListener(`click`, addInput)
let idCounter = 1
function addInput(){
    

    const item = document.querySelector(`#item`).value
    console.log(item)

    createLi(item)
}
function createLi(item,ev){
    ev.preventDefault
    const ul = document.querySelector(`.list`)
    const newLi = document.createElement(`li`)
    newLi.id = `item-${idCounter++}`
    newLi.textContent = item
    ul.appendChild(newLi)

}