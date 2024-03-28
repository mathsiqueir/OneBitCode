
document.querySelector(`#add`).addEventListener(`click`, addInput)
let idCounter = 1
function addInput(item){
    const item = document.querySelector(`#item`).value  
    
    newLi.id = `item-${item.id}`
    newLi.textContent = item.text
    ul.appendChild(newLi)    
    
}