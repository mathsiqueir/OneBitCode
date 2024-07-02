const postModel = require("../models/postModel")

//rotas para administrar
const adminController = {
    //GET /admin
    index:(req,res)=>{
        const posts = postModel.getAllPosts()
        //renderizar os posts
        res.render('admin',{posts})
    },
    //GET /admin/create
    create:(req,res)=>{
        //vai exibir o arquivo
        res.render('newPostForm')
    },
    //POST /admin/create
    save: (req,res)=>{
        //salvas as propriedades adicionadas no newPostForm
        //que estao dentro do form
        const {title,content} = req.body
        const newPost = postModel.createPost(title,content)
        postModel.savePost(newPost)
        
        res.redirect('/admin')
    },

    //GET /admin/edit/:id
    edit:(req,res)=>{
        const id = req.params.id
        //no arquivo a o metodo post então ele vai buscar todos metodos com post
        const post = postModel.getPostById(id)
        res.render('editPostForm', {post})
    },
    //POST /admin/update/:id
    //updatePost(id, updatedPost)
    update: (req,res)=>{
        const id = req.params.id
        const {title, content} = req.body
        postModel.updatePost(id,{title,content})
    },
    //POST /admin/delete/:id
    delete: (req,res)=>{
        const id = req.params.id
        postModel.deletePost(id)

        res.redirect('/admin')
    }

}
module.exports = adminController