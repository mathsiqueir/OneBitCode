const button = document.getElementById('btn')
const btnDiff = document.getElementById('diff')
const numday = document.querySelectorAll('td')
function checkDay() {
    
    const inputDay = document.getElementById('inputDay').value

    for (let i = 0; i < numday.length; i++) {
        const day = numday[i].textContent

        if (day === inputDay) {
            numday[i].style.backgroundColor = '#000'
        }
    }
}
function calcDiffDays(){
    const fDay = document.getElementById('firstDay').value
    const sDay = document.getElementById('secondDay').value
    console.log(fDay)
    console.log(sDay)
    
        for (let i = 0; i < numday.length; i++) {
            const day = numday[i].textContent
            console.log(day)
            if(day >= fDay && day <= sDay){
                numday[i].style.backgroundColor = '#3e3e3e'
            }
        }

    
}

button.addEventListener('click', checkDay)
btnDiff.addEventListener('click', calcDiffDays)
