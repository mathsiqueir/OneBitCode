const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json())
app.use('/api', router)




const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`servidor iniciado!\nPorta:http://localhost:${port}`))