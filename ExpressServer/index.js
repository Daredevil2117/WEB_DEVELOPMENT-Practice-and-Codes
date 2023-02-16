const express = require('express')
const app = express()


app.get("/",(req, res)=>{
    // res.send('Hello Welcome to My Web Page')
    res.sendFile(__dirname +"/index.html")
})

app.listen(3000,()=>{
    console.log('Server Started')
})
