const express = require('express')
const router = require('./routes')
const path = require('node:path')
const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(router)


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`PORTA: http://localhost:${port}`)
})

