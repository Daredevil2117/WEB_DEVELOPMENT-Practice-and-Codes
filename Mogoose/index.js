const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data')

const fruitsSchema= new mongoose.Schema({
   name:{
    type:String, 
    required : [true, 'Must Be Entered']
   },

   age:{
    type:Number,
    min:18,
    max:50
   }
})

const item = mongoose.model("First", fruitsSchema)

// const element = new item({
//     name: "Tejender",
//     age:23
// })

// // element.save();

// const element2 = new item({
//     name: "Rahul",
//     age:24
// })
// const element3 = new item({
//     name: "Rupesh",
//     age:25
// })

// item.insertMany([element4,element5],(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Inserted")
//     }

// })

// item.find((err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// const element = new item({
//     name:"ABCD",
//     age:19
// })

// element.save();

item.deleteOne({shop: "Ramesh"}, (err, d) => {
    if (err) console.log(err)
    if (d.acknowledged && d.deletedCount == 1)
        console.log("Deleted Successfully")    // Use your response code
    else{
        console.log("Record doesn't exist or already deleted")
        console.log(d.acknowledged)
    }
            // Use your response code
})





