const users = [
  { id: '1', name: 'Isaac', email: 'isaac@email.com', password: '123456', role: 'admin' }
]

module.exports = {
  findAll: () => users,

  findById: (id)=> users.find(user => user.id === id),

  findByEmail: (email)=> users.find(user => user.email === email),

  //vai receber os dados através do post que vai ser passado no controller
  registerUser: (name, email, password)=>{
    //vai pesquisar se o email do usuario existe
    const userAlreadyRegister = users.find(user => user.email === email)
    //se existe retorna vazio
    if(userAlreadyRegister) return null

    //cria um id aleatório  e salva as informações no users
    const newUser = {
      id: Math.floor(Math.random() * 99999).toString(),
      name,
      email,
      password,
      role:'standard'
    }
    users.push(newUser)
    return newUser
  },

  // esse pode selecionar a role 
  createUser: (name, email, password, role)=>{
    const userAlreadyRegister = users.find(user => user.email === email)

    if(userAlreadyRegister) return null

    const newUser = {
      id: Math.floor(Math.random() * 99999).toString(),
      name,
      email,
      password,
      role
    }
    users.push(newUser)
    return newUser
  },

  deleteUser: (id)=>{
    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex === -1) return null
    const [deleteUser] = users.splice(userIndex,1)

    return deleteUser
  }
}