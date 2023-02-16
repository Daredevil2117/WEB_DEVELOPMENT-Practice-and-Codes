const fs = require('fs')

fs.rename('index.txt', 'indexreadme.txt', (err)=>{
    if(err){
        console.log(err)
    }
    console.log("File Renamed Succesfully");
})
