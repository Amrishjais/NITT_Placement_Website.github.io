import config from "./config.json" assert { type: 'json' };
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routes/authRoutes.js";


mongoose.connect(config.connectionString)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB not connected",err))

const app=express();
//const dotenv=require("dotenv").config()
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use('/',router);



const port=8000;
app.listen(port,()=>{
    console.log("Server Running")
});
export default app;
