//arquivo para as rotas
const express = require("express");
const postsController = require("./controllers/postsController");
const adminController = require("./controllers/adminController");

const router = express.Router();

router.get("/", postsController.index);
//rota dinamica - blog
router.get("/posts/:id", postsController.show);

//rota dinamica - admin

router.get("/admin", adminController.index);

//GET /admin/create
router.get('/admin/create',adminController.create)
//POST /admin/create
router.post('/admin/create', adminController.save)
//GET /admin/edit/:id
router.get('/admin/edit/:id', adminController.edit)
//POST /admin/update/:id
router.post('/admin/update/:id', adminController.update)
//POST /admin/delete/:id
router.post('/admin/delete/:id', adminController.delete)
module.exports = router;
