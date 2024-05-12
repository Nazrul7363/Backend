require('dotenv').config()
const express = require('express'); // import express from "express"
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello dear");
});

app.get('/twitter',(req,res)=>{
    res.send("On Twitter Page")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Please Login First</h1>")
})

app.get('/youtube',(res,req)=>{
    res.send("<h2>Chai aur code tutorial</h2>")
})


app.listen(process.env.PORT,()=>{
    console.log(`server is lisening on port : ${process.env.PORT}`)
});

