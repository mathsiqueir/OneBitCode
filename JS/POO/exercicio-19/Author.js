const Post = require("./Post")

class Author{
    constructor(name){
        this.name = name
        this.posts = []
    }
    writePost(title,body){
        //this vai pegar o objeto todo de Author
        //igual a estrutura que está no Post.js
        const post = new Post(title,body,this)
        this.posts.push(post)
        return post
    }
}
module.exports = Author