module.exports = {
  authMiddleware: (req, res, next) => {
    if (req.session.authenticated) {
      next();
    } else {
      console.log(`nome de usuário ou senha incorretos`);

      res.redirect("/");
    }
  },

  ensureUserIsAdmin: (req, res, next) => {
    if (req.session.currentUser.role !== 'admin') {
      return res.redirect('/dashboard')
    } else {
      next()
    }
  },
};
