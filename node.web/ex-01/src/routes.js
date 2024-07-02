const express = require('express')
const router = express.Router()

let emails = []

router.get('/', (req,res)=>{
    res.render('index')
})
router.post('/signup',(req,res)=>{
    const {email} = req.body

    emails.push(email);
    res.redirect('/sucess');
})

router.get('/sucess',(req,res)=>{
    res.render('sucess')
})

router.get('/emails',(req,res)=>{
    
    res.render('emails',{emails: emails})
})
router.post('/emails/delete', (req,res)=>{
    const {email} = req.body
    emails = emails.filter(item => item!== email)
    res.redirect('/emails')
})
router.post('/emails/edit', (req,res)=>{
    const id = req.params.id
    
})
module.exports = router