const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')
const { error } = require('console')


//INSERT
exports.registrar = async (req,res)=>{

    try { 
        const full_name = req.body.full_name
        const gender = req.body.gender
        const email = req.body.email
        const pwd = req.body.pwd
        const profile = req.body.profile
        let pwdHash = await bcryptjs.hash(pwd, 8)
        //
        conexion.query('insert into feliperod_usuario set ?', 
            {
                full_name:full_name,
                gender:gender,
                email:email,
                pwd:pwdHash,
                profile:profile
            }, (err, results)=>{
                if (err) {
                    console.log(err)
                    res.setHeader('Content-Type', 'application/json')
                    res.writeHead(400)
                    res.end('{"Estado":"400","Mensaje":"Usuario no fue ingresado."}')
                }else{
                    console.log('Usuario Registrado')
                    res.setHeader('Content-Type', 'application/json')
                    res.writeHead(200)
                    res.end('{"Estado":"200","Mensaje":"Usuario ingresado correctamente."}')
                }
            })
    } catch (error) {
        console.log(error)
    }
    


    //ok
    //console.log(pwdHash)
    //console.log(full_name + gender + email + pwd + profile)
}
