 class Character{
    constructor(name,lifePts,attackPts,defensePts){
        Object.assign(this,{name,lifePts,attackPts,defensePts})
    }
    attack(targetCharacter){
        targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
    }
}
module.exports = Character