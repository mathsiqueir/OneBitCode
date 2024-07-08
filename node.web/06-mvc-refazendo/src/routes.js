const express = require('express')
const postsController = require('./controllers/postsController')
const router = express.Router()

//aqui você diz a rota e no postController você faz o (request e response)
router.get('/', postsController.index)

// get / posts / :id
router.get('/posts/:id', postsController.show)

router.get('/admin', )

module.exports = router