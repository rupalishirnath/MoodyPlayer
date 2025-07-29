const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("connected to MongoDB")
    }).catch((error)=>{
        console.error("error connecting to mongoDB❌",error);
    })
}

module.exports = connectToDB;