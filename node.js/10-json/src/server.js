const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('<h1> minha lista de tarefas </h1>')
})

app.get('/json', (req, res)=>{
  res.json({title: 'tarefa x', done: true, name: 'siqueira'})
})

app.listen(3000,()=> console.log("http://localhost:3000"))