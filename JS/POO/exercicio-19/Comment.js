class Comment{
    constructor(username, content){
        Object.assign(this, username, content)
        //criar uma data atual automaticamente
        this.createdAT = new Date()
    }
}
module.exports = Comment