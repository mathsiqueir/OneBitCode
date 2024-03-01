module.exports = class Author{
    constructor(name, nationality, bio){
        Object.assign(this,{name,nationality,bio})
    }
}