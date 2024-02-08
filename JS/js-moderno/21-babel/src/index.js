const dayjs = require('dayjs')

function birthday(date){
    //birth day vai receber a data quando a funct for chamada(formato EUA)

    const birthday = dayjs(date)
    //dia atual
    const today = dayjs()
    //agora vamos pegar o dia atual e fazer a diferença entre o birthday e vamos apresentar os dados em anos
    const ageInYears = today.diff(birthday,'year')
    const nextBirthday = birthday.add(ageInYears + 1,'year')
    const daysToNextBirthday = nextBirthday.diff(today,"days")
    console.log(`Idade: ${ageInYears}`)
    console.log(`próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`dias para o proximo aniversário: ${daysToNextBirthday}`)


}

    const today = dayjs()
    const nextDay = today.add(1,'day').startOf('day')
    const hoursNextDay = nextDay.add(0,'hour')
    const hoursToNextDay = nextDay.diff(today,'hours')
    console.log(`faltam ${hoursToNextDay} horas para amanhã!`)

//birthday("2004-01-08")
