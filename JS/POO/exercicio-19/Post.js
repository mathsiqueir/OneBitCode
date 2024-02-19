const Comment = require("./Comment")

Comment
class Post{
    constructor(title,body,author){
        Object.assign(this, {title, body,author})
        this.comments = []
        this.createdAt = new Date()

    }
    addComment(username, content){
        //vai adicionar o array comments criado acima,posteriormente irá adcionar um comment que contem os dados que serão descritos na função quando for declarada
        this.comments.push(new Comment(username, content))

    }
}

module.exports = Post