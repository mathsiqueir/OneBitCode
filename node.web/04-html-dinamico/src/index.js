const express = require('express')
const path = require('node:path')

const app = express()

// poder definir algumas configurações especificas
app.set('view engine')
app.get('/', (req,res)=>{
    res.send('hello World!')
})

const Port = 3000
app.listen(Port,()=> console.log('servidor iniciado'))