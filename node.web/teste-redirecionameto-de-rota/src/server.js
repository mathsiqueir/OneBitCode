const express = require('express')

const app = express()

app.set('')
app.get('/', (req,res)=>{
  res.sendFile(__dirname + "/index.html")
})


const port = process.env.PORT ||3333
app.listen(port,()=>{console.log(`servidor criado com sucesso.\n porta: http://localhost:${port}`)})