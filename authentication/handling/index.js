const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/authentication",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB Connected")
})

const userSchema= new mongoose.Schema({
   name:String,
   email:String,
   password:String
})

const User = new mongoose.model('verification', userSchema)

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,data)=>{
        if(data){
            if(password===data.password){
                res.send({messgae:"Successfull",user:data})
            }
            else{
                res.send({message:"Wrong Password"})

            }
        }
        else{
            res.send({message:"User Not Exist"})
        }
    })

})

app.post('/signup',(req,res)=>{
    const {name,email,password,confirmPassword}=req.body
    User.findOne({email:email},(err,data)=>{
        if(data){
            res.send({message:"User Already Registered"})
        }
        else{
            const element = new User({
                name:name,
                email:email,
                password:password
            })
            element.save((err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.send({message:"Succesfully registered, please login now"})
                }

            })
        }
    })

    
})

app.listen(8000,()=>{
    console.log("Server Started")

})

