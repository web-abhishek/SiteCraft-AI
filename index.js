const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
dotenv.config()

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server Has started at ${port}`)
    connectDB()
})
