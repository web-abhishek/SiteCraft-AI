const express = require('express');
const isAuth = require('../middlewares/isAuth.js');
const getCurrentUser = require('../controllers/user.controller.js');

const userRouter = express.Router();

userRouter.post("/me",isAuth, getCurrentUser);

module.exports=  userRouter;