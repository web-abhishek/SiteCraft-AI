const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    avatar:{
        type: String,
    },
    credits:{
        type: Number,
        default: 100,
        min: 0,
    },
    plan:{
        type: String,
        enum:["Free", "Pro", "Enterprise"],
        default: "Free",

    }
},{timestamps: true});

const userModel = mongoose.model("users", userSchema)
module.exports = userModel;
console.log("userModel ready to use..!")