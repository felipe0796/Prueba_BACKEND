const express = require ('express')
const dotenv = require ('dotenv')
const cookieParser = require ('cookie-parser')

const app = express();

//
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
//app.use(cookieParser)

app.use('/', require('./routes/routes'))

dotenv.config({path:'./env/.env'})

app.listen(3000, ()=>{
    console.log ('SERVER OK')
})