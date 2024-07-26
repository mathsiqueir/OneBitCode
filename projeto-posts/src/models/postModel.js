

// para armazenar tudo em memória
let posts = [
    {id:'1',title:'teste',content:'lorem ipsum...',createdAt:new Date(), updatedAt: new Date()},
    {id:'2',title:'teste 2',content:'lorem ipsum 2...',createdAt:new Date(), updatedAt: new Date()},
    { id: "1", title: "Introdução ao Node.js", content: "Descubra como o Node.js revolucionou o desenvolvimento web com sua arquitetura orientada a eventos.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "2", title: "Construindo APIs com Node.js", content: "Aprenda a criar APIs RESTful robustas e escaláveis utilizando o Node.js e o framework Express.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "3", title: "Gerenciando Pacotes com npm", content: "Saiba como utilizar o npm para instalar, atualizar e gerenciar pacotes de maneira eficiente em projetos Node.js.", createdAt: new Date(), updatedAt: new Date() }
]

//dados associados ao post
//{ id, title, content, createdAt, UpdateDate}
const postModel = {
    //funções para tarefas especificas
    getAllPosts(){
        return posts
    },

    getPostById(id){
        return posts.find(post => post.id === id)
    },
    //persistência do post
    // date e ID são adicionados automaticamente
    createPost(title,content){
        const post = {
            //como fazer um ID unico
            id: Date.now().toString(),
            title,
            content,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return post
    },

    savePost(post){
        //inserir os novos posts no começo do arr
        posts.unshift(post)
    },

    updatePost(id, updatedPost){
        const index = posts.findIndex(post => post.id === id)
        posts[index] = {...posts[index], ...updatedPost, updatedAt: new Date()}
    },
    deletePost(id){
        // separa todos os posts que são diferentes do ID digitado, cria um novo array
        posts = posts.filter(post => post.id !== id)
    }
}

module.exports = postModel