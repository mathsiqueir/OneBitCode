const express = require('express')

const path = require('node:path')

const app = express()

const storageUsers= []
// poder definir algumas configurações especificas
app.set('view engine','ejs')
//pegar o diretorio atual e agrupar com a pasta views
app.set('views',path.join(__dirname,'views'))

// configuração do body - para trabalhar com dados vindos do html
app.use(express.urlencoded({extended: true}))



app.get('/formulario',(req,res)=>{
    //nome do arquivo que vai renderizar
    res.render('form')
})

app.post('/register',(req,res)=>{
    //na rota post precisamos acessar os dados colocados no html
    const username = req.body.username
    const password = req.body.password
    storageUsers.push({username,password})
    //redirecionar para um determinada url
    //depois de adicionar um usuario ele vai automaticamente te direcionar para o /usuarios
    res.redirect('/usuarios')
    res.send('Cadastro REALIZADO COM SUCESSO')
})
app.get('/usuarios', (req,res)=>{
    res.render('users', {users: storageUsers})
})

const Port = 3000
app.listen(Port,()=> console.log(`Servidor iniciado: http://localhost:${Port}`))