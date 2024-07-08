//simula um banco de dados
let posts = [
  {
    id: "1",
    title: "teste",
    content: "lorem ipsum...",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "teste 2",
    content: "lorem ipsum 2...",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Introdução ao Node.js",
    content:
      "Descubra como o Node.js revolucionou o desenvolvimento web com sua arquitetura orientada a eventos.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Construindo APIs com Node.js",
    content:
      "Aprenda a criar APIs RESTful robustas e escaláveis utilizando o Node.js e o framework Express.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Gerenciando Pacotes com npm",
    content:
      "Saiba como utilizar o npm para instalar, atualizar e gerenciar pacotes de maneira eficiente em projetos Node.js.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

//POST {id, title, content, createdAt,updatedAt}

//objeto para realizar funções criado para facilitar o entendimento do código ao realizar importações!
const postModel = {
  getAllPosts() {
    return posts;
  },
  getPostById(id) {
    return posts.find((post) => post.id === id);
  },

  createPost(title, content) {
    const post = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return post;
  },

  savePost(post) {
    posts.unshift(post);
  },

  updatePost(id, updatedPost) {
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = { ...posts[index], ...updatedPost, updatedPost: new Date() };
  },

  deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
  },
};

module.exports = postModel;
