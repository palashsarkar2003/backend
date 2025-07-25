// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()






/*
import express from "express"
const app = express()

(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("ERROR",()=>{
        console.log("ERR",error);
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch(eroor){
        console.error("ERROR: ",error)
        throw err
    }
})()

*/