const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const protectedRouter = express()


protectedRouter.get('/dashboard', authMiddleware,(req,res)=>{
  const username = req.authenticatedUser.username
  res.json({message: 'você está na area protegiada. Bem vindo, ', username})

})
module.exports = protectedRouter