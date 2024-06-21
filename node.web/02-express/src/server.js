const express = require('express')
const PORT = 3000
const server = express()

server.get('/',(req,res)=>{
    res.send(`Servidor Express funcionando\n Voce esta na pagina inicial.`)
})
server.get('/artigos',(req,res)=>{
    res.send('Voce está na pagina de artigos ')
})

server.listen(PORT,()=>{
    console.log(`Servidor express iniciado em http://localhost:${PORT}`)
})