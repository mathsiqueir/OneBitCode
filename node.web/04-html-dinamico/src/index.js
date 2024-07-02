const express = require('express')
const path = require('node:path')

const app = express()

// poder definir algumas configurações especificas
app.set('view engine','ejs')
//pegar o diretorio atual e agrupar com a pasta views
app.set('views',path.join(__dirname,'views'))
app.get('/', (req,res)=>{
    //renderiza um template(view)
    const title = 'HomePage'
    const message = 'mensagem dinamica enviada atraves do node'
    
    res.render('index',{title,message})
})

const Port = 3000
app.listen(Port,()=> console.log(`Servidor iniciado: http://localhost:${Port}`))