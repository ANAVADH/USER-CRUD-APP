const express=require('express')
const app=express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
dotenv.config({path:'config.env'})
const path = require('path')
const PORT = process.env.PORT || 8080;


//logging the req
app.use(morgan('tiny'))


//parse request to bodyparser
app.use(bodyParser.urlencoded({extended:true}))
//view engine 
app.set("view engine","ejs")
//load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.get('/',(req,res)=>{
    res.render('index')
    
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
