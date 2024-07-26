const express = require('express')
const uploadMiddlewares = require('./middlewares/upload-middleware')
const app = express()
const PORT = 3333
app.use(express.static('public'))

//nessa rota vai vir um campo de upload que vai vir apenas um arquivo('image')
app.post('/uploads',uploadMiddlewares.single('image'),(req,res,)=>{
  console.log(req.file,req.body)
  res.json('arquivo salvo com sucesso')
})


app.listen(PORT,()=>{console.log(`servidor iniciado \nPORTA:http://localhost:${PORT}`)})



// //middle são funções que você registar
// app.use(function (req,res,next){
  // req.middlewareA = 'OK!'
// next()
// })
// function middlewareB(req,res,next){
//   req.middlewareB = "OK!"
//   next()
// }
// app.get('/testeA', (req,res)=>{
//   console.log({a: req.middlewareA,b: req.middlewareB})
//   throw new Error('algo deu muito errado aqui')
//   res.end()
// })
// app.get('/testeB',middlewareC,middlewareB, (req,res)=>{
  
//   console.log({a: req.middlewareA,b: req.middlewareB})
//   res.end()
// })

// app.use(function (req,res,next) {
//   if(err){
//     console.log(err.message)
//     res.status(400)
//     res.json({message:err.message})
//   }else{
//     next()
//   }
  
// })