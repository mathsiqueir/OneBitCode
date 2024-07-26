const express = require('express')
const path = require('node:path')
const  router = require('./routes')
const app = express()

//config EJS
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//config arquivos estáticos
app.use(express.static('public'))

//config para ler dados da requisição
app.use(express.urlencoded({extends:true}))

//import ROUTER
app.use(router)


//enviroment - ambiente
// se eu não estiver com alguma variavel vai ser a 3000
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Servidor iniciado! http://localhost:${port}/`)
})