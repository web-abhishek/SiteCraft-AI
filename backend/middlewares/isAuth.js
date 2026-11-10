const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model.js");

const isAuth = async (req, res, next) =>{
    try{
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({msg: 'token not found'})
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = await userModel.findById(decode.id)
        next()
    }catch(error){
        return res.status(500).json({msg: 'invalid token'})
    }
}

module.exports = isAuth;