const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("Database Connected successfully..!")
    }
    catch(error){
        console.log("DB Error:", error)
    }
}

module.exports = connectDB;