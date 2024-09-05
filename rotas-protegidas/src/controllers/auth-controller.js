const { JWT_SECRET } = require("../config/environment");
const users = require("../models/users")
const jwt = require('jsonwebtoken')


function checkTypeof(fields) {
  for (const field of fields) {
    if (typeof field !== 'string' || field.trim() === '') {
      return false;
    }
  }
  return true;
}



module.exports = {
  checkTypeof: (fields) => {
    for (const field of fields) {
      if (typeof field !== 'string' || field.trim() === '') {
        return false;
      }
    }
    return true;
  },
  //POST /auth/register
  register: (req,res)=>{
    const {name, email,password} = req.body
    
    if(!checkTypeof([name,email,password])){
      return res.status(400).json({ message: 'invalid fields' })
    }
      
    //faz a verificação e manda as informações adicionados ao registerUser, caso o email já esteja cadastrado retornará a mensagem de ero
    const registeredUser = users.registerUser(name,email,password)

    if(!registeredUser){
      return res.status(400).json({message: 'Email already in use'})
    }
    

    res.status(201).json(registeredUser)
  },
  //POST /auth/register
  login: (req,res)=>{
    const {email, password} = req.body

    if(!checkTypeof([email,password])){
      return res.status(400).json({ message: 'invalid fields' })
    }

    const user = users.findByEmail(email)
    console.log(user)
    console.log(user.name)
    if(!user) return res.status(404).json({message: 'User not found!'})

    if(user.password !== password) return res.status(404).json({message: 'invalid credentials'})

    const payload = {id: user.id, email: user.email}
    const token = jwt.sign(payload, JWT_SECRET ,{expiresIn: '1h'})

    res.json({token})
  }
}