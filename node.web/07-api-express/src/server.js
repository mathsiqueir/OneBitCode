const express = require('express')
const gamesController = require('../controllers/games-controller')
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
  res.json()
})

app.get('/games', gamesController.index)

app.get('/games/:id',gamesController.show)

app.post('/games',gamesController.save)

app.post('/games/:id/genres',gamesController.addGenre)

app.put('/games/:id',gamesController.update)
app.delete('/games/:id', gamesController.delete)
app.delete('/games/:id/genres/:genres', gamesController.deleteGenre)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`servidor iniciado.\nPORTA: http://localhost:${port}`)})