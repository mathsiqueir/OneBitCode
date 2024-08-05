const express = require('express')
const path = require('node:path')
const router = require('./routes')
const session = require('express-session')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))


app.use(session({
  //serve para assinar o indetificador da sessão
  secret: 'palavra-chave-secreta', //329847385bfnhgf29bv38b
  resave: false,
  saveUninitialized: true,
  cookie:{secure: false}
}))
app.use(router)

app.listen(3000, ()=> console.log('http://localhost:3000/'))

