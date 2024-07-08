//fica encarregado das rotas
//recebe a requisição e processa ela

const postModel = require("../models/postModel");

//controle vai funcionar como um callback
const postsController = {
  //home
  // agora só importar o index no arquivo routes
  index: (req, res) => {
    const posts = postModel.getAllPosts();

    res.render("index", { posts });
  },

  // GET /posts/:id
  show: (req, res) => {
    const id = req.params.id;
    const post = postModel.getPostById(id);

    res.render("post", { post });
  },
};

module.exports = postsController;
