let spaceShip = prompt("What's your SpaceShip name?")
let invertedName = ""

for (let i = spaceShip.length; i >= 0; i--) {
  
    invertedName += spaceShip[i];
    
}
console.log(invertedName)