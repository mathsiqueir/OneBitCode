//rotas relacionados ao post
//recebe a requisição e controla ela
const postModel = require("../models/postModel")
const postsController = {
    //GET /
    index:(req,res)=>{
        const posts = postModel.getAllPosts()
        //renderizar os posts
        res.render('index',{posts})
    },

    // get /posts/:id
    show:(req,res) =>{
        //id do post que o usuario quer
        const id = req.params.id

        const post = postModel.getPostById(id)

        return res.render('post',{post})
    }
}
module.exports = postsController