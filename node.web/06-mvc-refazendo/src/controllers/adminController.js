const postModel = require("../models/postModel")



const adminController = {

    //get / admin
    index: (req, res) => {
    
        res.render('index', { posts })
      },

    //get /admin/create
    create: (req,res)=>{
        res.render('newPostForm')
    },
    //post /admin/create
    save: (req,res)=>{
        const {title, content} = req.body

        const newPost = postModel.createPost({title, content})
        postModel.savePost(newPost)

        res.redirect('/admin')
    },

    //get /admin/edit/:id
    

    //post /admin/update/:id

    

}

module.exports = adminController