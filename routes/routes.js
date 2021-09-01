const express = require ('express')
const router = express.Router()
const usuario = require ('../controllers/Usuario')
//const conn=require('../database/db')

router.get('/',(req, res)=>{
    //conn()
    res.render('index')
})

//CONTROLLERS
router.post('/registrar', usuario.registrar)
module.exports=router