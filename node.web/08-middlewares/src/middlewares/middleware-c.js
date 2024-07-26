module.exports = function (req,res,next){
  console.log('executando o middlewareC')
  res.middlewareC = "OK!"
  next()
}