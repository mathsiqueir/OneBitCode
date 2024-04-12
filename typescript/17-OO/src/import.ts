import { SpaceShip } from "./export";
import * as lodash from "lodash"

interface BattleSpaceship extends SpaceShip{
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "X-Wing",
    pilot: "Luke SkyWalker",
    speed: 50,
    weapons: 4
}

//npm i --save-dev lodash não tem tipagem

//npm i --save-dev @types/lodash essa tem tipagem que a propria comunidade desenvolveu

console.log(lodash.camelCase(xwing.pilot))
console.log(lodash.kebabCase(xwing.pilot))
console.log(lodash.snakeCase(xwing.pilot))


