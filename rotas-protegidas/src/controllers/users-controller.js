const users = require("../models/users");
const { checkTypeof } = require("./auth-controller");

module.exports = {
  //get /users
  index: (req, res) => {
    const allUsers = users.findAll();
    res.json(allUsers);
  },
  //get /users/:id
  show: (req, res) => {
    const { id } = req.params;
    const user = users.findById(id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      res.json(user);
    }
  },
  //post /users
  save: (req, res) => {
    const { name, email, password, role } = req.body;

    if (checkTypeof(name, email, password, role) ||
      !role.match(/^(admin|standard)$/)
    ) {
    } else {
      return res.status(400).json({ message: "Invalid Fields" });
    }

    const newUser = users.createUser(name,email,password,role)
    if(!newUser) return res.status(400).json({message: 'email already in use'})

    res.status(201).json(newUser)
  },
  //delete /users/:id
  delete: (req,res)=>{
    const { id } = req.params;
    const user = users.findById(id);

    if(!user) return res.status(404).json({message:'user not found'})

    const deleteUser = users.deleteUser(id)
    if(!deleteUser) return res.status(400).json({message:'Couldn`t delete user'})
    res.json(deleteUser)
  }
};
