const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/data")

const articleSchema = new mongoose.Schema({
    name:String,
    price:Number
})

// 1. GET  : server -> browser
// 2. POST : browser -> server 
//  const element = new Article({
//      name: "Sketching",
//      price:1800
//  })
//  element.save();


const Article = mongoose.model('items', articleSchema )

app.get('/',(req,res)=>{
    Article.find((err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(data)
        }

    })

})
app.post('/',(req,res)=>{
    const element = new Article({
    
        name: req.body.name,
        price: req.body.price

    })

    element.save()

})
app.listen(3000,()=>{
    console.log('Started')
})




