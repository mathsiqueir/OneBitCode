const colors = ['green','red', 'rgba(133,122,200)','#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',()=>{
    //get randowm number betwen 0 - 3 colors[3]
    const randonNumber = getRandomNumber()
    console.log(randonNumber)
    document.body.style.backgroundColor = colors[randonNumber]
    color.textContent = colors[randonNumber]

   
})
function getRandomNumber(){
    //random never return number upper 1, i math.floor to get a int numbers and i will have a infinite color changer
    return Math.floor(Math.random()*colors.length)
}

