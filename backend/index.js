const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser")
const cors = require("cors")
dotenv.config()

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost/5173",
    credentials: true
    }
))

app.use("/api/auth", authRouter);


app.listen(port, ()=>{
    console.log(`Server Has started at ${port}`)
    connectDB()
})
