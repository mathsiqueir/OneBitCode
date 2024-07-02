const express = require('express')
const path = require('node:path')
const router = require('./routes')
const app = express()
const port = 3000

//config ejs
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extends:true}))

app.use(router)

let emails = []

app.listen(port,()=>{
    console.log(`PORTA: http://localhost:${port}/`)
})


