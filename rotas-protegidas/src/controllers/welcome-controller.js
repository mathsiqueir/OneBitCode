module.exports = {

  welcome: (req,res)=>{
    //se essa expressão for falsa ou numa, vai chamar de visititante
    const displayName = req.authenticatedUser?.name ?? 'visitante'

    res.json({message:`Seja bem-vindo(a), ${displayName}`})
  }
}