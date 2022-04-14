require("dotenv").config({path:"./config.env"});
const express= require('express')
const app = express()
const cors =require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const path = require('path');

const PORT = process.env.PORT || 1337 ;

const DB= 'mongodb+srv://vishal:vishalmongo@cluster0.1vajy.mongodb.net/mernsignup?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>console.log(`no connection`));

app.use(cors())
app.use(express.json())

app.post('/login', async (req, res)=>{
        const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
        })
        if (user){
            const token =jwt.sign({
                name: user.name,
                email: user.email,
            }, 'blowglow1234')
            return res.json({ status: 'ok', user:token})
        }else{
            return res.json({ status: 'error', user:false})
        }  
})

app.post('/register', async (req, res)=>{
    console.log(req.body)
    try{
        await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        })
        res.json({status: 'ok'})
    } catch(err){
        res.json({status:'error', error:'Duplicate email'})
    }
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', "build", "index.html"));
    });
  }

app.listen(PORT, ()=>{
    console.log(`Server started on sever ${PORT}`)
})