const express = require('express')
const path = require('node:path')
const app = express()

const PORT = 3000

//use - indica para o express que queremos acresentar um comportamento

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    //para enviar um arquivo
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(PORT,()=>{
    console.log(`Servidor express iniciado em http://localhost:${PORT}`)
})