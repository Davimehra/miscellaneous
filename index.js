const express = require('express');
const dotenv = require("dotenv");
const app = express();

dotenv.config();


app.get('/',(req,res,next)=>{

    console.log("Get Request Accepted");
    res.status(200);
    res.json({message:"Get Request / response"})
})
app.get("/user/signin",(req,res,next)=>{
    res.status(200);
    res.json({userid:'122344',email:"davimehra1234@gmail.com"})
})
app.listen(process.env.PORT,()=>{
console.log(`Listening at port ${process.env.PORT}`)
})