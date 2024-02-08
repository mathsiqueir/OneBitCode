"use strict";

var dayjs = require('dayjs');
function birthday(date) {
  //birth day vai receber a data quando a funct for chamada(formato EUA)

  var birthday = dayjs(date);
  //dia atual
  var today = dayjs();
  //agora vamos pegar o dia atual e fazer a diferença entre o birthday e vamos apresentar os dados em anos
  var ageInYears = today.diff(birthday, 'year');
  var nextBirthday = birthday.add(ageInYears + 1, 'year');
  var daysToNextBirthday = nextBirthday.diff(today, "days");
  console.log("Idade: ".concat(ageInYears));
  console.log("pr\xF3ximo anivers\xE1rio: ".concat(nextBirthday.format("DD/MM/YYYY")));
  console.log("dias para o proximo anivers\xE1rio: ".concat(daysToNextBirthday));
}
var today = dayjs();
var nextDay = today.add(1, 'day').startOf('day');
var hoursNextDay = nextDay.add(0, 'hour');
var hoursToNextDay = nextDay.diff(today, 'hours');
console.log("faltam ".concat(hoursToNextDay, " horas para amanh\xE3!"));

birthday("2004-01-08")
