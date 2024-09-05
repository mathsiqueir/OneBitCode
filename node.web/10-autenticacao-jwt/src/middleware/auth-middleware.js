const jwt = require("jsonwebtoken");
const users = require("../models/users");

const secretKey = "palavra-chave-secreta"; //u924348bfguwnvaebvuy39

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "authorization header required" });
  }
  //tirar a parte do bearer que aparece
  const token = authHeader.split(" ")[1];



  try {
    const decodedToken = jwt.verify(token, secretKey);
    console.log(decodedToken);

    const user = users.find(user => user.username === decodedToken.username);

    if (!user) {
      return res.status(404).json({ message: "invalid user" });
    }

    req.authenticatedUser = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
  console.log(token);
};
module.exports = authMiddleware;
