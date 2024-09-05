const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");
const users = require("../models/users");

module.exports = {
  //se eu autenticar ou não a rota continuará funcionando
  optionalAuth: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      next();
    } else {
      const token = authHeader.split(" ")[1];
      console.log(token);
      try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = users.findById(id);
        console.log({ user });
        if (!user) return res.status(404).json({ message: "user not found!" });

        req.authenticatedUser = user;
        next();
      } catch (error) {
        return res.status(401).json({ message: "Invalid Token!" });
      }
    }
  },

  ensureAuth: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header required!" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      const user = users.findById(id);
      console.log({ user });
      if (!user) return res.status(404).json({ message: "user not found!" });

      req.authenticatedUser = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "invalid Token" });
    }
  },
  ensureAdmin: (req, res, next) => {
    if(req.authenticatedUser?.role  === 'admin'){
      next()
    }else{
      res.status(403).json({message:'Permission denied'})
    }

  },
};
