const mysql = require('mysql')

const conexion=mysql.createConnection({
    host : '192.185.10.151',
    user : 'suit_usrexam',
    password : '$uit2021',
    database : 'suit_exam3108',
    port : 3306
})

conexion.connect((error)=>{
    if (error) {
        console.log('Hubo un error de conexión, ' +error)
        return
    }
    console.log('Conexión Exitosa!')
})

module.exports=conexion