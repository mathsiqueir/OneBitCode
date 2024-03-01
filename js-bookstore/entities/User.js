module.exports = class User{
    constructor(name,email,password){
        Object.assign(this,{name,email,password})
    }
}